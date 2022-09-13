import React, { useState, useRef } from "react";
import styles from "./QrCodeScreen.module.css";
import QRCodeCanvas from "../../QRCodeCanvas/QRCodeCanvas";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export function QrCodeScreen() {
  const [text, setText] = useState("Alguma coisa");

  const random = Math.floor(Math.random() * 10 + 5000);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.principal}>
          <div className={styles.leftCard}>
            <div className={styles.boletoPay}>
              <h2>PAGUE COM BOLETO BANCÁRIO</h2>
              <p>
                Seu pedido será enviado somente após a confirmação de pagamento
              </p>
            </div>
            <div className={styles.line}></div>

            <div className={styles.finalValue}>
              <h1>Nº do pedido: {random}</h1>
              <p>
                Agora você pode escanear com seu celular para ter acesso ao
                boleto!
              </p>

              <input
                onChange={(element) => setText(element.target.value)}
                value={text}
                type="text"
              />

              <QRCodeCanvas text={text}></QRCodeCanvas>
            </div>

            <div className={styles.warning}>
              <p className={styles.vencimento}>
                Você poderá visualizar ou imprimir após a finalização do pedido.
                A data de vencimento é de 2 dias corridos após a conclusão do
                pedido. Após esta data, ele perderá a validade.
              </p>
            </div>
          </div>

          <div className={styles.rightCard}>
            <div className={styles.summary}>
              <h2>Resumo do Pedido</h2>
            </div>
            <div className={styles.summary}>
              <h4>Itens do Pedido</h4>
              <h4>Qtde</h4>
              <h4>Preço</h4>
            </div>
            <div className={styles.summary}>
              <h2>Total</h2>
              <h2>R$499,80</h2>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
