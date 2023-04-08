//react

//component
import FoodCard from '../FoodCard/FoodCard';

//styles
import styles from './HorizontalScrollGallery.module.css';

export default function HorizontalScrollGallery({ imageSourceArray = [] }) {
  return (
    <section className={styles['horizontal-scroll-gallery']}>
      <div className={styles['horizontal-scroll-gallery__scroller']}>
        {imageSourceArray &&
          imageSourceArray.map((single) => {
            return <FoodCard key={single.id} cardData={single} />;
          })}
      </div>
    </section>
  );
}
