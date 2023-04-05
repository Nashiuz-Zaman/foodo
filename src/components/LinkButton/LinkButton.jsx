//components
import LinkElement from '../LinkElement/LinkElement';

//styles
import styles from './LinkButton.module.css';

export default function LinkButton({
  buttonText = '',
  toUrl = '',
  linkFor = undefined,
  extraClass = undefined,
  iconImageSource = undefined,
  goBackButton = false,
}) {
  return (
    <div
      className={`${styles['link-button-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <LinkElement
        text={buttonText}
        toUrl={toUrl}
        linkFor={linkFor}
        iconImagesource={iconImageSource}
        goBackLink={goBackButton}
      />
    </div>
  );
}
