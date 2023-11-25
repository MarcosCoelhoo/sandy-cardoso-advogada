import React from 'react';
import styles from '../styles/location/Location.module.css';
import localImg from '../../assets/images/local-image.png';
import LogoExtended from '../../assets/icons/logo-extended.svg?react';

import {
  NavigationArrow,
  Clock,
  EnvelopeSimple,
  Phone,
  WhatsappLogo,
} from '@phosphor-icons/react';

const Location = () => {
  return (
    <section className={styles.container}>
      <div className={styles.image}>
        <img src={localImg} alt="Parte da frente do escritório da Sandy" />
        <span className={styles.imgDetail}>
          <div className={styles.iconDetail}>
            <LogoExtended />
          </div>
          <p>Sinta-se convidado para me fazer uma visita</p>
        </span>
      </div>

      <div className={styles.content}>
        <div className={styles.header}>
          <p className={styles.subtitle}>Para atendimento presencial</p>
          <h1 className={styles.title}>Me faça uma visita!</h1>
        </div>

        <ul className={styles.infos}>
          <li className={styles.infoBox}>
            <div className={styles.iconBox}>
              <NavigationArrow weight="light" />
            </div>

            <p className={styles.label}>
              Rua Raimundo Vieira, n° 802, Bairro Marituba, Oeiras do Pará
              (68470.000).
            </p>
          </li>

          <li className={styles.infoBox}>
            <div className={styles.iconBox}>
              <Clock weight="light" />
            </div>

            <p className={styles.label}>
              Segunda à sexta, de 8h às 12h e 14h às 17h
            </p>
          </li>

          <li className={styles.infoBox}>
            <div className={styles.iconBox}>
              <EnvelopeSimple weight="light" />
            </div>

            <a
              className={styles.label}
              href="mailto:adv.sandycarvalho@gmail.com"
            >
              adv.sandycarvalho@gmail.com
            </a>
          </li>

          <li className={styles.infoBox}>
            <div className={styles.iconBox}>
              <Phone weight="light" />
            </div>

            <a className={styles.label} href="tel:9191431809">
              +91 9143-1809
            </a>
          </li>
        </ul>

        <div className={styles.contact}>
          <p>Entre em contato agora mesmo</p>
          <a href="#" className={styles.button}>
            <div className={styles.iconZap}>
              <WhatsappLogo size={20} weight="light" />
            </div>
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default Location;
