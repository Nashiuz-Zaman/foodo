//components
import LinkElement from '../LinkElement/LinkElement';

//styles
import styles from './MobileNavigationMenu.module.css';

//MobileNavigationMenu starts here
export default function MobileNavigationMenu({
  navigationOptions = null,
  navigationActive = false,
  marginTop = null,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <nav
      style={{
        marginTop: `${marginTop}px`,
      }}
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
              style={{ transition: `all 0.2s ease ${i * 0.1}s` }}
            >
              <LinkElement
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
