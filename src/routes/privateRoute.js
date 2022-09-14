/* eslint-disable react/prop-types */
import React from "react";
import { Navigate } from "react-router-dom";
import { listRoutes } from ".";

const PrivateRoute = (Component) => {
  const auth = sessionStorage.getItem("user");

  return auth ? <Component /> : <Navigate to={listRoutes.login.path} />
}




export default PrivateRoute;
