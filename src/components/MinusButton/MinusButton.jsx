//component
import ImageElement from '../ImageElement/ImageElement';

//styles
import styles from './MinusButton.module.css';

//image source
import minusIcon from './image/minus.svg';

export default function MinusButton({
  onClick = null,
  buttonText = undefined,
}) {
  return (
    <div className={styles['minus-button-main']}>
      <button
        className={styles['minus-button-main__button']}
        onClick={onClick}
        aria-label={
          'button to delete something from a list or close an opened state'
        }
      >
        {buttonText && buttonText}
        <ImageElement
          extraClass={[styles['minus-button-main__button__minus-icon']]}
          imageSource={minusIcon}
        />
      </button>
    </div>
  );
}
