// src/config/aws-exports.js

const cognitoAuthConfig = {
  authority: process.env.AUTHORITY,
  client_id: process.env.CLIENT_ID,
  redirect_uri: process.env.REDIRECT_URI,
  response_type: process.env.OAUTH_REDIRECT_SIGN_RESPONSE_TYPE,
  scope: process.env.SCOPE,
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