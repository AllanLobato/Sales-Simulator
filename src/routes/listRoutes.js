import { Catalog } from "../components/pages/Catalog/Catalog";
import { ShoppingCart } from "../components/pages/ShoppingCart/ShoppingCart";
import { SummaryScreen } from "../components/pages/SummaryScreen/SummaryScreen";
import { QrCodeScreen } from "../components/pages/QrCode/QrCodeScreen";
import { ConfirmationScreen } from "../components/pages/ConfirmationScreen/ConfirmationScreen";
import Login from "../components/User/Login/Login";
import Registration from "../components/User/Registration/Registration";

const listRoutes = {
  catalog: {
    path: "/catalog",
    label: "Catalog",
    component: <Catalog />,
    private: false,
  },
  shoppingCart: {
    path: "/shoppingCart",
    label: "Shopping",
    component: <ShoppingCart />,
    private: false,
  },
  summaryScreen: {
    path: "/summary",
    label: "Summary",
    component: <SummaryScreen />,
    private: true,
  },
  qrCode: {
    path: "/qrCode",
    label: "QrCode",
    component: <QrCodeScreen />,
    private: true,
  },
  confirmation: {
    path: "/confirmation",
    label: "Confirmation",
    component: <ConfirmationScreen />,
    private: true,
  },
  login: {
    path: "/",
    label: "Login",
    component: <Login />,
    private: false,
  },
  registration: {
    path: "/registration",
    label: "Registration",
    component: <Registration />,
    private: false,
  },
};

export default listRoutes;
