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
  },
  shoppingCart: {
    path: "/shoppingCart",
    label: "Shopping",
    component: <ShoppingCart />,
  },
  summaryScreen: {
    path: "/summary",
    label: "Summary",
    component: <SummaryScreen />,
  },
  qrCode: {
    path: "/qrCode",
    label: "QrCode",
    component: <QrCodeScreen />,
  },
  confirmation: {
    path: "/confirmation",
    label: "Confirmation",
    component: <ConfirmationScreen />,
  },
  login: {
    path: "/",
    label: "Login",
    component: <Login />,
  },
  registration: {
    path: "/registration",
    label: "Registration",
    component: <Registration />,
  },
};

export default listRoutes;
