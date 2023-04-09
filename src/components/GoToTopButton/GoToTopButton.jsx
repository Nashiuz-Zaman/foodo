//component
import ImageElement from '../ImageElement/ImageElement';

//image source
import caretUp from './image/caretup.svg';

//styles
import styles from './GoToTopButton.module.css';

export default function GoToTopButton({ extraClass = undefined }) {
  // jsx template
  return (
    <div
      className={`${styles['go-to-top-button-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <button
        className={styles['go-to-top-button-main__button']}
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo(0, 0);
        }}
      >
        <ImageElement
          extraClass={[styles['go-to-top-button-main__button__icon-image']]}
          imageSource={caretUp}
        />
      </button>
    </div>
  );
}
