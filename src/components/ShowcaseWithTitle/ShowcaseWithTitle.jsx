//styles
import styles from './ShowcaseWithTitle.module.css';

//ShowcaseWithTitle starts here
export default function ShowcaseWithTitle({
  dataObject = null,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['showcase-with-title-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {dataObject && (
        <>
          <div
            className={styles['showcase-with-title-main__image']}
            style={{ background: `url(${dataObject.imageSource})` }}
          >
            &nbsp;
          </div>

          <h2 className={styles['showcase-with-title-main__title']}>
            {dataObject.title}
          </h2>
        </>
      )}
    </div>
  );
}
