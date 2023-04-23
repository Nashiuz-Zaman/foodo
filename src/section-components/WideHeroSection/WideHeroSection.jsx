//component
import Carousel from '../../components/Carousel/Carousel';
import HeadingDescriptionButton from '../../components/HeadingDescriptionButton/HeadingDescriptionButton';
import LinkButton from '../../components/LinkButton/LinkButton';

//styles
import styles from './WideHeroSection.module.css';

//WideHeroSection starts here
export default function WideHeroSection({
  shortIntroduction,
  heading,
  buttonText,
  toUrl,
  linkFor,
  images,
  wholeHeroBackgroundImage,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <section
      className={`${styles['wide-hero-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <div
        style={{ background: `url(${wholeHeroBackgroundImage})` }}
        className={styles['wide-hero-section-main__whole-background']}
      >
        &nbsp;
      </div>

      <div className={styles['wide-hero-section-main__text-container']}>
        <HeadingDescriptionButton
          shortIntroduction={shortIntroduction}
          heading={heading}
          button={
            <LinkButton
              buttonText={buttonText}
              toUrl={toUrl}
              linkFor={linkFor}
              rightCaret={true}
            />
          }
          extraClass={[
            styles[
              'wide-hero-section-main__text-container__heading-description-button-main'
            ],
          ]}
        />
      </div>

      <div className={styles['wide-hero-section-main__carousel-container']}>
        <Carousel
          extraClass={[
            styles['wide-hero-section-main__carousel-container__carousel'],
          ]}
          images={images}
        />
      </div>
    </section>
  );
}
