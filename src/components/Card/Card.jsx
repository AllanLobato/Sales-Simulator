import React, { useEffect } from "react";
import styles from "../Card/Card.module.css";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Actions as CartActions } from "../../redux/ducks/cart";
import { useDispatch, useSelector } from "react-redux";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Catalog } from "../pages/Catalog/Catalog";
import listRoutes from "../../routes";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export const Card = ({ item }) => {
  const { title, price, img } = item;

  const cart = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();

  const handleAddProduct = () => {
    const newCart = verifyExistItem();
    console.log(newCart);
    dispatch(CartActions.updateCart(newCart));
  };

  useEffect(() => {}, [cart]);

  function verifyExistItem() {
    const existItem = cart.some((product) => product.id === item.id);

    if (existItem) {
      const newCart = cart.map((product) => {
        return product.id === item.id
          ? { ...product, amount: product.amount + 1 }
          : product;
      });
      return newCart;
    } else {
      const newItem = { ...item, amount: 1 };
      const newCart = [...cart, newItem];
      return newCart;
    }
  }

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
                onClick={handleAddProduct}
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

// const mapStateToProps = (state) => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;
//     return amount;
//   }, {}),
// });
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(CartActions, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
