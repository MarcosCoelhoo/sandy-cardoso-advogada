import React from 'react';
import styles from '../styles/hero/HeroInfos.module.css';
import { GraduationCap, Heart, CirclesFour } from '@phosphor-icons/react';

const HeroInfos = () => {
  return (
    <ul className={styles.container}>
      <li className={styles.box}>
        <div className={styles.iconBox}>
          <GraduationCap size={20} weight="light" />
        </div>
        <h2 className={styles.title}>
          Graduada em Direito pela Universidade da Amazônia - UNAMA
        </h2>
      </li>

      <span className={styles.divisor}></span>

      <li className={styles.box}>
        <div className={styles.iconBox}>
          <Heart size={20} weight="light" />
        </div>
        <h2 className={styles.title}>
          Atendimento com empatia, comunicação clara e prontidão para esclarecer
          dúvidas.
        </h2>
      </li>

      <span className={styles.divisor}></span>

      <li className={styles.box}>
        <div className={styles.iconBox}>
          <CirclesFour size={20} weight="light" />
        </div>
        <h2 className={styles.title}>
          Abordagem personalizada para atender cada caso de acordo com suas
          necessidades.
        </h2>
      </li>
    </ul>
  );
};

export default HeroInfos;
