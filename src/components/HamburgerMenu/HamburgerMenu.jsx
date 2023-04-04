//react
import { useState } from "react";

//styles
import styles from "./HamburgerMenu.module.css";

function HamburgerMenu({ onClick = undefined }) {
  const [active, setActive] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setActive((prev) => !prev);
  };

  return (
    <div
      onClick={handleClick}
      className={`${styles["hamburger-menu-container"]} ${
        active ? styles["menu-active"] : "not active"
      }`}
    >
      <div className={styles["hamburger-menu-container__menu-bar"]}></div>
    </div>
  );
}

export default HamburgerMenu;
