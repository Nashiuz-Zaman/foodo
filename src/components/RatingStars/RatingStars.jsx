//image
import starFilledImage from './image/star-fill.svg';

//styles
import styles from './RatingStars.module.css';

//RatingStars starts here
export default function RatingStars({
  ratingGiven = null,
  extraClass = undefined,
}) {
  const ratingStarsArr = [1, 2, 3, 4, 5];

  // jsx template
  return (
    <div
      className={`${styles['rating-stars-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {ratingStarsArr.map((rating) => {
        return (
          <img
            key={rating}
            src={starFilledImage}
            alt="a rating star"
            data-rating={rating}
            className={`${styles['rating-stars-main__star']} ${
              rating <= ratingGiven
                ? styles['gold-filter']
                : 'no-gold-filter-provided'
            }`}
          />
        );
      })}
    </div>
  );
}
