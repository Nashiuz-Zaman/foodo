//component
import RatingStars from '../../components/RatingStars/RatingStars';

//styles
import styles from './ReviewSection.module.css';

//ReviewSection starts here
export default function ReviewSection({ extraClass = undefined }) {
  // jsx template
  return (
    <section
      className={`${styles['review-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <RatingStars />
    </section>
  );
}
