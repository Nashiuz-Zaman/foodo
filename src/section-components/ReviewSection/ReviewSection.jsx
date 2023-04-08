//component
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import RatingStars from '../../components/RatingStars/RatingStars';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Testimonial from '../../components/Testimonial/Testimonial';

//hooks
import useFetchReviews from '../../hooks/useFetchReviews';

//styles
import styles from './ReviewSection.module.css';
import { useEffect } from 'react';

//ReviewSection starts here
export default function ReviewSection({ extraClass = undefined }) {
  const { data, error, isPending } = useFetchReviews();

  useEffect(() => {
    console.log(data);
  }, [data]);

  // jsx template
  return (
    <section
      className={`${styles['review-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <SectionTitle
        extraClass={[styles['review-section-main__section-title']]}
        title={'What Customers say'}
      />
      {isPending && <LoadingSpinner isPending={isPending ? true : false} />}
      {error && (
        <p className={styles['review-section-main__error-message']}>{error}</p>
      )}
      {data &&
        data.map((single) => {
          return (
            <Testimonial
              key={single.id}
              personName={single.reviewer_name}
              oneLiner={single.review_one_line}
              details={single.review_message}
              imageSource={single.image}
            />
          );
        })}
    </section>
  );
}
