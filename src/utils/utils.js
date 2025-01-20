// src/utils/utils.js

import { useThemeConfig } from "@docusaurus/theme-common";

// import { useAuthenticator } from "@aws-amplify/ui-react";
import { useAuth } from "react-oidc-context";

import {
  LOGIN_BUTTON,
  LOGIN_PATH,
  LOGOUT_BUTTON,
  LOGOUT_PATH,
} from "./constants";

export function useNavbarItemsMobile() {
  // const { route } = useAuthenticator((context) => [context.route]);
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
          to: "/accountSettings"
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
  // const { route } = useAuthenticator((context) => [context.route]);
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
          to: "/accountSettings"
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