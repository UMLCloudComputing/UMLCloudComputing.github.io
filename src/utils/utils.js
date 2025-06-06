// src/utils/utils.js

import { useThemeConfig } from "@docusaurus/theme-common";

// import { useAuthenticator } from "@aws-amplify/ui-react";
import { useAuth } from "react-oidc-context";

import {
  LOGIN_BUTTON,
  LOGIN_PATH,
  LOGOUT_BUTTON,
  LOGOUT_PATH,
  REQUIRED_ENV_VARS,
} from "./constants";

export function envType() {
  // Local, authentication disabled
  if (process.env.NODE_ENV === "test") {
    return 'local';
  }

  // Dev, authentication enabled, locally developed
  else if (process.env.NODE_ENV === "development") {
    return 'dev';
  }

  // Prod, authentication enabled, deployed on server
  else {
    if (REQUIRED_ENV_VARS.every((key) => (typeof process.env[key] === 'string') && (process.env[key] !== ''))) {
        throw new Error('FATAL: Missing required environment variables for AUTHENTICATION\nENV: ' + process.env.ENV)
    } else {
      return 'prod';
    } 
  }
  // If any required env var is missing, assume .env.* is not loaded
}

export function getEnvVar(key) {
  if (typeof process.env[key] === 'string' && process.env[key] !== '') {
    return process.env[key];
  }
}

export function useNavbarItemsMobile() {
  if (envType() === 'local') {
    // If .env.local is missing, do not render auth-related navbar items
    return useThemeConfig().navbar.items;
  }
  const auth = useAuth();

  let authElement;
  // Btw this is disgusting code, it's just how Docusaurus expects any HTML content for parsing, as a string...
  let html = auth.user?.profile.name + '&nbsp&nbsp<img class="profile_icon" src="' + auth.user?.profile.picture + '" alt="Profile Picture"/>';
  if (auth.isAuthenticated) {
    authElement = {
      id: 'logged-in-menu',
      type: 'dropdown',
      html: html,
      position: 'right',
      items: [
        {
          label: "Your Account",
          to: "/Account"
        },
        {
          label: LOGOUT_BUTTON,
          to: LOGOUT_PATH
        }
      ]
    }
  } else {
    authElement = {
      id: 'login-button',
      label: LOGIN_BUTTON,
      to: LOGIN_PATH
    }
  }

  // TODO temporary casting until ThemeConfig type is improved
  // return useThemeConfig().navbar.items;
  let items = useThemeConfig().navbar.items;
  items.push(authElement);

  // remove irrelevant items
  if (auth.isAuthenticated)
    items = items.filter((x) => x.label !== LOGIN_BUTTON);
  else {
    items = items.filter((x) => x.type !== 'dropdown');
  }
  const uniqueItems = [...new Map(items.map((x) => [x.label, x])).values()];

  return uniqueItems;
}

export function useNavbarItemsDesktop() {
  if (envType() === 'local') {
    // If .env.local is missing, do not render auth-related navbar items
    return useThemeConfig().navbar.items;
  }
  const auth = useAuth();

  let authElement;
  // Btw this is disgusting code, it's just how Docusaurus expects any HTML content for parsing, as a string...
  let html = '<img class="profile_icon" src="' + auth.user?.profile.picture + '" alt="Profile Picture"/>';
  if (auth.isAuthenticated) {
    authElement = {
      type: 'dropdown',
      html: html,
      position: 'right',
      items: [
        {
          label: "Your Account",
          to: "/Account"
        },
        {
          label: LOGOUT_BUTTON,
          to: LOGOUT_PATH
        }
      ]
    }
  } else {
    authElement = {
      label: LOGIN_BUTTON,
      to: LOGIN_PATH
    }
  }

  // TODO temporary casting until ThemeConfig type is improved
  // return useThemeConfig().navbar.items;
  let items = useThemeConfig().navbar.items;
  items.push(authElement);
  
  // remove irrelevant items
  if (auth.isAuthenticated)
    items = items.filter((x) => x.label !== LOGIN_BUTTON);
  else {
    items = items.filter((x) => x.type !== 'dropdown');
  }
  const uniqueItems = [...new Map(items.map((x) => [x.label, x])).values()];

  return uniqueItems;
}