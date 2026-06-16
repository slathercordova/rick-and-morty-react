import { Heart, House, User, Users } from "lucide-react";
import { Link } from "react-router";
import Icon from "./../../images/icon.jpg";
import styles from "./navbar.module.css";
//import { CartCounter } from "../cart-counter/cart-counter";

export function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.logoSection}>
        <img src={Icon} alt="Rick and Morty" className={styles.logo} />

        <h1>Rick & Morty App</h1>
      </div>

      <nav className={styles.nav}>
        <Link to="/" /*className={styles.link}*/>
          <House size={20} />
          Home
        </Link>

        <Link to="/personajes" /*className={styles.link}*/>
          <Users size={20} />
          PERSONAJES
        </Link>

        <Link to="/favoritos" /*className={styles.link}*/>
          <Heart size={20} />
          FAVORITOS
        </Link>
      </nav>
    </header>
  );
}
