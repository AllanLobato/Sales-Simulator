import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Registration.module.css";
import "../../../global.css";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import listRoutes from "../../../routes";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export default function Registration() {
  return (
    <ThemeProvider theme={theme}>
      <div className={styles.principal}>
        <div className={styles.right}>
          <div className="">
            <img src={logo} alt="logo" />
          </div>

          <div className={styles.textHome}>
            <h2>
              Um jeito fácil de parcelar suas compras sem precisar do cartão de
              crédito.
            </h2>
          </div>

          <div>
            <p>Já possui uma conta? Entre agora.</p>
          </div>
        </div>

        <div className={styles.left}>
          <div className={styles.access}>
            <h1>Precisamos que complete algumas informações</h1>
            <div className={styles.usuario}>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Nome Completo"
                margin="normal"
              ></TextField>

              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email para contato"
                margin="normal"
              ></TextField>

              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Telefone para contato"
                margin="normal"
              ></TextField>

              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Crie uma senha"
                margin="normal"
              ></TextField>

              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Confirmar senha"
                margin="normal"
              ></TextField>
            </div>
            <div className={styles.forgotPass}>
              <p>Esqueceu a senha?</p>
            </div>
            <div className={listRoutes.login.path}>
              <Link to={listRoutes.catalog.path}>
                <Button fullWidth={true} variant="contained">
                  Finalizar Cadastro
                </Button>
              </Link>
            </div>
            <div>
              <Link to={listRoutes.login.path}>
                <p>Já possui uma conta? Entre agora.</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
