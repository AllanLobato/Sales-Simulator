import React, { useState, useEffect } from "react";
import styles from "./ShoppingCart.module.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import listRoutes from "../../../routes";
import { useDispatch, useSelector } from "react-redux";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF4853",
    },
  },
});

export function ShoppingCart({ product, setCart, handleAddProduct }) {
  const [price, setPrice] = useState(0);

  const cart = useSelector(({ cart }) => cart);

  const handleRemove = (id) => {
    const newArr = cart.filter((item) => item.id !== id);
    return newArr;
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    return ans;
  };

  // useEffect(() => {
  //   handlePrice();
  // });

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
                    <button onClick={() => handleAddProduct(item, 1)}>+</button>
                    <button>{item.amount}</button>
                    <button onClick={() => handleAddProduct(item, -1)}>
                      -
                    </button>
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
                  <h2>R$ {}</h2>
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
                  <h2>R$ {}</h2>
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
