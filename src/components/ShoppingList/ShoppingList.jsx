//components
import ShoppingItem from '../ShoppingItem/ShoppingItem';

//styles
import styles from './ShoppingList.module.css';

//ShoppingList starts here
export default function ShoppingList({
  selectedItems = [],
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['shopping-list-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div className={styles['shopping-list-main__headings']}>
        <p>Item</p>
        <p>Qty</p>
        <p>Price ($)</p>
      </div>

      <ul className={styles['shopping-list-main__list']}>
        {selectedItems.map((single) => {
          return (
            <li key={single.id}>
              <ShoppingItem
                itemObject={single}
                id={single.id}
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
