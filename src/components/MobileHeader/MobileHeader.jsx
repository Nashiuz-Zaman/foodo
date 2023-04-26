//react
import { useRef, useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { setMobileHeaderHeight } from '../../features/mobileHeader/mobileHeaderSlice';
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
  const mobileHeaderRef = useRef(null);
  const dispatch = useDispatch();

  // useSelector((state) => console.log(state.cart.isOpen));

  // setting the header height state by calculating the mobile header's scroll height
  useEffect(() => {
    if (mobileHeaderRef) {
      dispatch(setMobileHeaderHeight(mobileHeaderRef.current.scrollHeight));
    }
  }, [mobileHeaderRef, dispatch]);

  return (
    <header ref={mobileHeaderRef} className={styles['mobile-header-main']}>
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
