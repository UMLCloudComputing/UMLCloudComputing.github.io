// src/utils/env.js

// This utility checks for required env vars and provides fallbacks for local dev

const REQUIRED_ENV_VARS = [
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

function isEnvLocalLoaded() {
  // If any required env var is missing, assume .env.local is not loaded
  return REQUIRED_ENV_VARS.every((key) => typeof process.env[key] === 'string' && process.env[key] !== '');
}

function getEnvVar(key, fallback = undefined) {
  if (typeof process.env[key] === 'string' && process.env[key] !== '') {
    return process.env[key];
  }
  // Fallback for local dev
  if (fallback !== undefined) return fallback;
  // Some defaults for local dev
  if (key === 'ENV') return 'localhost';
  return undefined;
}

export { isEnvLocalLoaded, getEnvVar };
