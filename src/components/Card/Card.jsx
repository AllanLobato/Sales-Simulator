import React from "react";
import styles from "../Card/Card.module.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export const Card = ({ item, handleClick }) => {
  const { title, price, img } = item;

  return (
    <ThemeProvider theme={theme}>
      <section>
        <div className={styles.cards}>
          <div className={styles.image_box}>
            <img src={img} alt="" />
          </div>
          <div className={styles.details}>
            <p>{title}</p>
            <p>R$ {price}</p>
            <div className={styles.button}>
              <Button
                fullWidth={true}
                variant="outlined"
                onClick={() => handleClick(item)}
              >
                Add ao carrinho
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ThemeProvider>
  );
};
