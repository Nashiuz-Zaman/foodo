//components
import ImageElement from '../ImageElement/ImageElement';
import PlainDescription from '../PlainDescription/PlainDescription';

//styles
import styles from './ImageDescriptionButton.module.css';

export default function ImageDescriptionButton({
  imageSource = '',
  description = 'no description provided',
  altText = '',
  extraClass = undefined,
  button = undefined,
  reverseStyle = false,
}) {
  return (
    <div
      className={`${styles['image-description-button-main']} ${
        reverseStyle
          ? styles['reverse-image-description-button-main']
          : 'no-reverse-style'
      } ${extraClass ? extraClass.join(' ') : 'no-extra-class'}`}
    >
      <ImageElement
        extraClass={[styles['image-description-button-main__image-main']]}
        imageSource={imageSource}
        alt={altText}
      />

      <PlainDescription
        extraClass={[
          styles['image-description-button-main__plain-description-main'],
        ]}
        description={description}
      />
      {/* need to modify the button part more to make it functional */}
      {button && button}
    </div>
  );
}
