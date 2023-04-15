//component
import ImageElement from '../ImageElement/ImageElement';

//styles
import styles from './Button.module.css';

export default function Button({
  onClick = null,
  extraClass = undefined,
  buttonText = 'no text provided',
  iconImageSource = undefined,
}) {
  return (
    <div
      className={`${styles['button-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <button
        className={`${styles['button-main__button']} ${
          extraClass ? `${extraClass[0]}__button` : ''
        }`}
        onClick={onClick}
      >
        {buttonText}
        {iconImageSource && <ImageElement imageSource={iconImageSource} />}
      </button>
    </div>
  );
}
