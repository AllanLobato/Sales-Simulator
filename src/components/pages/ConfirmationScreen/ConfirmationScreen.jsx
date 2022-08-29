import React from "react";
import styles from "./ConfirmationScreen.module.css";
import mulher from "../../../assets/mulher-empurrando-homem-carrinho-compras.png";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export function ConfirmationScreen() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.principal}>
          <div className={styles.leftCard}>
            <div className={styles.boletoPay}>
              <h2>Nº do pedido:</h2>
            </div>
            <img src={mulher} alt="" />

            <div className={styles.finalValue}>
              <h1>Tudo certo com sua compra!</h1>
            </div>

            <div className={styles.warning}></div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
