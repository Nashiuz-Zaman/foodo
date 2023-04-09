//components
import RatingStars from '../RatingStars/RatingStars';

//image source
import quotationMarks from './image/quotation-symbol.png';

//styles
import styles from './Testimonial.module.css';

export default function Testimonial({
  imageSource = '',
  reviewerName = '',
  onelineReview = '',
  fullReview = '',
  rating = null,
  extraClass = undefined,
  extraInlineStyle = {},
  reverse = false,
}) {
  return (
    <div
      style={extraInlineStyle}
      className={`${styles['testimonial']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      } ${reverse ? styles['reverse-style'] : ''}`}
    >
      <div
        className={styles['testimonial__img']}
        style={{ background: `url(${imageSource})` }}
        aria-label={`Photo of reviewer ${reviewerName}`}
      >
        &nbsp;
      </div>

      <div className={styles['testimonial__text-container']}>
        <p className={styles['testimonial__text-container__one-liner']}>
          {`${onelineReview}`}
        </p>

        <RatingStars
          extraClass={[styles['testimonial__text-container__rating']]}
          ratingGiven={rating}
        />

        <div
          className={
            styles['testimonial__text-container__full-review-and-reviewer-name']
          }
        >
          <img
            className={
              styles[
                'testimonial__text-container__full-review-and-reviewer-name__quotation-marks'
              ]
            }
            src={quotationMarks}
            alt={'quotation marks'}
          />
          <p
            className={
              styles[
                'testimonial__text-container__full-review-and-reviewer-name__full-review'
              ]
            }
          >
            {fullReview}
          </p>
          <p
            className={
              styles[
                'testimonial__text-container__full-review-and-reviewer-name__reviewer-name'
              ]
            }
          >{`- ${reviewerName}`}</p>
        </div>
      </div>
    </div>
  );
}
