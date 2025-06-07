// src/utils/constants.js

export const LOGIN_PATH = "/login";
export const LOGOUT_PATH = "/logout";
export const AUTHENTICATED = "authenticated";
export const BASE = "/";

export const LOGOUT_BUTTON = "Logout";
export const LOGIN_BUTTON = "Login";

export const REQUIRED_ENV_VARS = [
  'AUTHORITY',
  'CLIENT_ID',
  'REDIRECT_URI',
  'OAUTH_REDIRECT_SIGN_RESPONSE_TYPE',
  'SCOPE',
  'REGION',
  'USER_POOL_ID',
  'USER_POOL_WEB_CLIENT_ID',
  'OAUTH_DOMAIN',
  'OAUTH_REDIRECT_SIGN_OUT',
  'ENV',
];

// Add the protected paths here
export const PROTECTED_PATHS = ["docs/resources", "docs/activities", "/accountSettings"];