import * as React from "react";

import Login from "./components/User/Login/Login";
import Registration from "./components/User/Registration/Registration";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { ShoppingCart } from "./components/ShoppingCart/ShoppingCart";
import { SummaryScreen } from "./components/SummaryScreen/SummaryScreen";
import { QrCodeScreen } from "./components/QrCode/QrCodeScreen";
import { ConfirmationScreen } from "./components/ConfirmationScreen/ConfirmationScreen";

export default function App() {
  return (
    <>
      <ConfirmationScreen />
      {/* <QrCodeScreen /> */}
      {/* <SummaryScreen /> */}
      {/* <ShoppingCart /> */}
      {/* <Catalog /> */}
      {/* <Login /> */}
      {/* <Registration /> */}
    </>
  );
}
