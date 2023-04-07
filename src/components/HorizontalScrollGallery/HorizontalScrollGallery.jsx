//react
import { useState, useEffect } from 'react';

//component
import FoodCard from '../FoodCard/FoodCard';

//hooks
import useShuffleArr from '../../hooks/useShuffleArr';

//styles
import styles from './HorizontalScrollGallery.module.css';

export default function HorizontalScrollGallery({ imageSourceArray = [] }) {
  const [galleryItems, setGalleryItems] = useState([]);
  const { shuffleArr } = useShuffleArr();

  useEffect(() => {
    setGalleryItems(shuffleArr(imageSourceArray !== null && imageSourceArray));
  }, [imageSourceArray, shuffleArr]);

  return (
    <section className={styles['horizontal-scroll-gallery']}>
      <div className={styles['horizontal-scroll-gallery__scroller']}>
        {galleryItems.map((single) => {
          return <FoodCard key={single.id} cardData={single} />;
        })}
      </div>
    </section>
  );
}
