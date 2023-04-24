//react
import { useRef, useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { setHeaderHeight } from '../../features/header/headerSlice';
import {
  toggleNavigation,
  closeNavigation,
} from '../../features/navigation/navigationSlice';
import {
  toggleSearchWindow,
  closeSearchWindow,
} from '../../features/searchWindow/searchWindowSlice';
import { toggleCart, closeCart } from '../../features/cart/cartSlice';

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

  // setting the header height state by calculating the mobile header's scroll height
  useEffect(() => {
    if (headerRef) {
      dispatch(setHeaderHeight(headerRef.current.scrollHeight));
    }
  }, [headerRef, dispatch]);

  return (
    <header ref={headerRef} className={styles['mobile-header-main']}>
      <BrandName
        onClick={() => {
          dispatch(closeNavigation());
          dispatch(closeCart());
          dispatch(closeSearchWindow());
        }}
        title={brandName}
        imageSource={brandLogo}
        extraClass={[styles['mobile-header-main__brand-name-main']]}
      />

      <div className={styles['mobile-header-main__buttons']}>
        <SearchButton
          onClick={() => {
            dispatch(closeNavigation());
            dispatch(closeCart());
            dispatch(toggleSearchWindow());
          }}
        />

        <ShoppingCartButton
          onClick={() => {
            dispatch(closeNavigation());
            dispatch(closeSearchWindow());
            dispatch(toggleCart());
          }}
        />

        <HamburgerMenu
          navigationActive={isMenuIconActive}
          onClick={() => {
            dispatch(closeSearchWindow());
            dispatch(closeCart());
            dispatch(toggleNavigation());
          }}
        />
      </div>
    </header>
  );
}
