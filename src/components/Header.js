import React, { useState } from "react";
import { Link } from "react-scroll";
import logo from "../assets/images/logo.png";
import styles from "./Header.module.css";
import { IconMenu2, IconX } from "@tabler/icons-react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.nav__container}>
        <img src={logo} alt="imagen" className={styles.logo} />
        <button className={styles.menuToggle} onClick={toggleMenu}>
          {isMenuOpen ? <IconX /> : <IconMenu2 />}
        </button>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className={styles.nav__link}
          >
            Inicio
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={500}
            className={styles.nav__link}
          >
            Productos
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className={styles.nav__link}
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
