import styles from "./Header.module.css";

import logo from "../../assets/logo.svg";
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logotipo" />
      <div className={styles.userInfo}>
        <div className={styles.person}>
          <PersonIcon fontSize="large" />
        </div>
        <div>
          <p>Olá, Fulano</p>
        </div>

        <div className={styles.cart}>
          <ShoppingCartOutlinedIcon fontSize="large" />
        </div>
      </div>
    </header>
  );
}
