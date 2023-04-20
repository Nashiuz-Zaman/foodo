//component
import ImageElement from '../ImageElement/ImageElement';

//image source
import caretUp from './image/caretup.svg';

//styles
import styles from './ScrollToElement.module.css';

//ScrollToElement starts here
export default function ScrollToElement({
  buttonText = '',
  elementRef = null,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['scroll-to-element-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <button
        className={styles['scroll-to-element-main__button']}
        onClick={(e) => {
          e.preventDefault();
          if (elementRef) {
            elementRef.scrollIntoView();
          }
        }}
      >
        {buttonText}
        <ImageElement
          extraClass={[styles['scroll-to-element-main__button__icon-image']]}
          imageSource={caretUp}
        />
      </button>
    </div>
  );
}
