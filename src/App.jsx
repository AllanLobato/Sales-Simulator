import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import listRoutes from "./routes";
import Header from "./components/Header/Header";
import Login from "./components/User/Login/Login";
import Registration from "./components/User/Registration/Registration";

export default function App() {
  return (
    <BrowserRouter>
      <Header path="header" element={<Header />} />
      {/* {show ? (
        <Catalog handleClick={handleClick} />
      ) : (
        <ShoppingCart
          cart={cart}
          setCart={setCart}
          handleChange={handleChange}
        />
      )} */}
      <Routes>
        {Object.keys(listRoutes).map((route) => {
          return (
            <Route
              path={listRoutes[route].path}
              element={listRoutes[route].component}
            />
          );
        })}
        {/* <Route path="catalog" element={<Catalog />} /> */}
        {/* <Route
          path="shopping"
          element={
            <ShoppingCart
              cart={cart}
              setCart={setCart}
              handleChange={handleChange}
            />
          }
        />
        <Route path="summary" element={<SummaryScreen />} />
        <Route path="qrcode" element={<QrCodeScreen />} />
        <Route path="confirmation" element={<ConfirmationScreen />} />
        <Route path="/" element={<Login />} exact /> */}
        {/* <Route path="registration" element={<Registration />} /> */}
      </Routes>
    </BrowserRouter>
  );
}
