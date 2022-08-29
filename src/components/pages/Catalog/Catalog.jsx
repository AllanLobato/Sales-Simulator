import styles from "../Catalog/Catalog.module.css";
import { Card } from "../../Card/Card";

import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../../redux/ducks/cart";

export function Catalog({ handleClick }) {
  const dispatch = useDispatch();

  const products = useSelector((state) => state.myFirstReducer.products); //const products para fazer o map
  console.log(products);

  const getProducts = () => {
    dispatch(Actions.getProductsFetch());
  };

  return (
    <>
      <div className={styles.productName}>
        <h2>Produtos</h2>
        <button onClick={getProducts}>Get Produtos</button>
      </div>
      <section>
        {products.map((item) => (
          <Card Key={item.id} item={item} handleClick={handleClick} />
        ))}
      </section>
    </>
  );
}
