import React from 'react';
import styles from '../styles/footer/Footer.module.css';
import {
  FacebookLogo,
  InstagramLogo,
  Phone,
  WhatsappLogo,
} from '@phosphor-icons/react';

import QuoteIcon from '../../assets/icons/quote-icon.svg?react';

const Footer = () => {
  return (
    <footer className={styles.container} id="footer">
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Contatos</h1>

          <ul className={styles.socials}>
            <li className={styles.socialBox}>
              <div className={styles.iconBox}>
                <FacebookLogo />
              </div>

              <a
                href="https://www.facebook.com/sandy.cardoso.3"
                target="_blank"
                rel="noreferrer"
                className={styles.label}
              >
                facebook.com/sandyCarvalho
              </a>
            </li>
            <li className={styles.socialBox}>
              <div className={styles.iconBox}>
                <InstagramLogo />
              </div>

              <a
                href="https://www.instagram.com/_sandycarvalho_/"
                target="_blank"
                rel="noreferrer"
                className={styles.label}
              >
                @_sandycarvalho_
              </a>
            </li>
            <li className={styles.socialBox}>
              <div className={styles.iconBox}>
                <WhatsappLogo />
              </div>

              <a
                href="https://api.whatsapp.com/message/3CZ2EIKXL5QEI1?autoload=1&app_absent=0"
                target="_blank"
                rel="noreferrer"
                className={styles.label}
              >
                +91 9143-1809
              </a>
            </li>
            <li className={styles.socialBox}>
              <div className={styles.iconBox}>
                <Phone />
              </div>

              <a
                href="
              tel:9191431809"
                className={styles.label}
              >
                +91 9143-1809
              </a>
            </li>
          </ul>
        </div>

        <span className={styles.divisor}></span>

        <div className={styles.quote}>
          <div className={styles.quoteIcon}>
            <QuoteIcon />
          </div>

          <blockquote className={styles.quoteContent}>
            <p className={styles.text}>
              A injustiça num lugar qualquer é uma ameaça à justiça em todo o
              lugar.
            </p>
            <cite className={styles.author}>- Martin Luther King</cite>
          </blockquote>
        </div>
      </div>

      {/* <span className={styles.footerDetail}>
        <LogoExtended />
      </span> */}
    </footer>
  );
};

export default Footer;
