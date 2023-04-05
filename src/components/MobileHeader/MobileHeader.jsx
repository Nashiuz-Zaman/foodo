//components
import BrandName from "../BrandName/BrandName";
// import MobileNavigation from '../MobileNavbar/MobileNavigation/MobileNavigation';
import HamburgerMenu from "../HamburgerMenu/HamburgerMenu";
import SearchButton from "../SearchButton/SearchButton";

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

        <div className={styles["mobile-header-main__buttons"]}>
          <SearchButton />
          <HamburgerMenu />
        </div>
      </header>
    </>
  );
}
