//styles
import styles from './CopyrightInfo.module.css';

export default function CopyrightInfo({
  extraClass = undefined,
  developer = '',
}) {
  // jsx template
  const currentYear = new Date().getFullYear();
  return (
    <div
      className={`${styles['copyright-info-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <small className={styles['copyright-info-main__copyright-info--details']}>
        &#169; {`${currentYear} Foodo, developed by ${developer}.`}
      </small>
    </div>
  );
}
