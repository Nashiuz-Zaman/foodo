//styles
import styles from './ShoppingItemFinal.module.css';

//ShoppingItemFinal starts here
export default function ShoppingItemFinal({
  name = '',
  amount = 0,
  price = 0,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['shopping-item-final-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div className={styles['shopping-item-final-main__item']}>
        <p className={styles['shopping-item-final-main__item__name']}>{name}</p>
        <p className={styles['shopping-item-final-main__item__amount']}>
          {amount}
        </p>
        <p className={styles['shopping-item-final-main__item__price']}>
          ${(amount * price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
