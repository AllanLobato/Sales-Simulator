import React from "react";
import { Header } from "../Header/Header";
import styles from "./ShoppingCart.module.css";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export function ShoppingCart() {
  return (
    <>
      <Header />
      <ThemeProvider theme={theme}>
        <div className={styles.principal}>
          <div className={styles.leftCard}>
            <div className={styles.productName}>
              <h2>Meu Carrinho</h2>
            </div>
          </div>

          <div className={styles.rightCard}>
            <div className={styles.summary}>
              <h2>Resumo da Compra</h2>

              <div className={styles.purchaseSummary}>
                <div className={styles.subtotal}>
                  <h2>Subtotal</h2>
                </div>
                <div className={styles.value}>
                  <h2>R$499,80</h2>
                </div>
              </div>

              <div className={styles.purchaseSummary}>
                <div className={styles.subtotal}>
                  <h2>Desconto</h2>
                </div>
                <div className={styles.value}>
                  <h2>10%</h2>
                </div>
              </div>

              <div className={styles.purchaseSummary}>
                <div className={styles.subtotal}>
                  <h2>Valor total</h2>
                </div>
                <div className={styles.value}>
                  <h2>R$499,80</h2>
                </div>
              </div>
              <div className={styles.button}>
                <Button fullWidth={true} variant="contained" size="medium">
                  Finalizar compra
                </Button>
              </div>

              <div className={styles.button}>
                <Button fullWidth={true} variant="outlined">
                  Escolher mais produtos
                </Button>
              </div>

              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
