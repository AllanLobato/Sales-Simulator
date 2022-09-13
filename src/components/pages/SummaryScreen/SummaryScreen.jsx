import React from "react";
import styles from "./SummaryScreen.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import listRoutes from "../../../routes";
import { useSelector } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export function SummaryScreen() {
  const cart = useSelector(({ cart }) => cart);

  const total = cart.reduce(
    (acc, products) => acc + products.price * products.amount,
    0
  );

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.principal}>
          <div className={styles.leftCard}>
            <div className={styles.productName}>
              <h2>Pagamento</h2>
            </div>
            <div className={styles.boletoPay}>
              <h2>PAGUE COM BOLETO BANCÁRIO</h2>
            </div>
            <div className={styles.line}></div>
            <div className={styles.finalValue}>
              <h1>{total.toFixed(2)}</h1>
            </div>
            ;
            <div className={styles.warning}>
              <p>
                Você poderá visualizar ou imprimir após a finalização do pedido.
                A data de vencimento é de 2 dias corridos após a conclusão do
                pedido. Após esta data, ele perderá a validade.
              </p>
            </div>
            <div className={styles.button}>
              <Link to="/qrcode">
                <Button fullWidth={true} variant="contained" size="medium">
                  Finalizar compra
                </Button>
              </Link>
            </div>
            <div className={styles.button}>
              <Link to={listRoutes.catalog.path}>
                <Button fullWidth={true} variant="outlined">
                  Voltar para a loja
                </Button>
              </Link>
            </div>
          </div>

          <div className={styles.rightCard}>
            <div className={styles.summary}>
              <h2>Resumo do Pedido</h2>
            </div>
            <div className={styles.summaryFixed}>
              <thead>
                <tr>
                  <th />
                  <th>PRODUTO</th>
                  <th>QTD</th>
                  <th>SUBTOTAL</th>
                  <th />
                </tr>
              </thead>
            </div>
            <div className={styles.summaryDynamic}>
              {cart.map((item) => (
                <>
                  <tr>
                    <td>{item.title}</td>
                  </tr>
                  <tr>
                    <td>{item.amount}</td>
                  </tr>
                  <tr>
                    <td>{item.price}</td>
                  </tr>
                </>
              ))}
            </div>
            <div className={styles.summary}>
              <h2>Total</h2>
              <h2>{total.toFixed(2)}</h2>
            </div>
            ;
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
