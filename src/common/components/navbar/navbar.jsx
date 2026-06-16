import { Link } from "react-router";
//import styles from "./navbar.module.css";
//import { CartCounter } from "../cart-counter/cart-counter";

export function Navbar() {
  return (
    <header>
      <h1>Rick and Morty app</h1>
      <nav /*className={styles.container}*/>
        <Link to="/" /*className={styles.link}*/>
          Home
        </Link>
        <Link to="/yo" /*className={styles.link}*/>
          YO
        </Link>
        <Link to="/personajes" /*className={styles.link}*/>
          PERSONAJES
        </Link>
        <Link to="/favoritos" /*className={styles.link}*/>
          FAVORITOS
        </Link>
      </nav>
    </header>
  );
}