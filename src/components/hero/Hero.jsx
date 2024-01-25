import React from 'react';
import styles from '../styles/hero/Hero.module.css';
import heroBackground from '../../assets/images/image-hero.webp';
import heroBackgroundMobile from '../../assets/images/image-hero-mobile.webp';
import LogoIconExtended from '../../assets/icons/logo-extended.svg?react';
import HeroInfos from './HeroInfos';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.logo} data-aos="fade-right">
            <LogoIconExtended />
          </div>

          <div className={styles.infos}>
            <h1 className={styles.title} data-aos="fade-right">
              Sandy
              <br />
              Carvalho
              <br />
              Advocacia
            </h1>

            <p
              className={styles.description}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              Atuação em Direito de Família e Previdenciário
            </p>
          </div>

          <a
            href="https://api.whatsapp.com/message/3CZ2EIKXL5QEI1?autoload=1&app_absent=0"
            target="_blank"
            rel="noreferrer"
            aria-label="Entrar em contato com a advogada"
            className={styles.btnCta}
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            Entre em contato
          </a>
        </div>

        <picture className={styles.image} data-aos="fade-left">
          <source
            media="(max-width: 600px)"
            srcSet={heroBackgroundMobile}
            loading="lazy"
          />

          <img
            src={heroBackground}
            alt="Imagem de Sandy no seu escritório"
            loading="lazy"
          />
        </picture>
      </div>

      <HeroInfos />
    </section>
  );
};

export default Hero;
