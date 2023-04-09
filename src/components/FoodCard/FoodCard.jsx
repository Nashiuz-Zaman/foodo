//components
import LinkElement from '../LinkElement/LinkElement';

//imagesource
import ratingStar from './image/star-fill.svg';

//styles
import styles from './FoodCard.module.css';

//FoodCard starts here
export default function FoodCard({
  linkFor = 'samesite',
  extraClass = undefined,
  cardData = null,
}) {
  // jsx template
  return (
    <div
      className={`${styles['food-card-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <LinkElement
        extraClass={[styles['food-card-main__containing-link-element']]}
        linkFor={linkFor}
        isText={false}
        htmlElement={true}
        toUrl={cardData.link}
      >
        <article className={styles['food-card-main__item']}>
          <div
            aria-label={`Image of ${cardData.name}`}
            className={styles['food-card-main__item__img']}
            style={{
              background: `url(${cardData.image})`,
            }}
          >
            &nbsp;
          </div>

          {/* text based information starts here */}
          <div className={styles['food-card-main__item__info']}>
            <p className={styles['food-card-main__item__info__name']}>
              {cardData.name}
            </p>

            <p className={styles['food-card-main__item__info__category']}>
              $$ - {cardData.category}
            </p>

            <div className={styles['food-card-main__item__info__bottom-info']}>
              <p
                className={
                  styles['food-card-main__item__info__bottom-info__time']
                }
              >
                {cardData.delivery_time} Min
              </p>

              <p
                className={
                  styles[
                    'food-card-main__item__info__bottom-info__rating-container'
                  ]
                }
              >
                <span
                  className={
                    styles[
                      'food-card-main__item__info__bottom-info__rating-container__rating'
                    ]
                  }
                >
                  {cardData.rating}
                </span>

                <img
                  className={
                    styles[
                      'food-card-main__item__info__bottom-info__rating-container__rating-star'
                    ]
                  }
                  src={ratingStar}
                  alt={'golden star'}
                />

                <span
                  className={
                    styles[
                      'food-card-main__item__info__bottom-info__rating-container__rating-count'
                    ]
                  }
                >
                  ({cardData.rating_count})
                </span>
              </p>

              <p
                className={
                  styles['food-card-main__item__info__bottom-info__fee']
                }
              >
                ${cardData.price} Fee
              </p>
            </div>
          </div>
        </article>
      </LinkElement>
    </div>
  );
}
