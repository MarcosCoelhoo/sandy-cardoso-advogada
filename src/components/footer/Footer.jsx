import React from 'react';
import styles from '../styles/footer/Footer.module.css';
import {
  FacebookLogo,
  InstagramLogo,
  Phone,
  WhatsappLogo,
} from '@phosphor-icons/react';

import LogoExtended from '../../assets/icons/logo-extended.svg?react';
import QuoteIcon from '../../assets/icons/quote-icon.svg?react';

const Footer = () => {
  return (
    <footer className={styles.container}>
      <div className={styles.footer}>
        <div className={styles.contacts}>
          <h1 className={styles.title}>Contatos</h1>

          <ul className={styles.socials}>
            <li className={styles.socialBox}>
              <div className={styles.iconBox}>
                <FacebookLogo />
              </div>

              <a href="#" className={styles.label}>
                facebook.com/sandyCarvalho
              </a>
            </li>
            <li className={styles.socialBox}>
              <div className={styles.iconBox}>
                <InstagramLogo />
              </div>

              <a href="#" className={styles.label}>
                @_sandycarvalho_
              </a>
            </li>
            <li className={styles.socialBox}>
              <div className={styles.iconBox}>
                <WhatsappLogo />
              </div>

              <a href="#" className={styles.label}>
                +91 9143-1809
              </a>
            </li>
            <li className={styles.socialBox}>
              <div className={styles.iconBox}>
                <Phone />
              </div>

              <a href="#" className={styles.label}>
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
