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
  // jsx template
  return (
    <div
      className={`${styles['shopping-cart-button-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <button
        onClick={onClick}
        className={styles['shopping-cart-button-main__button']}
        aria-label={'A button used to go to the shopping cart to checkout'}
      >
        <ShoppingCartIcon primaryColor={primaryColor} />
        {text && buttonText}
      </button>
    </div>
  );
}
