// src/pages/login/index.js

import React from "react";

import { useHistory, useLocation } from "@docusaurus/router";

import { Login } from "../../components/Login";

import { BASE, LOGIN_PATH } from "../../utils/constants.js";

export default function loginPage() {
  const location = useLocation();
  const history = useHistory();

  let from = location.pathname;
  let to =
    history.location.pathname === LOGIN_PATH
      ? BASE
      : history.location.pathname;

  return <Login from={from} to={to} />;
}