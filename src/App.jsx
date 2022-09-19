import * as React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { listRoutes } from "./routes";
import Header from "./components/Header/Header";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        {useLocation !== listRoutes.login.path ? (
          <Header path="header" element={<Header />} />
        ) : null}

        <Routes>
          {Object.keys(listRoutes).map((route) =>
            listRoutes[route].private ? (
              <Route
                key={listRoutes[route].path}
                path={listRoutes[route].path}
                element={listRoutes[route].component}
              />
            ) : (
              <Route
                key={listRoutes[route].path}
                path={listRoutes[route].path}
                element={listRoutes[route].component}
              />
            )
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
}
