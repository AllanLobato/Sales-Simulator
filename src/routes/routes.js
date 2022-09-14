import React from "react";
import { Routes as ReactRoutes } from "react-router-dom";
import { listRoutes, PrivateRoute, PublicRoute } from ".";

const Routes = () => {
  return (
    <ReactRoutes>
      {Object.keys(listRoutes).map((route) =>
        listRoutes[route].private ? (
          <PrivateRoute
            key={listRoutes[route].path}
            path={listRoutes[route].path}
            element={listRoutes[route].component}
          />
        ) : (
          <PublicRoute
            key={listRoutes[route].path}
            path={listRoutes[route].path}
            element={listRoutes[route].component}
          />
        )
      )}
    </ReactRoutes>
  );
};

export default Routes;
