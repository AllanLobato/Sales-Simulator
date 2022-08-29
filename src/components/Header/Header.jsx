import styles from "./Header.module.css";
import { Link } from "react-router-dom";

import logo from "../../assets/logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export function Header({ setShow, size }) {
  return (
    <header className={styles.header}>
      <Link to="/">
        <img src={logo} alt="Logotipo" onClick={() => setShow(true)} />
      </Link>

      <div className={styles.userInfo}>
        <div className={styles.person}>
          <PersonIcon fontSize="large" />
        </div>
        <div>
          <p>Olá, Fulano</p>
        </div>

        <Link to="shopping">
          <div className={styles.cart} onClick={() => setShow(false)}>
            <span>
              <ShoppingCartOutlinedIcon fontSize="large" />
            </span>
            <span>{size}</span>
          </div>
        </Link>
      </div>
    </header>
  );
}
