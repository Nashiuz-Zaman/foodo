//styles
import styles from './ShoppingExpenses.module.css';

//ShoppingExpenses starts here
export default function ShoppingExpenses({
  subTotal = undefined,
  tax = undefined,
  deliveryFee = undefined,
  total = undefined,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['shopping-expenses-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {subTotal !== undefined && (
        <div className={styles['shopping-expenses-main__info']}>
          <p>Subtotal</p>
          <p>${subTotal.toFixed(2)}</p>
        </div>
      )}

      {tax !== undefined && (
        <div className={styles['shopping-expenses-main__info']}>
          <p>Tax (15%)</p>
          <p>${tax.toFixed(2)}</p>
        </div>
      )}

      {deliveryFee !== undefined && (
        <div className={styles['shopping-expenses-main__info']}>
          <p>Delivery Fee</p>
          <p>${deliveryFee.toFixed(2)}</p>
        </div>
      )}

      <hr className={styles['shopping-expenses-main__horizontal-line']} />

      {total !== undefined && (
        <div className={styles['shopping-expenses-main__info']}>
          <p className={styles['shopping-expenses-main__info--total']}>Total</p>
          <p className={styles['shopping-expenses-main__info--total']}>
            ${total.toFixed(2)}
          </p>
        </div>
      )}
    </div>
  );
}
