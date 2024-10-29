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
  IconBrandWhatsapp,
  IconBrandTelegram,
  IconBrandMessenger,
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
            <div className={styles.footer__section}>
              <a
                href="mailto:contacto@superutil.mx"
                target="_blank"
                rel="noreferrer"
              >
                <IconMail className={styles.icon} />
              </a>
              <a
                href="https://wa.me/525540028424"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandWhatsapp className={styles.icon} />
              </a>
              <a
                href="https://t.me/Super_Util_Bot"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandTelegram className={styles.icon} />
              </a>
              <a
                href="https://m.me/ProductosSuperUtil"
                target="_blank"
                rel="noreferrer"
              >
                <IconBrandMessenger className={styles.icon} />
              </a>
            </div>
          </div>
          <div className={styles.footer__section}>
            <h3>Síguenos</h3>
            <a
              href="https://www.facebook.com/ProductosSuperUtil"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandFacebook className={styles.icon} />
            </a>
            <a
              href="https://www.instagram.com/superutil_mex/"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandInstagram className={styles.icon} />
            </a>
            <a
              href="https://www.tiktok.com/@super_util"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandTiktok className={styles.icon} />
            </a>
            <a
              href="https://www.youtube.com/channel/UCvKide4sB9zieDOeRqTH_ww"
              target="_blank"
              rel="noreferrer"
            >
              <IconBrandYoutube className={styles.icon} />
            </a>
            {/* <a
                href="mailto:contacto@superutil.mx"
                target="_blank"
                rel="noreferrer"
              >
                <IconMail className={styles.icon} />
              </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
