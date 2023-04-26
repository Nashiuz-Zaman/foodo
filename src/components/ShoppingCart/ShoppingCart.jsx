//react
import { useEffect } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import {
  summarizeCart,
  resetAll,
  closeCart,
  placeOrder,
} from '../../features/cart/cartSlice';

//component
import TertiaryHeading from '../TertiaryHeading/TertiaryHeading';
import ShoppingList from '../ShoppingList/ShoppingList';
import ShoppingExpenses from '../ShoppingExpenses/ShoppingExpenses';
import Button from '../Button/Button';
import ImageElement from '../ImageElement/ImageElement';
import LinkButton from '../LinkButton/LinkButton';
import SuccessPopup from '../SuccessPopup/SuccessPopup';

//styles
import styles from './ShoppingCart.module.css';

//shoppingCart starts here
export default function ShoppingCart({
  headerHeight = null,
  emptyCartLogo = null,
  extraClass = undefined,
}) {
  const dispatch = useDispatch();
  // extract data
  const cartState = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(summarizeCart());
  }, [cartState.cartItems, dispatch]);

  const customStyles = {
    marginTop: `${headerHeight}px`,
    height: `calc(100vh - ${headerHeight}px)`,
  };

  // jsx template
  return (
    <div
      id="shopping-cart"
      style={customStyles}
      className={`${styles['shopping-cart-main']} ${
        cartState.isOpen ? styles['active'] : styles['not-active']
      } ${extraClass ? extraClass.join(' ') : 'no-extra-class'}`}
    >
      {!cartState.orderPlaced && (
        <div
          className={styles['shopping-cart-main__heading-and-button-container']}
        >
          <TertiaryHeading
            extraClass={[
              styles[
                'shopping-cart-main__heading-and-button-container__heading'
              ],
            ]}
            heading="Your Cart"
          />

          {/* clear cart  */}
          {cartState.cartItems.length > 0 && (
            <Button
              onClick={() => {
                dispatch(resetAll());
              }}
              buttonText={'Clear Cart'}
              extraClass={[
                styles[
                  'shopping-cart-main__heading-and-button-container__button'
                ],
              ]}
            />
          )}
        </div>
      )}

      {cartState.cartItems.length === 0 && (
        <div>
          <ImageElement
            extraClass={[styles['shopping-cart-main__empty-cart-image']]}
            imageSource={emptyCartLogo}
          />

          <p className={styles['shopping-cart-main__empty-cart-message']}>
            You haven't added anything yet.
          </p>

          <LinkButton
            extraClass={[styles['shopping-cart-main__empty-cart-button']]}
            buttonText={'Go to menu'}
            toUrl={'menu'}
            onClick={() => {
              dispatch(closeCart());
            }}
          />
        </div>
      )}

      {cartState.orderPlaced && (
        <SuccessPopup
          heading={'Order Placed'}
          message={
            'Thank you for placing your order with Foodo. As soon as your order is prepared, our delivery service will be on their way to you. Your order details are provided below.'
          }
          buttonText={'Close'}
          purchasedItems={cartState.cartItems}
          total={cartState.totalIncludingAllExpenses}
          subTotal={cartState.totalPrice}
          tax={cartState.tax}
          deliveryFee={cartState.totalDeliveryFee}
          onClick={() => {
            dispatch(resetAll());
          }}
        />
      )}

      {cartState.cartItems.length > 0 && !cartState.orderPlaced && (
        <div>
          <ShoppingList selectedItems={cartState.cartItems} />

          <hr className={styles['shopping-cart-main__horizontal-line']} />

          <ShoppingExpenses
            extraClass={[styles['shopping-cart-main__shopping-expenses']]}
            subTotal={cartState.totalPrice}
            tax={cartState.tax}
            deliveryFee={cartState.totalDeliveryFee}
            total={cartState.totalIncludingAllExpenses}
          />

          <Button
            onClick={() => {
              dispatch(placeOrder());
            }}
            extraClass={[styles['shopping-cart-main__order-button']]}
            buttonText={'Place Order - Delivery'}
          />
        </div>
      )}
    </div>
  );
}
