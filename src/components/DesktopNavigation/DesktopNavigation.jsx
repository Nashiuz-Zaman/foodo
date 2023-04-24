//components
import ListOfLinks from '../ListOfLinks/ListOfLinks';

//styles
import styles from './DesktopNavigation.module.css';

//component starts here
export default function DesktopNavigation({
  extraClass = undefined,
  navigationOptionsArray = undefined,
}) {
  // jsx template
  return (
    <nav
      className={`${styles['desktop-navigation-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {navigationOptionsArray && (
        <ListOfLinks
          linkDataArray={navigationOptionsArray}
          extraClass={[styles['desktop-navigation-main__list-of-links']]}
        />
      )}
    </nav>
  );
}
