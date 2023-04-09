//components
import GoToTopButton from '../GoToTopButton/GoToTopButton';
import BrandName from '../BrandName/BrandName';
import SocialMediaLinks from '../SocialMediaLinks/SocialMediaLinks';
import AppStoreLinks from '../AppStoreLinks/AppStoreLinks';

//data
import { socialmediaButtonsData } from '../../data/FooterData';

//styles
import styles from './Footer.module.css';

//Footer starts here
export default function Footer({ extraClass = undefined }) {
  // jsx template
  return (
    <footer
      className={`${styles['footer-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <GoToTopButton />

      <BrandName
        extraClass={[styles['footer-main__brand-name-main']]}
        title={'~ Foodo ~'}
      />

      <SocialMediaLinks
        extraClass={[styles['footer-main__social-media-links-main']]}
        logoButtonsArray={socialmediaButtonsData}
      />

      <AppStoreLinks />
    </footer>
  );
}
