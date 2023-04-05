//styles
import styles from './Showcase.module.css';

export default function Showcase({
  imageSource = undefined,
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles['showcase-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {imageSource === undefined ? (
        <p>Please provide image</p>
      ) : (
        <div
          className={styles['showcase-main__imgbox']}
          style={{
            background: `url(${imageSource})`,
          }}
        >
          &nbsp;
        </div>
      )}
    </div>
  );
}
