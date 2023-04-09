//react
import { useEffect, useState } from 'react';

//components
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import HorizontalScrollGallery from '../../components/HorizontalScrollGallery/HorizontalScrollGallery';
import TertiaryHeading from '../../components/TertiaryHeading/TertiaryHeading';

// hooks
import useFetchFoodItems from '../../hooks/useFetchFoodItems';
import useExtractRandomFromArr from '../../hooks/useExtractRandomFromArr';
import useShuffleArr from '../../hooks/useShuffleArr';

//styles
import styles from './FoodItemsSection.module.css';

//FoodItemsSection starts here
export default function FoodItemsSection({ extraClass = undefined }) {
  const { data, error, isPending } = useFetchFoodItems();
  const [shuffledData, setShuffledData] = useState(null);
  const [topPicks, setTopPicks] = useState(null);
  const { extractRandomFromArr } = useExtractRandomFromArr();
  const { shuffleArr } = useShuffleArr();

  useEffect(() => {
    if (data) {
      setShuffledData(shuffleArr(data));
      setTopPicks(extractRandomFromArr(data, 4));
    }
  }, [data, extractRandomFromArr, shuffleArr]);

  // jsx template
  return (
    <section
      className={`${styles['food-items-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {isPending && <LoadingSpinner isPending={isPending ? true : false} />}
      {error && <p className={'data-not-load-error-message'}>{error}</p>}
      {shuffledData && topPicks && (
        <>
          <div className={styles['food-items-section-main__top-picks']}>
            <TertiaryHeading
              extraClass={[styles['food-items-section-main__gallery-heading']]}
              heading={"Today's Top Picks"}
            />
            <HorizontalScrollGallery imageSourceArray={topPicks} />
          </div>

          <div className={styles['food-items-section-main__delicious-dishes']}>
            <TertiaryHeading
              extraClass={[styles['food-items-section-main__gallery-heading']]}
              heading={'Delicious Dishes'}
            />
            <HorizontalScrollGallery imageSourceArray={shuffledData} />
          </div>
        </>
      )}
    </section>
  );
}
