import React from 'react';
import styles from '../styles/onlineService/OnlineService.module.css';
import { WhatsappLogo } from '@phosphor-icons/react';
import LogoComplete from '../../assets/icons/logo-complete.svg?react';

const OnlineService = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.onlineService}>
          <div className={styles.titleContainer}>
            <h1 className={styles.title}>
              Atendimento <span>online</span> <br /> para todo o{' '}
              <span>Brasil</span>
            </h1>
          </div>

          <span className={styles.divisor}></span>

          <div className={styles.box}>
            <p className={styles.subtitle}>Entre em contato agora mesmo</p>
            <a href="#" className={styles.button} data-aos="fade-up">
              <div className={styles.icon}>
                <WhatsappLogo size={20} weight="light" />
              </div>
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <div className={styles.logoContainer}>
        <div className={styles.logo} data-aos="zoom-in">
          <LogoComplete />
        </div>
      </div>
    </>
  );
};

export default OnlineService;
