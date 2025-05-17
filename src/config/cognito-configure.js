// src/config/cognito-config.js

import cognitoAuthConfig from "./cognito-auth-config";
import { isEnvLocalLoaded } from '../utils/env';

export function configure() {
  // If .env.local is missing, fallback to local dev mode and skip config
  if (!isEnvLocalLoaded()) {
    return {
      ...cognitoAuthConfig,
      // Optionally, set all sensitive/remote fields to undefined
      authority: undefined,
      client_id: undefined,
      redirect_uri: undefined,
      isLocalDev: true,
    };
  }
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