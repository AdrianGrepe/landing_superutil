import React from "react";
import { Element } from "react-scroll";
import styles from "./Footer.module.css";
import logo from "../assets/images/logo.png";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandYoutube,
  IconBrandTiktok,
  IconMail,
} from "@tabler/icons-react";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footer__content}>
          <div className={styles.footer__section}>
            <Element name="contact">
              <img src={logo} alt="logo" className={styles.logo} />
            </Element>
            <p>&copy; 2024 SúperÚtil. Todos los derechos reservados.</p>
          </div>
          <div className={styles.footer__section}>
            <h3>Contacto</h3>
            <p>Email: contacto@superutil.mx</p>
            <p>Teléfono: 55 4002 8524</p>
          </div>
          <div className={styles.footer__section}>
            <h3>Síguenos</h3>
            <div className={styles.icons}>
              <a
                href="https://www.facebook.com/ProductosSuperUtil"
                target="_blank"
              >
                <IconBrandFacebook className={styles.icon} />
              </a>
              <a
                href="https://www.instagram.com/superutil_mex/"
                target="_blank"
              >
                <IconBrandInstagram className={styles.icon} />
              </a>
              <a href="https://www.tiktok.com/@super_util" target="_blank">
                <IconBrandTiktok className={styles.icon} />
              </a>
              <a
                href="https://www.youtube.com/channel/UCvKide4sB9zieDOeRqTH_ww"
                target="_blank"
              >
                <IconBrandYoutube className={styles.icon} />
              </a>
              <a href="mailto:contacto@superutil.mx" target="_blank">
                <IconMail className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
