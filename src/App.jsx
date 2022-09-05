import * as React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import listRoutes from "./routes";
import Header from "./components/Header/Header";
import Login from "./components/User/Login/Login";
import Registration from "./components/User/Registration/Registration";

export default function App() {
  const [show, setShow] = useState(true);
  const [cart, setCart] = useState([]);

  console.log(cart);

  const handleClick = (item) => {
    if (cart.indexOf(item) !== -1) return;
    setCart([...cart, item]);
  };

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d;
    if (arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  };

  return (
    <BrowserRouter>
      <Header
        path="header"
        element={<Header />}
        setShowpath={setShow}
        size={cart.length}
      />
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
