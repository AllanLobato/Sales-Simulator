import React, { useState, useEffect } from "react";
import styles from "./ShoppingCart.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import listRoutes from "../../../routes";
import { useDispatch, useSelector } from "react-redux";
import { Actions as CartActions } from "../../../redux/ducks/cart";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export function ShoppingCart() {
  const cart = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();

  const handleRemove = (id) => {
    const newCart = cart.filter((product) => product.id !== id);
    dispatch(CartActions.updateCart(newCart));
  };

  const total = cart.reduce(
    (acc, products) => acc + products.price * products.amount,
    0
  );
  console.log(total);

  const decreaseProduct = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    if (cart[itemIndex].amount > 1) {
      const newCart = cart;
      newCart[itemIndex].amount -= 1;
      dispatch(CartActions.updateCart(newCart));
    } else {
      const nextCartItems = cart.filter((item) => item.id !== product.id);
      console.log(nextCartItems);

      dispatch(CartActions.updateCart(nextCartItems));
    }
  };

  const increaseProduct = (product) => {
    const itemIndex = cart.findIndex((item) => item.id === product.id);

    if (itemIndex >= 0) {
      const newCart = cart;
      newCart[itemIndex] = {
        ...newCart[itemIndex],
        amount: newCart[itemIndex].amount + 1,
      };

      dispatch(CartActions.updateCart(newCart));
    }
  };

  useEffect(() => {
    console.log("cart", cart);
  }, [cart]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={styles.principal}>
          <div className={styles.leftCard}>
            <div className={styles.productName}>
              <h2>Meu Carrinho</h2>
            </div>

            {cart.map((item) => (
              <div className={styles.cart_box} key={item.id}>
                <div className={styles.cart_img}>
                  <img src={item.img} alt="" />
                </div>

                <div>
                  <div className={styles.product}>
                    <p>{item.title}</p>
                  </div>

                  <div>
                    <span>R$ {item.price}</span>
                  </div>

                  <div className={styles.addCart}>
                    <button onClick={() => increaseProduct(item)}>+</button>
                    <button>{item.amount}</button>
                    <button onClick={() => decreaseProduct(item)}>-</button>
                  </div>

                  <div className={styles.remove}>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className={styles.rightCard}>
            <div className={styles.summary}>
              <h2>Resumo da Compra</h2>

              <div className={styles.purchaseSummary}>
                <div className={styles.subtotal}>
                  <h2>Subtotal</h2>
                </div>
                <div className={styles.value}>
                  <h2>R$ {total.toFixed(2)}</h2>
                </div>
              </div>

              <div className={styles.purchaseSummary}>
                <div className={styles.subtotal}>
                  <h2>Desconto</h2>
                </div>
                <div className={styles.value}></div>
              </div>

              <div className={styles.purchaseSummary}>
                <div className={styles.subtotal}>
                  <h2>Valor Total</h2>
                </div>
                <div className={styles.value}>
                  <h2>R$ {total.toFixed(2)}</h2>
                </div>
              </div>
              <div className={styles.button}>
                <Link to={listRoutes.summaryScreen.path}>
                  <Button fullWidth={true} variant="contained" size="medium">
                    Finalizar compra
                  </Button>
                </Link>
              </div>

              <div className={styles.button}>
                <Link to={listRoutes.catalog.path}>
                  <Button fullWidth={true} variant="outlined">
                    Escolher mais produtos
                  </Button>
                </Link>
              </div>

              <div className={styles.line}></div>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  );
}

// const Cart = ({ cart, setCart, handleChange }) => {
//   const [price, setPrice] = useState(0);
//   const handleRemove = (id) => {
//     const arr = cart.filter((item) => item.id !== id);
//     setCart(arr);
//     handlePrice();
//   };
//   const handlePrice = () => {
//     let ans = 0;
//     cart.map((item) => (ans += item.amount * item.price));
//     setPrice(ans);
//   };
//   useEffect(() => {
//     handlePrice();
//   });
//   return (
//     <article>
//       {cart.map((item) => (
//         <div className="cart_box" key={item.id}>
//           <div className="cart_img">
//             <img src={item.img} alt="" />
//             <p>{item.title}</p>
//           </div>
//           <div>
//             <button onClick={() => handleChange(item, 1)}>+</button>
//             <button>{item.amount}</button>
//             <button onClick={() => handleChange(item, -1)}>-</button>
//           </div>
//           <div>
//             <span>{item.price}</span>
//             <button onClick={() => handleRemove(item.id)}>Remove</button>
//           </div>
//         </div>
//       ))}
//       <div className="total">
//         <span>Total Price of your Cart</span>
//         <span>Rs - {price}</span>
//       </div>
//     </article>
//   );
// };
// export default Cart;
