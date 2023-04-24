//components
import LinkElement from '../LinkElement/LinkElement';

//styles
import styles from './MobileNavigationMenu.module.css';

//MobileNavigationMenu starts here
export default function MobileNavigationMenu({
  navigationOptions = null,
  navigationActive = false,
  headerHeight = null,
  extraClass = undefined,
  onClick = null,
}) {
  // jsx template

  const customStyles = {
    marginTop: `${headerHeight}px`,
    height: `calc(100vh - ${headerHeight}px)`,
  };

  return (
    <nav
      style={customStyles}
      className={`${styles['mobile-navigation-menu-main']} ${
        navigationActive ? styles['menu-active'] : 'not-active'
      } ${extraClass ? extraClass.join(' ') : 'no-extra-class'}`}
    >
      <ul className={styles['mobile-navigation-menu-main__options-list']}>
        {/* output all the navigation options as list items */}
        {navigationOptions.map((single, i) => {
          return (
            <li
              key={single.id}
              className={``}
              style={{ transition: `all 0.2s ease-out ${i * 0.05}s` }}
            >
              <LinkElement
                onClick={onClick}
                toUrl={single.toUrl}
                linkFor={single.linkFor}
                text={single.text}
              />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
