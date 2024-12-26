// src/config/amplify-config.js

import cognitoAuthConfig from "./cognito-auth-config";

export function configure() {
  // Assuming you have two redirect URIs, and the first is for localhost and
  // second is for production
  const [localRedirectURI, prodRedirectURI] =
    cognitoAuthConfig.redirect_uri.split(",");

  const updatedCognitoConfig = {
    ...cognitoAuthConfig,
    redirect_uri: 
      process.env.ENV === "localhost" 
      ? localRedirectURI
      : prodRedirectURI
  };

  return updatedCognitoConfig;
}