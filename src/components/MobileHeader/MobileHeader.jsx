//react
import { useState, useRef, useEffect } from 'react';

//components
import BrandName from '../BrandName/BrandName';
import MobileNavigationMenu from '../MobileNavigationMenu/MobileNavigationMenu';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchButton from '../SearchButton/SearchButton';
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartButton';
import SearchWindow from '../SearchWindow/SearchWindow';

//styles
import styles from './MobileHeader.module.css';

export default function MobileHeader({
  brandName = undefined,
  brandLogo = null,
  navigationOptions = [],
}) {
  const headerRef = useRef(null);
  // state for header height
  const [headerHeight, setHeaderHeight] = useState(null);
  // state for navigation menu
  const [navigationActive, setNavigationActive] = useState(false);
  const [searchActive, setSearchActive] = useState(false);

  // this handle click will handle state changes in both hamburger menu and mobile navigaton menu
  const handleNavigationClick = () => {
    setNavigationActive((prev) => !prev);
  };

  const handleSearchClick = () => {
    setSearchActive((prev) => !prev);
  };

  useEffect(() => {
    if (headerRef) {
      setHeaderHeight(headerRef.current.scrollHeight);
    }
  }, [headerRef]);

  return (
    <>
      <header ref={headerRef} className={styles['mobile-header-main']}>
        <BrandName title={brandName} imageSource={brandLogo} />

        <div className={styles['mobile-header-main__buttons']}>
          <SearchButton onClick={handleSearchClick} />
          <ShoppingCartButton />
          <HamburgerMenu
            navigationActive={navigationActive}
            onClick={handleNavigationClick}
          />
        </div>
      </header>

      <MobileNavigationMenu
        marginTop={headerHeight}
        navigationOptions={navigationOptions}
        navigationActive={navigationActive}
        onClick={handleNavigationClick}
      />

      <SearchWindow searchActive={searchActive} headerHeight={headerHeight} />
    </>
  );
}
