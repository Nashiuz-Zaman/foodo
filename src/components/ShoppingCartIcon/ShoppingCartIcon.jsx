//image source
import shoppingCartImage from './image/shopping-cart.svg';

//styles
import styles from './ShoppingCartIcon.module.css';

//ShoppingCartIcon starts here
export default function ShoppingCartIcon({
  extraClass = undefined,
  primaryColor = true,
}) {
  // jsx template
  return (
    <div
      className={`${styles['shopping-cart-icon-container']} ${
        primaryColor ? styles['primary-color'] : styles['white-color']
      } ${extraClass ? extraClass.join(' ') : 'no-extra-class'}`}
    >
      <img src={shoppingCartImage} alt={'A shopping cart'} />
    </div>
  );
}
