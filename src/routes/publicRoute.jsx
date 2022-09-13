/* eslint-disable react/prop-types */
import React from "react";
import { Route } from "react-router-dom";

import { useTitlePage } from "hooks";
import { shape } from "prop-types";
import { getDevEnv } from "services/permissionService";

const PublicRoute = ({ component: Component, title, ...rest }) => {
  useTitlePage(title);

  if (getDevEnv()) {
    return <Route {...rest} render={(props) => <Component {...props} />} />;
  }

  // #TODO: Revisar condições de autenticado nao acessar rodar publica
  return (
    <Route
      {...rest}
      render={
        (props) => <Component {...props} />
        // isAuthenticated() ? (
        //   <Redirect to="/contrato" />
        // ) : (

        // )
      }
    />
  );
};

PublicRoute.propTypes = {
  component: shape({}),
};

export default PublicRoute;
