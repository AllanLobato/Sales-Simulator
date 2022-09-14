import React, { useState } from "react";
import styles from "./QrCodeScreen.module.css";
import QRCodeCanvas from "../../QRCodeCanvas/QRCodeCanvas";
import { useSelector } from "react-redux";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export function QrCodeScreen() {
  const [text, setText] = useState(
    "https://www.boletobancario.com/boletofacil/img/boleto-facil-exemplo.pdf"
  );

  const random = Math.floor(Math.random() * 10 + 5000);

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
            <div className={styles.boletoPay}>
              <h2>FALTA POUCO! AGORA É SÓ PAGAR O BOLETO</h2>
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

              <div className={styles.qrCode}>
                <input
                  onChange={(element) => setText(element.target.value)}
                  value={text}
                  type="text"
                />

                <QRCodeCanvas text={text}></QRCodeCanvas>
              </div>
            </div>

            <div className={styles.warning}>
              <p>
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
            <div className={styles.summaryFixed}>
              <h4>PRODUTO</h4>
              <h4>QTD</h4>
              <h4>SUBTOTAL</h4>
            </div>
            <div className={styles.summaryDynamic}>
              {cart.map((item) => (
                <>
                  <tr className={styles.produto}>
                    <td>
                      {item.title} - R${item.price.toFixed(2)}
                    </td>
                  </tr>
                  <tr className={styles.qtde}>
                    <td>{item.amount}</td>
                  </tr>
                  <tr className={styles.price}>
                    <td>R${item.amount * item.price.toFixed(2)}</td>
                  </tr>
                </>
              ))}
            </div>
            <div className={styles.summary}>
              <h2>Total</h2>
              <h2>R$ {total.toFixed(2)}</h2>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}
