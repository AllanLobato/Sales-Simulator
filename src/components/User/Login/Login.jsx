import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "../Login/Login.module.css";
import "../../../global.css";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import validatorSchema from "./validatorSchema";
import { useDispatch, useSelector } from "react-redux";
import { Actions as ClientActions } from "../../../redux/ducks/client";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export default function Login() {
  const initialValues = {
    login: "",
    password: "",
  };

  const handleSubmitForm = ({ login, password }) => {
    console.log(formik.errors.login);
  };

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onSubmit: handleSubmitForm,
    validationSchema: validatorSchema,
  });

  useEffect(() => {
    console.log(formik);
  }, [formik]);

  const user = {
    email: formik.values.login,
    password: formik.values.password,
  };

  const dispatch = useDispatch();

  // Salva os dados na sessionStorage
  sessionStorage.setItem("user", JSON.stringify(user));

  // Obtém os dados da sessionStorage

  const handleSubmitStorage = () => {
    var newUser = sessionStorage.getItem("user");
    console.log(newUser);
    dispatch(ClientActions.clientLogin(newUser));
  };

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
          <form onSubmit={formik.handleSubmit} className={styles.access}>
            <h1>Acesse sua conta</h1>
            <div className={styles.usuario}>
              <TextField
                fullWidth
                id="login"
                name="login"
                label="Email"
                margin="normal"
                value={formik.values.login}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // errorMessage={formik.touched.login && formik.errors.login}
              >
                Usuario
              </TextField>
              <h6>{formik.errors.login}</h6>

              <TextField
                fullWidth
                id="password"
                name="password"
                label="Senha de acesso"
                margin="normal"
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                // errorMessage={formik.touched.password && formik.errors.password}
              >
                Senha
              </TextField>
              <h6>{formik.errors.password}</h6>
            </div>
            <div className={styles.forgotPass}>
              <p>Esqueceu a senha?</p>
            </div>
            <div className={styles.button}>
              {/* <Link to="catalog"> */}
              <Button
                fullWidth={true}
                variant="contained"
                onClick={(formik.handleSubmit, handleSubmitStorage)}
                disabled={
                  formik.errors.login || formik.errors.password ? true : false
                }
              >
                Entrar
              </Button>
              {/* </Link> */}
            </div>
            <div>
              <Link to="registration">
                <p>Não possui uma conta? Cadastre-se agora.</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}
