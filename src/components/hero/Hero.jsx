import React from 'react';
import styles from '../styles/hero/Hero.module.css';
import heroBackground from '../../assets/images/image-hero.png';
import heroBackgroundMobile from '../../assets/images/image-hero-mobile.png';
import LogoIconExtended from '../../assets/icons/logo-extended.svg?react';
import HeroInfos from './HeroInfos';

const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.content}>
          <div className={styles.logo}>
            <LogoIconExtended />
          </div>

          <div className={styles.infos}>
            <h1 className={styles.title}>
              Sandy
              <br />
              Carvalho
              <br />
              Advocacia
            </h1>

            <p className={styles.description}>
              Atuação em Direito de Família e Previdenciário
            </p>
          </div>

          <a href="#" className={styles.btnCta}>
            Entre em contato
          </a>
        </div>

        <picture className={styles.image}>
          <source media="(max-width: 600px)" srcSet={heroBackgroundMobile} />

          <img src={heroBackground} alt="Imagem de Sandy no seu escritório" />
        </picture>
      </div>

      <HeroInfos />
    </section>
  );
};

export default Hero;
