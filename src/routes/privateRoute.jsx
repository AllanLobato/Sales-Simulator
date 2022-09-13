/* eslint-disable react/prop-types */
import React from "react";
import { Route, Redirect, useLocation } from "react-router-dom";

import { useTitlePage, useVerifyRouteIsMyAccount } from "hooks";
import { shape } from "prop-types";
import { TOKEN_PROVU_MY_ACCOUNT, TOKEN_PROVU_PAY } from "services/constants";
import { isAuthenticated, getDevEnv } from "services/permissionService";

import listRoutes from "./listRoutes";

const PrivateRoute = ({ component: Component, title, ...rest }) => {
  useTitlePage(title);

  const { pathname } = useLocation();
  if (getDevEnv()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  const verifyIsAuthentication = () => {
    if (!useVerifyRouteIsMyAccount(pathname))
      return isAuthenticated(TOKEN_PROVU_PAY);
    return isAuthenticated(TOKEN_PROVU_MY_ACCOUNT);
  };

  const getRouteRedirect = () => {
    if (!useVerifyRouteIsMyAccount(pathname)) return "/";
    return listRoutes.signInMyAccount.path;
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        verifyIsAuthentication() ? (
          <Component {...props} />
        ) : (
          <Redirect to={getRouteRedirect()} />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  component: shape({}).isRequired,
};

export default PrivateRoute;
