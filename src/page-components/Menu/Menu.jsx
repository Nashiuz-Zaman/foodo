//styles
import styles from './Menu.module.css';

//Menu starts here
export default function Menu({ extraClass = undefined }) {
  // jsx template
  return (
    <div
      className={`${styles['menu-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    ></div>
  );
}
