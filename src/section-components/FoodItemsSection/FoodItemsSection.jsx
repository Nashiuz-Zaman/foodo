//react
import { useEffect } from 'react';

//components
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import HorizontalScrollGallery from '../../components/HorizontalScrollGallery/HorizontalScrollGallery';

// hooks
import useFetchFoodItems from '../../hooks/useFetchFoodItems';

//styles
import styles from './FoodItemsSection.module.css';

//FoodItemsSection starts here
export default function FoodItemsSection({ extraClass = undefined }) {
  const { data, error, isPending } = useFetchFoodItems();

  useEffect(() => {
    console.log(data);
  }, [data]);

  // jsx template
  return (
    <section
      className={`${styles['food-items-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {isPending && <LoadingSpinner isPending={isPending ? true : false} />}
      {data && <HorizontalScrollGallery imageSourceArray={data} />}
    </section>
  );
}
