import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import listRoutes from "../../routes";

import logo from "../../assets/logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export function Header({ setShow, cartSize }) {
  return (
    <header className={styles.header}>
      <Link to={listRoutes.catalog.path}>
        <img src={logo} alt="Logotipo" />
      </Link>

      <div className={styles.userInfo}>
        <div className={styles.person}>
          <PersonIcon fontSize="large" />
        </div>
        <div>
          <p>Olá, Fulano</p>
        </div>

        <Link to={listRoutes.shoppingCart.path}>
          <div className={styles.cart}>
            <span>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </span>
            <span>{cartSize}</span>
          </div>
        </Link>
      </div>
    </header>
  );
}

export default connect((state) => ({
  cartSize: state.cart.length,
}))(Header);
