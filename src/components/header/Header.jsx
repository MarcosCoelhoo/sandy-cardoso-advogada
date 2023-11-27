import React from 'react';
import styles from '../styles/header/Header.module.css';
import LogoMin from '../../assets/icons/logo-min.svg?react';
import MenuIcon from '../../assets/icons/menu.svg?react';
import MenuCloseIcon from '../../assets/icons/menu-close.svg?react';

const Header = () => {
  const [isOpenMenu, setIsOpenMenu] = React.useState(false);

  const handleMenuMobile = (event) => {
    switch (event.type) {
      case 'click':
        setIsOpenMenu(!isOpenMenu);
        break;

      case 'keydown':
        if (event.key === 'Enter') {
          setIsOpenMenu(!isOpenMenu);
        }
        break;

      default:
        break;
    }
  };

  return (
    <header className={styles.container}>
      <div className={styles.miniHeader}>
        <p>Aberto de segunda à sexta</p>
        <p>Rua Raimundo Vieira, n° 802, Bairro Marituba</p>
        <p>de 8h às 12h e 14h às 17h</p>
      </div>

      <div className={styles.header}>
        <a
          href="/"
          className={styles.logo}
          alt="Logo Sandy Cardoso"
          data-aos="fade-right"
        >
          <LogoMin />
        </a>

        <nav className={`${styles.nav} ${isOpenMenu && styles.visible}`}>
          <a className={styles.link} href="#" tabIndex={0} data-aos="fade-up">
            Contato
          </a>
          <a
            className={styles.link}
            href="#"
            tabIndex={0}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Serviços
          </a>

          <a
            className={styles.link}
            href="#"
            tabIndex={0}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Sobre mim
          </a>

          <a
            href="#"
            className={styles.btnCta}
            tabIndex={0}
            data-aos="fade-left"
          >
            Entrar em contato
          </a>
        </nav>

        <div
          className={styles.menuContainer}
          onClick={handleMenuMobile}
          onKeyDown={handleMenuMobile}
          tabIndex={0}
        >
          {!isOpenMenu ? <MenuIcon /> : <MenuCloseIcon />}
        </div>
      </div>
    </header>
  );
};

export default Header;
