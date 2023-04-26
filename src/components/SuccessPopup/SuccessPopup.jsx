//component
import SuccessIcon from '../SuccessIcon/SuccessIcon';
import Button from '../Button/Button';
import ShoppingListFinal from '../ShoppingListFinal/ShoppingListFinal';
import ShoppingExpenses from '../ShoppingExpenses/ShoppingExpenses';

//styles
import styles from './SuccessPopup.module.css';

export default function SuccessPopup({
  iconImageSource = undefined,
  purchasedItems = [],
  heading = '',
  message = '',
  hasButton = true,
  onClick = null,
  buttonText = 'no text provided',
  extraClass = undefined,
  buttonImageSource = undefined,
  total,
  subTotal,
  tax,
  deliveryFee,
}) {
  return (
    <div
      className={`${styles['success-popup-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {/* render icon if there should be any */}

      <SuccessIcon
        extraClass={[styles['success-popup-main__checkbox']]}
        imageSource={iconImageSource}
      />

      {/* main top message e.g. thank you */}
      <p className={styles['success-popup-main__heading']}>{heading}</p>

      {/* detailed message about the successful action */}
      <p className={styles['success-popup-main__message']}>{message}</p>

      <p className={styles['success-popup-main__order-details-heading']}>
        Order details:
      </p>

      <ShoppingListFinal purchasedItems={purchasedItems} />

      <hr className={styles['success-popup-main__horizontal-line']} />

      <ShoppingExpenses
        extraClass={[styles['success-popup-main__shopping-expenses']]}
        subTotal={subTotal}
        tax={tax}
        deliveryFee={deliveryFee}
        total={total}
      />

      {/* render button if there is any */}
      {hasButton && (
        <Button
          extraClass={[styles['success-popup-main__button']]}
          onClick={onClick}
          buttonText={buttonText}
          iconImageSource={buttonImageSource}
        />
      )}
    </div>
  );
}
