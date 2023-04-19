//components
import TertiaryHeading from '../TertiaryHeading/TertiaryHeading';
import HorizontalScrollGallery from '../HorizontalScrollGallery/HorizontalScrollGallery';

//styles
import styles from './CardsCollectionWithHeading.module.css';

//CardsCollectionWithHeading starts here
export default function CardsCollectionWithHeading({
  divId = '',
  heading = 'no heading provided',
  dataArray = undefined,
  extraClass = undefined,
  imageSource,
}) {
  // jsx template
  return (
    <div
      id={divId}
      className={`${
        styles['cards-collection-with-heading-main']
      } scroll-offset ${extraClass ? extraClass.join(' ') : 'no-extra-class'}`}
    >
      <TertiaryHeading
        imageSource={imageSource}
        heading={heading}
        extraClass={[styles['cards-collection-with-heading-main__heading']]}
      />
      <HorizontalScrollGallery dataArray={dataArray} />
    </div>
  );
}
