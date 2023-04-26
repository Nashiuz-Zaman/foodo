//components
import ShoppingItemFinal from '../ShoppingItemFinal/ShoppingItemFinal';

//styles
import styles from './ShoppingListFinal.module.css';

//ShoppingListFinal starts here
export default function ShoppingListFinal({
  purchasedItems = [],
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['shopping-list-final-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div className={styles['shopping-list-final-main__headings']}>
        <p>Item</p>
        <p>Qty</p>
        <p>Price ($)</p>
      </div>

      <ul className={styles['shopping-list-final-main__list']}>
        {purchasedItems.map((single) => {
          return (
            <li key={single.id}>
              <ShoppingItemFinal
                name={single.name}
                price={single.price}
                amount={single.amount}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
