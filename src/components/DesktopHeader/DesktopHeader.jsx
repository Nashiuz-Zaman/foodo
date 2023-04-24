//react
import { useRef, useEffect } from 'react';

//redux
import { useDispatch } from 'react-redux';
import { setDesktopHeaderHeight } from '../../features/desktopHeader/desktopHeaderSlice';

//component
import BrandName from '../BrandName/BrandName';
import DesktopNavigation from '../DesktopNavigation/DesktopNavigation';
import ShoppingCartButton from '../ShoppingCartButton/ShoppingCartButton';
import SearchButton from '../SearchButton/SearchButton';
import LinkButton from '../LinkButton/LinkButton';

//styles
import styles from './DesktopHeader.module.css';

//DesktopHeader starts here
export default function DesktopHeader({
  brandName,
  brandLogo = null,
  navigationOptions,
  ctaButtonData = null,
  extraClass = undefined,
}) {
  const desktopHeaderRef = useRef(null);
  const dispatch = useDispatch();

  // setting the header height state by calculating the desktop header's scroll height
  useEffect(() => {
    if (desktopHeaderRef) {
      dispatch(setDesktopHeaderHeight(desktopHeaderRef.current.scrollHeight));
    }
  }, [desktopHeaderRef, dispatch]);

  // jsx template
  return (
    <header
      ref={desktopHeaderRef}
      className={`${styles['desktop-header-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <BrandName title={brandName} imageSource={brandLogo} />
      <DesktopNavigation navigationOptionsArray={navigationOptions} />
      <div className={styles['desktop-header-main__side-buttons']}>
        <SearchButton />
        <ShoppingCartButton />
        <LinkButton
          buttonText={ctaButtonData.buttonText}
          toUrl={ctaButtonData.toUrl}
          linkFor={ctaButtonData.linkFor}
        />
      </div>
    </header>
  );
}
