import React, { Component, useState, useEffect } from "react";
import styles from "../Catalog/Catalog.module.css";
import { Card } from "../../Card/Card";

import { useDispatch, useSelector } from "react-redux";
import { Actions as ProductsActions } from "../../../redux/ducks/products";

import { getProducts } from "../../../services/apiProductsService";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

//   handleAddProduct = product => {
//     const { addToCart } = this.props;
//     addToCart(product);
//   };

export function Catalog() {
  // const [products, setProducts] = useState([]);

  // async function getProducts() {
  //   const response = await api.get("products");
  //   const data = response.data.map((product) => ({
  //     ...product,
  //   }));
  // }

  // useEffect(() => {
  //   getProducts();

  //   return () => {
  //     setProducts(products);
  //   };
  // }, [products]);

  const teste = useSelector((state) => state);

  useEffect(() => {
    console.log("effect", teste);
  }, [teste]);

  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products); //const products para fazer o map
  console.log(products);

  const getProducts = () => {
    dispatch(ProductsActions.getProductsFetch());
  };

  return (
    <>
      <div className={styles.productName}>
        <h2>Produtos</h2>
        <button onClick={getProducts}>Get Produtos</button>
      </div>
      <section>
        {products.map((item) => (
          <Card Key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}

// const mapStateToProps = (state) => ({
//   amount: state.cart.reduce((amount, product) => {
//     amount[product.id] = product.amount;
//     return amount;
//   }, {}),
// });
// const mapDispatchToProps = (dispatch) => bindActionCreators(Actions, dispatch);
// export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
