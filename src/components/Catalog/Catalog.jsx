import React from "react";
import { Header } from "../Header/Header";
import styles from "../Catalog/Catalog.module.css";

export function Catalog() {
  return (
    <>
      <Header />
      <div className={styles.productName}>
        <h2>Tênis Unissex</h2>
      </div>
    </>
  );
}
