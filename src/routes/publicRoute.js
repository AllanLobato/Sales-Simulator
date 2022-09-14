/* eslint-disable react/prop-types */
import React from "react";
import { Route } from "react-router-dom";

import { shape } from "prop-types";

const PublicRoute = ({ component: Component, title, ...rest }) => {
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

PublicRoute.propTypes = {
  component: shape({}),
};

export default PublicRoute;
