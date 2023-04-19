//styles
import styles from './TertiaryHeading.module.css';

export default function TertiaryHeading({
  heading = 'no text provided',
  imageSource = undefined,
  alt = 'logo',
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['tertiary-heading-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <h3 className={styles['tertiary-heading-main__heading']}>{heading}</h3>
      {imageSource && (
        <img
          className={styles['tertiary-heading-main__image']}
          src={imageSource}
          alt={alt}
        />
      )}
    </div>
  );
}
