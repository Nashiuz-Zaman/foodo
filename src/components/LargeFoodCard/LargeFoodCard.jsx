//redux
import { useDispatch } from 'react-redux';
import { addItem } from '../../features/cart/cartSlice';

//components
import Button from '../Button/Button';

//imagesource
import ratingStar from './image/star-fill.svg';

//styles
import styles from './LargeFoodCard.module.css';

//LargeFoodCard starts here
export default function LargeFoodCard({
  extraClass = undefined,
  cardData = null,
}) {
  const dispatch = useDispatch();

  // jsx template
  return (
    <div
      className={`${styles['large-food-card-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <article className={styles['large-food-card-main__item']}>
        <div
          aria-label={`Image of ${cardData.name}`}
          className={styles['large-food-card-main__item__img']}
          style={{
            background: `url(${cardData.image})`,
          }}
        >
          &nbsp;
        </div>

        {/* text based information starts here */}
        <div className={styles['large-food-card-main__item__info']}>
          <div
            className={
              styles['large-food-card-main__item__info__name-and-price']
            }
          >
            <p
              className={
                styles['large-food-card-main__item__info__name-and-price__name']
              }
            >
              {cardData.name}
            </p>

            <p
              className={
                styles[
                  'large-food-card-main__item__info__name-and-price__price'
                ]
              }
            >
              ${cardData.price}
            </p>
          </div>

          <div
            className={styles['large-food-card-main__item__info__bottom-info']}
          >
            <p
              className={
                styles[
                  'large-food-card-main__item__info__bottom-info__rating-container'
                ]
              }
            >
              <span
                className={
                  styles[
                    'large-food-card-main__item__info__bottom-info__rating-container__rating'
                  ]
                }
              >
                {cardData.rating}
              </span>
              <img
                className={
                  styles[
                    'large-food-card-main__item__info__bottom-info__rating-container__rating-star'
                  ]
                }
                src={ratingStar}
                alt={'golden star'}
              />
              <span
                className={
                  styles[
                    'large-food-card-main__item__info__bottom-info__rating-container__rating-count'
                  ]
                }
              >
                ({cardData.rating_count})
              </span>
            </p>

            <p
              className={
                styles['large-food-card-main__item__info__bottom-info__time']
              }
            >
              Delivery Time: {cardData.delivery_time} Min
            </p>

            <p
              className={
                styles['large-food-card-main__item__info__bottom-info__fee']
              }
            >
              Delivery Fee: ${cardData.delivery_fee}
            </p>
          </div>
        </div>
        <Button
          onClick={() => {
            dispatch(addItem(cardData));
          }}
          extraClass={[styles['large-food-card-main__item__button']]}
          buttonText="Add to cart"
        />
      </article>
    </div>
  );
}
