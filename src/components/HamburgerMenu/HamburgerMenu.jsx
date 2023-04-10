//styles
import styles from './HamburgerMenu.module.css';

function HamburgerMenu({ navigationActive = false, onClick = undefined }) {
  return (
    <div
      onClick={onClick}
      className={`${styles['hamburger-menu-container']} ${
        navigationActive ? styles['menu-active'] : 'not active'
      }`}
    >
      <div className={styles['hamburger-menu-container__menu-bar']}></div>
    </div>
  );
}

export default HamburgerMenu;
