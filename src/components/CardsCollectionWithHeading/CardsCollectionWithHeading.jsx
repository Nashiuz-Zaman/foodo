//components
import TertiaryHeading from '../TertiaryHeading/TertiaryHeading';
import HorizontalScrollGallery from '../HorizontalScrollGallery/HorizontalScrollGallery';
import LargeFoodCard from '../LargeFoodCard/LargeFoodCard';

//hooks
import usemMediaQueryMatcher from '../../hooks/useMediaQueryMatcher';

//styles
import styles from './CardsCollectionWithHeading.module.css';

//CardsCollectionWithHeading starts here
export default function CardsCollectionWithHeading({
  headingData = null,
  dataArray = undefined,
  extraClass = undefined,
}) {
  const { customSizeDetector } = usemMediaQueryMatcher();

  const breakpoint = '(min-width: 62em)';
  const breakpointReached = customSizeDetector(breakpoint);

  // jsx template
  return (
    <div
      className={`${styles['cards-collection-with-heading-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {headingData && (
        <TertiaryHeading
          imageSource={headingData.imageSource}
          heading={headingData.heading}
          extraClass={[styles['cards-collection-with-heading-main__heading']]}
        />
      )}

      {!breakpointReached && <HorizontalScrollGallery dataArray={dataArray} />}
      {breakpointReached && (
        <div
          className={
            styles['cards-collection-with-heading-main__cards-collection']
          }
        >
          {dataArray.map((single) => {
            return <LargeFoodCard key={single.id} cardData={single} />;
          })}
        </div>
      )}
    </div>
  );
}
