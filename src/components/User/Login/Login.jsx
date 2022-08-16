import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../Login/Login.module.css";
import "../../../global.css";
import logo from "../../../assets/logo.svg";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export default function Login() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.principal}>
        <div className={styles.right}>
          <div>
            <img src={logo} alt="logo" />
          </div>

          <div className={styles.textHome}>
            <h2>
              Um jeito fácil de parcelar suas compras sem precisar do cartão de
              crédito.
            </h2>
          </div>

          <div>
            <p>Não possui uma conta? Cadastre-se agora.</p>
          </div>
        </div>

        <div className={styles.left}>
          <div className={styles.access}>
            <h1>Acesse sua conta</h1>
            <div className={styles.usuario}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email ou CPF"
                margin="normal"
              >
                Usuario
              </TextField>

              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Senha de acesso"
                margin="normal"
              >
                Senha
              </TextField>
            </div>
            <div className={styles.forgotPass}>
              <p>Esqueceu a senha?</p>
            </div>
            <div className={styles.button}>
              <Button fullWidth={true} variant="contained">
                Entrar
              </Button>
            </div>
            <div>
              <p>Não possui uma conta? Cadastre-se agora.</p>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
