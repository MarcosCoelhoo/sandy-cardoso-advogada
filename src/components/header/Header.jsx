import React from 'react';
import styles from '../styles/header/Header.module.css';
import LogoMin from '../../assets/icons/logo-min.svg?react';
import MenuIcon from '../../assets/icons/menu.svg?react';
import MenuCloseIcon from '../../assets/icons/menu-close.svg?react';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  return (
    <header className={styles.container}>
      <div className={styles.miniHeader}>
        <p>Aberto de segunda à sexta</p>
        <p>Rua Raimundo Vieira, n° 802, Bairro Marituba</p>
        <p>de 8h às 12h e 14h às 17h</p>
      </div>

      <div className={styles.header}>
        <a href="/" className={styles.logo}>
          <LogoMin />
        </a>

        <nav className={`${styles.nav} ${isOpenMenu && styles.visible}`}>
          <a className={styles.link} href="#">
            Contato
          </a>
          <a className={styles.link} href="#">
            Serviços
          </a>
          <a className={styles.link} href="#">
            Sobre mim
          </a>
          <a href="#" className={styles.btnCta}>
            Entrar em contato
          </a>
        </nav>

        <div
          className={styles.menuContainer}
          onClick={() => setIsOpenMenu(!isOpenMenu)}
        >
          {!isOpenMenu ? <MenuIcon /> : <MenuCloseIcon />}
        </div>
      </div>
    </header>
  );
};

export default Header;
