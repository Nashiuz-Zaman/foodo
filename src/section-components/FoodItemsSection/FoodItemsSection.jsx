//react
import { useEffect, useState } from 'react';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { getAllFoodItems } from '../../features/foodItems/foodItemsSlice';

//components
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

import TertiaryHeading from '../../components/TertiaryHeading/TertiaryHeading';
import LargeFoodCard from '../../components/LargeFoodCard/LargeFoodCard';

// hooks
import useExtractRandomFromArr from '../../hooks/useExtractRandomFromArr';
import useShuffleArr from '../../hooks/useShuffleArr';

//styles
import styles from './FoodItemsSection.module.css';

//FoodItemsSection starts here
export default function FoodItemsSection({ extraClass = undefined }) {
  const dispatch = useDispatch();

  const { allFoodItems, isPending, errorMessage } = useSelector(
    (state) => state.foodItems
  );

  const [topPicks, setTopPicks] = useState(null);
  const { extractRandomFromArr } = useExtractRandomFromArr();
  const { shuffleArr } = useShuffleArr();

  useEffect(() => {
    dispatch(getAllFoodItems());
  }, [dispatch]);

  useEffect(() => {
    if (allFoodItems) {
      setTopPicks(extractRandomFromArr(shuffleArr(allFoodItems), 4));
    }
  }, [allFoodItems, extractRandomFromArr, shuffleArr]);

  // jsx template
  return (
    <section
      className={`${styles['food-items-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {isPending && <LoadingSpinner isPending={isPending ? true : false} />}
      {errorMessage && (
        <p className={'data-not-load-error-message'}>{errorMessage}</p>
      )}
      {topPicks && (
        <div className={styles['food-items-section-main__top-picks']}>
          <TertiaryHeading
            extraClass={[styles['food-items-section-main__top-picks__heading']]}
            heading={"Today's Top Picks"}
          />
          <div className={styles['food-items-section-main__top-picks__items']}>
            {topPicks.map((single) => {
              return <LargeFoodCard key={single.id} cardData={single} />;
            })}
          </div>
        </div>
      )}
    </section>
  );
}
