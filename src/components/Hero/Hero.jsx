//components
import Showcase from '../Showcase/Showcase';
import LinkButton from '../LinkButton/LinkButton';
import HeadingDescriptionButton from '../HeadingDescriptionButton/HeadingDescriptionButton';

//styles
import styles from './Hero.module.css';

//Hero starts here
export default function Hero({
  imageSource = '',
  shortIntroduction,
  heading,
  buttonText,
  linkFor = 'samesite',
  toUrl = '',
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['hero-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <Showcase
        extraClass={[styles['hero-main__hero-image']]}
        imageSource={imageSource}
      />
      <HeadingDescriptionButton
        shortIntroduction={shortIntroduction}
        heading={heading}
        button={
          <LinkButton
            buttonText={buttonText}
            linkFor={linkFor}
            toUrl={toUrl}
            rightCaret={true}
            extraClass={[
              styles[
                'hero-main__heading-description-button-main__link-button-main'
              ],
            ]}
          />
        }
        extraClass={[styles['hero-main__heading-description-button-main']]}
      />
    </div>
  );
}
