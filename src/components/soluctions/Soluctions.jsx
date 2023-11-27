import React from 'react';
import styles from '../styles/soluctions/Soluctions.module.css';
import { HeartHalf, Scales, WhatsappLogo } from '@phosphor-icons/react';

const Soluctions = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Soluções Jurídicas</h1>

      <div className={styles.box} tabIndex={0} data-aos="fade-left">
        <div className={styles.iconBox}>
          <HeartHalf size={20} weight="light" />
        </div>

        <div className={styles.textBox}>
          <p>Assessoria em Direito de Família</p>
        </div>
      </div>

      <div
        className={styles.box}
        tabIndex={0}
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div className={styles.iconBox}>
          <Scales size={20} weight="light" />
        </div>

        <div className={styles.textBox}>
          <p>Consultoria em Direito Previdenciário</p>
        </div>
      </div>

      <div
        className={`${styles.box} ${styles.zap}`}
        tabIndex={0}
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <a
          href="#"
          className={styles.iconBox}
          title="Me chame para uma conversa!"
        >
          <WhatsappLogo size={20} weight="light" />
        </a>

        <div className={styles.textBox}>
          <p>
            <strong>Atendimento personalizado?</strong> Clique no{' '}
            <span>icone</span> e me chame para uma conversa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Soluctions;
