// src/theme/Root.js

import React from "react";

// import { Amplify } from "aws-amplify";
// import { Authenticator } from "@aws-amplify/ui-react";

import { configure } from "../config/cognito-configure";
import { AuthCheck } from "../components/Auth";

import { AuthProvider } from 'react-oidc-context';

export default function Root({ children }) {
  const cognitoAuthConfig = configure()
  return (
    <AuthProvider {...cognitoAuthConfig}>
      <AuthCheck children={children} />
    </AuthProvider>
  );
}