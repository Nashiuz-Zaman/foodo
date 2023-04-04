//components
import BrandName from "../BrandName/BrandName";
// import MobileNavigation from '../MobileNavbar/MobileNavigation/MobileNavigation';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";

//hooks

//styles
import styles from "./MobileHeader.module.css";

export default function MobileHeader({
  brandName = undefined,
  navigationOptionsArray = undefined,
}) {
  return (
    <>
      <header className={styles["mobile-header-main"]}>
        <BrandName title={brandName} />
        <HamburgerMenu />
      </header>
    </>
  );
}
