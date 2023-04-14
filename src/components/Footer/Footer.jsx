//react
import React from 'react';

//components
import GoToTopButton from '../GoToTopButton/GoToTopButton';
import BrandName from '../BrandName/BrandName';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import AppStoreLinks from '../AppStoreLinks/AppStoreLinks';
import LinkGroup from '../LinkGroup/LinkGroup';
import CopyrightInfo from '../CopyrightInfo/CopyrightInfo';

//data
import { socialmediaButtonsData, options } from '../../data/FooterData';

//styles
import styles from './Footer.module.css';

//Footer starts here
function Footer({ brandName = '', brandLogo = null, extraClass = undefined }) {
  // jsx template
  return (
    <footer
      className={`${styles['footer-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <GoToTopButton />

      <div className={styles['footer-main__top-part']}>
        <BrandName
          extraClass={[styles['footer-main__top-part__brand-name-main']]}
          title={brandName}
          imageSource={brandLogo}
        />

        <SocialMediaLinks
          extraClass={[
            styles['footer-main__top-part__social-media-links-main'],
          ]}
          logoButtonsArray={socialmediaButtonsData}
        />

        <AppStoreLinks
          extraClass={[styles['footer-main__top-part__app-store-links-main']]}
        />
      </div>

      <div className={styles['footer-main__bottom-part']}>
        <LinkGroup
          extraClass={[styles['footer-main__bottom-part__link-group-main']]}
          singleListObject={options}
        />
      </div>

      <CopyrightInfo developer={'Nashiuz Zaman'} />
    </footer>
  );
}

export default React.memo(Footer);
