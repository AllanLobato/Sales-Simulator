import React, { useEffect } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import styles from "./Registration.module.css";
import "../../../global.css";
import logo from "../../../assets/logo.svg";
import { Link } from "react-router-dom";
import listRoutes from "../../../routes";
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

export default function Registration() {
  const initialValues = {
    login: "",
    password: "",
    passwordMatch: "",
  };

  const handleSubmitForm = ({ login, password, passwordMatch }) => {
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

  const newUser = {
    email: formik.values.login,
    password: formik.values.password,
  };

  const dispatch = useDispatch();

  // Salva os dados na sessionStorage
  sessionStorage.setItem("newUser", JSON.stringify(newUser));

  // Obtém os dados da sessionStorage

  const handleSubmitStorage = () => {
    var newUser = sessionStorage.getItem("newUser");
    console.log(newUser);
    dispatch(ClientActions.clientRegister(newUser));
  };

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
          <form onSubmit={formik.handleSubmit} className={styles.access}>
            <h1>Precisamos que complete algumas informações</h1>
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
              ></TextField>
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
              ></TextField>
              <h6>{formik.errors.password}</h6>

              <TextField
                fullWidth
                id="passwordMatch"
                name="passwordMatch"
                label="Confirmar senha"
                margin="normal"
                value={formik.values.passwordMatch}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              ></TextField>
              <h6>{formik.errors.passwordMatch}</h6>
            </div>
            <div className={styles.forgotPass}>
              <p>Esqueceu a senha?</p>
            </div>
            <div className={listRoutes.login.path}>
              {/* <Link to={listRoutes.catalog.path}> */}
              <Button
                fullWidth={true}
                variant="contained"
                onClick={(formik.handleSubmit, handleSubmitStorage)}
                disabled={
                  formik.errors.login ||
                  formik.errors.password ||
                  formik.errors.passwordMatch
                    ? true
                    : false
                }
              >
                Finalizar Cadastro
              </Button>
              {/* </Link> */}
            </div>
            <div>
              {/* <Link to={listRoutes.login.path}> */}
              <p>Já possui uma conta? Entre agora.</p>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </ThemeProvider>
  );
}
