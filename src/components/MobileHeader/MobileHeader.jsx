//components
import BrandName from '../BrandName/BrandName';
// import MobileNavigation from '../MobileNavbar/MobileNavigation/MobileNavigation';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchButton from '../SearchButton/SearchButton';
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartButton';

//hooks

//styles
import styles from './MobileHeader.module.css';

export default function MobileHeader({
  brandName = undefined,
  brandLogo = null,
  navigationOptionsArray = undefined,
}) {
  return (
    <>
      <header className={styles['mobile-header-main']}>
        <BrandName title={brandName} imageSource={brandLogo} />

        <div className={styles['mobile-header-main__buttons']}>
          <SearchButton />
          <ShoppingCartButton />
          <HamburgerMenu />
        </div>
      </header>
    </>
  );
}
