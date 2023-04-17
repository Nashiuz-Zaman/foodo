//redux
import { useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../features/cart/cartSlice';

//components
import PlusButton from '../PlusButton/PlusButton';
import MinusButton from '../MinusButton/MinusButton';

//styles
import styles from './ShoppingItem.module.css';

//ShoppingItem starts here
export default function ShoppingItem({
  itemObject = null,
  id = '',
  name = '',
  amount = 0,
  price = 0,
  extraClass = undefined,
}) {
  const dispatch = useDispatch();

  // jsx template
  return (
    <div
      className={`${styles['shopping-item-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div className={styles['shopping-item-main__item']}>
        <p className={styles['shopping-item-main__item__name']}>{name}</p>
        <div className={styles['shopping-item-main__item__amount']}>
          <MinusButton
            onClick={() => {
              dispatch(removeItem(id));
            }}
          />
          {amount}
          <PlusButton
            onClick={() => {
              dispatch(addItem(itemObject));
            }}
          />
        </div>
        <p className={styles['shopping-item-main__item__price']}>
          ${(amount * price).toFixed(2)}
        </p>
      </div>
    </div>
  );
}
