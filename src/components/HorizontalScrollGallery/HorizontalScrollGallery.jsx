//react

//component
import FoodCard from '../FoodCard/FoodCard';

//styles
import styles from './HorizontalScrollGallery.module.css';

export default function HorizontalScrollGallery({ dataArray = [] }) {
  return (
    <section className={styles['horizontal-scroll-gallery']}>
      <div className={styles['horizontal-scroll-gallery__scroller']}>
        {dataArray &&
          dataArray.map((single) => {
            return (
              <FoodCard
                extraClass={[
                  styles['horizontal-scroll-gallery__scroller__gallery-item'],
                ]}
                key={single.id}
                cardData={single}
              />
            );
          })}
      </div>
    </section>
  );
}
