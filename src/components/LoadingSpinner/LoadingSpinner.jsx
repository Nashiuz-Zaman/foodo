//styles
import styles from './LoadingSpinner.module.css';

export default function LoadingSpinner({
  loadingImage = undefined,
  extraClass = undefined,
  isPending,
}) {
  return (
    <div
      className={`${styles['loading-spinner-main']} flex-row-center-all ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {/* if custom image provided render this */}
      {loadingImage && (
        <div
          className={styles['loading-spinner-main__text-and-spinner-container']}
        >
          <p>Loading</p>
          <img
            className={`${
              styles['loading-spinner-main__non-default-spinner']
            } ${isPending ? styles['spinning'] : 'not spinning'}`}
            src={loadingImage}
            alt={'loading spinner'}
          />
        </div>
      )}

      {/* if custom image not provided render this */}
      {!loadingImage && (
        <div
          className={styles['loading-spinner-main__text-and-spinner-container']}
        >
          <p>Loading</p>
          <div
            className={`${styles['loading-spinner-main__default-spinner']} ${
              isPending ? styles['spinning'] : 'not spinning'
            }`}
          >
            &nbsp;
          </div>
        </div>
      )}
    </div>
  );
}
