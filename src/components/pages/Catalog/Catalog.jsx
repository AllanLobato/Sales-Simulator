import React, { useEffect } from "react";
import styles from "../Catalog/Catalog.module.css";
import { Card } from "../../Card/Card";

import { useDispatch, useSelector } from "react-redux";
import { Actions as ProductsActions } from "../../../redux/ducks/products";

export function Catalog() {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products); //const products para fazer o map

  const getProducts = () => {
    dispatch(ProductsActions.getProductsFetch());
  };

  useEffect(() => {
    getProducts();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <div className={styles.productName}>
        <h2>Produtos</h2>
      </div>
      <section>
        {products.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </section>
    </>
  );
}
