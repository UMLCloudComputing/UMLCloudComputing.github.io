// src/config/cognito-auth-config.js

import { isEnvLocalLoaded, getEnvVar } from '../utils/env';

const cognitoAuthConfig = {
  authority: getEnvVar('AUTHORITY'),
  client_id: getEnvVar('CLIENT_ID'),
  redirect_uri: getEnvVar('REDIRECT_URI'),
  response_type: getEnvVar('OAUTH_REDIRECT_SIGN_RESPONSE_TYPE', 'code'),
  scope: getEnvVar('SCOPE', 'email openid phone'),
  // Add a flag for local mode
  isLocalDev: !isEnvLocalLoaded(),
};

export default cognitoAuthConfig;

// const awsConfig = {
//   region: process.env.REGION,
//   userPoolId: process.env.USER_POOL_ID,
//   userPoolWebClientId: process.env.USER_POOL_WEB_CLIENT_ID,
//   oauth: {
//     domain: process.env.OAUTH_DOMAIN,
//     redirectSignIn: process.env.OAUTH_REDIRECT_SIGN_IN,
//     redirectSignOut: process.env.OAUTH_REDIRECT_SIGN_OUT,
//     responseType: process.env.OAUTH_REDIRECT_SIGN_RESPONSE_TYPE,
//   },
// };

// export default awsConfig;