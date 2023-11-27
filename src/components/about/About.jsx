import React from 'react';
import styles from '../styles/about/About.module.css';

import {
  FacebookLogo,
  InstagramLogo,
  WhatsappLogo,
} from '@phosphor-icons/react';
import aboutImDesktop from '../../assets/images/image-about.webp';
import aboutImgmMobile from '../../assets/images/image-about-mobile.webp';
import LogoExtendend from '../../assets/icons/logo-extended.svg?react';

const About = () => {
  return (
    <>
      <section className={styles.container}>
        <div className={styles.about}>
          <div className={styles.content}>
            <div className={styles.infos}>
              <h1 className={styles.title} data-aos="fade-right">
                Sobre mim
              </h1>
              <p
                className={styles.description}
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Advogada Sandy Carvalho, graduada em Direito pela Universidade
                da Amazônia - UNAMA, é especialista em demandas de Direito de
                Família e Previdenciário.
              </p>
            </div>

            <div className={styles.socials}>
              <a href="#" className={styles.iconBox} data-aos="fade-up">
                <FacebookLogo weight="light" />
                <span className={styles.iconDetail}>Facebook</span>
              </a>

              <a
                href="#"
                className={styles.iconBox}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <InstagramLogo weight="light" />
                <span className={styles.iconDetail}>Instagram</span>
              </a>

              <a
                href="#"
                className={styles.iconBox}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <WhatsappLogo weight="light" />
                <span className={styles.iconDetail}>WhatsApp</span>
              </a>
            </div>
          </div>

          <picture className={styles.image} data-aos="fade-down">
            <source
              media="(max-width: 700px)"
              srcSet={aboutImgmMobile}
              loading="lazy"
            />

            <img
              src={aboutImDesktop}
              alt="Sandy Cardoso sentada"
              loading="lazy"
            />
          </picture>
        </div>
      </section>

      <div className={styles.logoContainer}>
        <div className={styles.logo} data-aos="zoom-in" data-aos-delay="200">
          <LogoExtendend />
        </div>
      </div>
    </>
  );
};

export default About;
