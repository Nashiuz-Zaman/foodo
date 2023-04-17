//component
import ImageElement from '../ImageElement/ImageElement';

//styles
import styles from './PlusButton.module.css';

//image source
import plusIcon from './image/plus.svg';

export default function PlusButton({ onClick = null, buttonText = undefined }) {
  return (
    <div className={styles['plus-button-main']}>
      <button
        className={styles['plus-button-main__button']}
        onClick={onClick}
        aria-label={
          'a plus button to add something to a list or open a closed state'
        }
      >
        {buttonText && buttonText}
        <ImageElement
          extraClass={[styles['plus-button-main__button__plus-icon']]}
          imageSource={plusIcon}
        />
      </button>
    </div>
  );
}
