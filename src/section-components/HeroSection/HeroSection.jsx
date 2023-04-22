//components
import Hero from '../../components/Hero/Hero';

//styles
import styles from './HeroSection.module.css';

//HeroSection starts here
export default function HeroSection({
  imageSource = '',
  shortIntroduction,
  heading,
  buttonText,
  linkFor,
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
      <Hero
        imageSource={imageSource}
        shortIntroduction={shortIntroduction}
        heading={heading}
        buttonText={buttonText}
        linkFor={linkFor}
        toUrl={toUrl}
      />
    </section>
  );
}
