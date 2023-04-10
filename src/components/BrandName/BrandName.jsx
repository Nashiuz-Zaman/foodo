//component
import LinkElement from '../LinkElement/LinkElement';

//styles
import styles from './BrandName.module.css';

export default function BrandName({
  title = '',
  extraClass = undefined,
  changeTheme = false,
  imageSource = null,
  alt = '',
}) {
  return (
    <h1
      className={`${styles['brand-name-main']} ${
        changeTheme
          ? styles['brand-name-main--alternative']
          : 'no-alternative-theme'
      } ${extraClass ? extraClass.join(' ') : 'no-extra-class'}`}
    >
      <LinkElement
        extraClass={[styles['brand-name-main__link']]}
        text={title}
      />

      {imageSource && (
        <img
          className={styles['brand-name-main__image']}
          src={imageSource}
          alt={alt}
        />
      )}
    </h1>
  );
}
