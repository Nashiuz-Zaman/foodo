//component
import HeroSection from '../../section-components/HeroSection/HeroSection';

//image source
import heroImage from '../../assets/hero.webp';

//styles
import styles from './Home.module.css';

//Home starts here
export default function Home({ extraClass = undefined }) {
  // jsx template
  return (
    <div
      className={`${styles['home-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <HeroSection
        imageSource={heroImage}
        shortIntroduction={'Welcome'}
        heading={'Delicious food right at your doorstep'}
        buttonText={'How it works'}
      />
    </div>
  );
}
