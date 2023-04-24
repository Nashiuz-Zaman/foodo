//components
import LinkElement from '../LinkElement/LinkElement';
import TertiaryHeading from '../TertiaryHeading/TertiaryHeading';

//styles
import styles from './ImageLink.module.css';

//ImageLink starts here
export default function ImageLink({
  dataObject = undefined,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['image-link-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <LinkElement
        isText={false}
        htmlElement={true}
        toUrl={dataObject.toUrl}
        linkFor={dataObject.linkFor}
        extraClass={[styles['image-link-main__link']]}
      >
        <div className={styles['image-link-main__container']}>
          <TertiaryHeading
            extraClass={[styles['image-link-main__container__heading']]}
            heading={dataObject.title}
          />

          <div
            style={{ background: `url(${dataObject.imageSource})` }}
            className={styles['image-link-main__container__image']}
          >
            &nbsp;
          </div>
        </div>
      </LinkElement>
    </div>
  );
}
