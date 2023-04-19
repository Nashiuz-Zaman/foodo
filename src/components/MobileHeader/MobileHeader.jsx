//react
import { useRef, useEffect } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
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
  const appState = useSelector((state) => state);

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
