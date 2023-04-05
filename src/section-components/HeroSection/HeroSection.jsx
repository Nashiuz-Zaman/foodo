//components
import Showcase from '../../components/Showcase/Showcase';
import LinkButton from '../../components/LinkButton/LinkButton';

//styles
import styles from './HeroSection.module.css';
import HeadingDescriptionButton from '../../components/HeadingDescriptionButton/HeadingDescriptionButton';

//HeroSection starts here
export default function HeroSection({
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
    <section
      className={`${styles['hero-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <Showcase
        extraClass={[styles['hero-section-main__hero-image']]}
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
            extraClass={[
              styles[
                'hero-section-main__heading-description-button-main__link-button-main'
              ],
            ]}
          />
        }
        extraClass={[
          styles['hero-section-main__heading-description-button-main'],
        ]}
      />
    </section>
  );
}
