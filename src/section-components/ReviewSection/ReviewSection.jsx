import { useEffect, useState } from 'react';

//component
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Testimonial from '../../components/Testimonial/Testimonial';

//hooks
import useFetchReviews from '../../hooks/useFetchReviews';
import useShuffleArr from '../../hooks/useShuffleArr';

//styles
import styles from './ReviewSection.module.css';

//ReviewSection starts here
export default function ReviewSection({
  sectionTitle = 'no title provided',
  extraClass = undefined,
}) {
  const { data, error, isPending } = useFetchReviews();
  const { shuffleArr } = useShuffleArr();
  const [listOfReviews, setListOfReviews] = useState(null);

  useEffect(() => {
    setListOfReviews(data && shuffleArr(data));
  }, [data, shuffleArr]);

  // jsx template
  return (
    <section
      className={`${styles['review-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <SectionTitle
        extraClass={[styles['review-section-main__section-title']]}
        title={sectionTitle}
      />
      {isPending && <LoadingSpinner isPending={isPending ? true : false} />}
      {error && <p className={'data-not-load-error-message'}>{error}</p>}

      <ol className={styles['review-section-main__all-reviews']}>
        {listOfReviews &&
          listOfReviews.map((single, i) => {
            return (
              <li key={single.id}>
                <Testimonial
                  rating={single.rating}
                  reviewerName={single.reviewer_name}
                  onelineReview={single.review_one_line}
                  fullReview={single.review_message}
                  imageSource={single.image}
                  reverse={(i + 1) % 2 === 0 ? true : false}
                />
              </li>
            );
          })}
      </ol>
    </section>
  );
}
