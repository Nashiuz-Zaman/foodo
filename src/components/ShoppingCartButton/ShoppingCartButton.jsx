//redux
import { useSelector } from 'react-redux';

//component
import ShoppingCartIcon from '../ShoppingCartIcon/ShoppingCartIcon';

//styles
import styles from './ShoppingCartButton.module.css';

//ShoppingCartButton starts here
export default function ShoppingCartButton({
  text = false,
  buttonText = 'no text-provided',
  extraClass = undefined,
  primaryColor = true,
  onClick = null,
}) {
  const quantity = useSelector((state) => state.cart.quantity);

  // jsx template
  return (
    <div
      onClick={onClick}
      className={`${styles['shopping-cart-button-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <button
        className={styles['shopping-cart-button-main__button']}
        aria-label={'A button used to go to the shopping cart to checkout'}
      >
        <ShoppingCartIcon primaryColor={primaryColor} />
        {text && buttonText}
      </button>
      {/* only show when there is something in the cartitems array */}
      {quantity > 0 && (
        <p className={styles['shopping-cart-button-main__notification']}>
          {quantity}
        </p>
      )}
    </div>
  );
}
