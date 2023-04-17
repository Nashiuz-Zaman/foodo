//redux
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

//components
import Button from '../Button/Button';

//imagesource
import ratingStar from './image/star-fill.svg';

//styles
import styles from './FoodCard.module.css';

//FoodCard starts here
export default function FoodCard({ extraClass = undefined, cardData = null }) {
  const dispatch = useDispatch();

  // jsx template
  return (
    <div
      className={`${styles['food-card-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
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
          <div className={styles['food-card-main__item__info__name-and-price']}>
            <p
              className={
                styles['food-card-main__item__info__name-and-price__name']
              }
            >
              {cardData.name}
            </p>

            <p
              className={
                styles['food-card-main__item__info__name-and-price__price']
              }
            >
              ${cardData.price}
            </p>
          </div>

          <p className={styles['food-card-main__item__info__category']}>
            Menu - {cardData.category}
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
              className={styles['food-card-main__item__info__bottom-info__fee']}
            >
              ${cardData.delivery_fee} Fee
            </p>
          </div>
        </div>
        <Button
          onClick={() => {
            dispatch(addItem(cardData));
          }}
          extraClass={[styles['food-card-main__item__button']]}
          buttonText="Add to cart"
        />
      </article>
    </div>
  );
}
