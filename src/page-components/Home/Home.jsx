//component
import HeroSection from '../../section-components/HeroSection/HeroSection';
import HowItWorksSection from '../../section-components/HowItWorksSection/HowItWorksSection';
import FoodItemsSection from '../../section-components/FoodItemsSection/FoodItemsSection';

//image source
import heroImage from '../../assets/hero.webp';

// data
import { howItWorksData } from '../../data/HowItWorksData';

//styles
import styles from './Home.module.css';
import ReviewSection from '../../section-components/ReviewSection/ReviewSection';

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
        heading={'Delicious food right at your doorstep.'}
        buttonText={'How it works'}
        toUrl="#howItWorks"
        linkFor="hashed"
        extraClass={['section-margin']}
      />

      <HowItWorksSection
        sectionId={'howItWorks'}
        sectionTitle={'How It Works'}
        description={"It's as easy as 1 ... 2 ... 3"}
        howItWorksDataArray={howItWorksData}
        extraClass={['section-margin', 'scroll-offset']}
      />

      <FoodItemsSection extraClass={['section-margin', 'scroll-offset']} />

      <ReviewSection />
    </div>
  );
}
