// src/config/cognito-config.js

import cognitoAuthConfig from "./cognito-auth-config";
import { envType } from '../utils/utils';

export function configure() {
  if (envType() === 'local') {
    console.log("Local mode detected, skipping authentication config");
    return {};
  }

  // Assuming you have two redirect URIs, and the first is for localhost and
  // second is for production
  const [localRedirectURI, prodRedirectURI] =
    cognitoAuthConfig.redirect_uri.split(",");

  const updatedCognitoConfig = {
    ...cognitoAuthConfig,
    redirect_uri: 
      envType() === "dev" 
      ? localRedirectURI
      : prodRedirectURI
  };

  
  if (envType() === 'dev') {
    console.log("Dev mode detected, configuring for local development with authentication enabled");
    return updatedCognitoConfig;
  }

  // Running in production
  else {
    return updatedCognitoConfig;
  }
}