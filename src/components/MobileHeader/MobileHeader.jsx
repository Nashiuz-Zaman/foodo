//react
import { useRef, useEffect } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { setHeaderHeight } from '../../features/header/headerSlice';
import { toggleNavigation } from '../../features/navigation/navigationSlice';
import {
  openSearchWindow,
  closeSearchWindow,
} from '../../features/searchWindow/searchWindowSlice';

//components
import BrandName from '../BrandName/BrandName';
import HamburgerMenu from '../HamburgerMenu/HamburgerMenu';
import SearchButton from '../SearchButton/SearchButton';
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartButton';

//styles
import styles from './MobileHeader.module.css';

export default function MobileHeader({
  brandName = undefined,
  brandLogo = null,
  isMenuIconActive = false,
}) {
  const headerRef = useRef(null);
  const dispatch = useDispatch();
  const appState = useSelector((state) => state);

  useEffect(() => {
    if (headerRef) {
      dispatch(setHeaderHeight(headerRef.current.scrollHeight));
    }
  }, [headerRef, dispatch]);

  return (
    <header ref={headerRef} className={styles['mobile-header-main']}>
      <BrandName title={brandName} imageSource={brandLogo} />

      <div className={styles['mobile-header-main__buttons']}>
        <SearchButton
          onClick={() => {
            if (appState.navigation.isOpen) {
              dispatch(toggleNavigation());
            }

            dispatch(openSearchWindow());
          }}
        />
        <ShoppingCartButton />
        <HamburgerMenu
          navigationActive={isMenuIconActive}
          onClick={() => {
            if (appState.searchWindow.isOpen) {
              dispatch(closeSearchWindow());
            }
            dispatch(toggleNavigation());
          }}
        />
      </div>
    </header>
  );
}
