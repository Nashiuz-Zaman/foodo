//components
import Showcase from '../Showcase/Showcase';

//hooks
import useCarousel from '../../hooks/useCarousel';

//styles
import styles from './Carousel.module.css';

//Carousel starts here
export default function Carousel({ images = [], extraClass = undefined }) {
  const { currentSlide } = useCarousel(images.length, 4000);
  console.log(currentSlide);

  // jsx template
  return (
    <div
      className={`${styles['carousel-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {images.map((single, i) => {
        return (
          <Showcase
            key={single.id}
            imageSource={single.imageSource}
            extraClass={[
              styles['carousel-main__slide'],
              currentSlide === i
                ? styles['carousel-main__slide--visible']
                : styles['carousel-main__slide--hidden'],
            ]}
          />
        );
      })}
    </div>
  );
}
