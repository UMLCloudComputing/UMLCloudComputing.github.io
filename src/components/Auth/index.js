// src/components/Auth/index.js

import React from "react";
import { useAuth } from "react-oidc-context";
import { Redirect, useLocation } from "@docusaurus/router";
import ReactLoading from 'react-loading';
import { envType, getEnvVar } from "../../utils/utils.js";

import {
  // AUTHENTICATED,
  BASE,
  LOGIN_PATH,
  LOGOUT_PATH,
  PROTECTED_PATHS,
} from "../../utils/constants.js";


export function AuthCheck({ children }) {
  const location = useLocation();
  let from = location.pathname;
  const auth = useAuth();

  // If .env.local is missing, skip all auth logic and just render children
  if (envType() === 'local') {
    // If the path is protected, redirect to sign in
    if (PROTECTED_PATHS.filter((x) => from.includes(x)).length)
      return <Redirect to={BASE} from={from}/>;
    return children;
  }

  const [local_logout_uri, prod_logout_uri] = process.env.OAUTH_REDIRECT_SIGN_OUT.split(",");

  const signOutRedirect = () => {
    const clientId = process.env.CLIENT_ID;
    const logoutUri = process.env.ENV === "local"
                      ? local_logout_uri
                      : prod_logout_uri;
    const cognitoDomain = process.env.OAUTH_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(logoutUri)}`;
  };
  // Loading
  if (auth.isLoading) {
    return <div className="loading_bubbles">
      <img src='/img/club-logo.png' alt='Club Logo' className="landing-logo"/>
      <ReactLoading type={"bubbles"} color={"#6e70f6"} height={'80%'} width={'80%'}/>
      </div>;
  }
  // Error 
  if (auth.error) {
    return <div>Encountering error... {auth.error.message}</div>;
  }
  
  /*
    If it is not authenticated and tries to access the protected paths.
    Also, a custom error appears if anything happens.
  */

  // Is authenticated
  if (auth.isAuthenticated) {
    // If recovering from logout path, remove the user and redirect to sign out
    if (from === LOGOUT_PATH) {
      auth.removeUser();
      return <signOutRedirect />;
    } else if (from === LOGIN_PATH) return <Redirect to={BASE} from={from} />; // Properly redirect to correct page
    // Otherwise return children
    return children;
  } else { // Not authenticated
    // If recovering from logout, redirect to base URL
    if (from === LOGOUT_PATH) return <Redirect to={BASE} from={from} />;
    // If the path is protected, redirect to sign in
    else if (PROTECTED_PATHS.filter((x) => from.includes(x)).length)
      auth.signinRedirect();
    // If recovering from the login path
    else if (from === LOGIN_PATH) auth.signinRedirect();
    return children;
  }
}

