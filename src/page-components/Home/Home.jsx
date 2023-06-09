//component
import HeroSection from '../../section-components/HeroSection/HeroSection';
import HowItWorksSection from '../../section-components/HowItWorksSection/HowItWorksSection';
import FoodItemsSection from '../../section-components/FoodItemsSection/FoodItemsSection';
import ReviewSection from '../../section-components/ReviewSection/ReviewSection';
import WideHeroSection from '../../section-components/WideHeroSection/WideHeroSection';
import LocationSection from '../../section-components/LocationSection/LocationSection';
import PromotionSection from '../../section-components/PromotionSection/PromotionSection';

//hook
import useMediaQueryMatcher from '../../hooks/useMediaQueryMatcher';

//image source
import heroImage from '../../assets/hero.webp';

// data
import { howItWorksData } from '../../data/HowItWorksData';
import {
  homeHeroImagesArray,
  homeHeroLargeBackground,
} from '../../data/HeroData';
import { citiesData } from '../../data/CityData';
import {
  promotionImage,
  promotionHeading,
  promotionMessage,
} from '../../data/PromotionInformation';

//styles
import styles from './Home.module.css';

//Home starts here
function Home({ extraClass = undefined }) {
  const { mediaQueryState } = useMediaQueryMatcher();

  // jsx template
  return (
    <div
      className={`${styles['home-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {mediaQueryState.isSmallScreen && (
        <HeroSection
          imageSource={heroImage}
          shortIntroduction={'Welcome'}
          heading={'Delicious food right at your doorstep.'}
          buttonText={'How it works'}
          toUrl="#howItWorks"
          linkFor="hashed"
          extraClass={['section-margin']}
        />
      )}

      {mediaQueryState.isLargeScreen && (
        <WideHeroSection
          shortIntroduction={'Welcome'}
          heading={'Delicious food right at your doorstep.'}
          buttonText={'How it works'}
          toUrl="#howItWorks"
          linkFor="hashed"
          images={homeHeroImagesArray}
          wholeHeroBackgroundImage={homeHeroLargeBackground}
          extraClass={['section-margin']}
        />
      )}

      <HowItWorksSection
        sectionId={'howItWorks'}
        sectionTitle={'How It Works'}
        description={"It's as easy as 1 ... 2 ... 3"}
        howItWorksDataArray={howItWorksData}
        extraClass={['section-margin', 'scroll-offset']}
      />

      <LocationSection
        heading={'Find us in all of these 6 cities'}
        locationsData={citiesData}
        extraClass={['section-margin']}
      />

      <FoodItemsSection extraClass={['section-margin']} />

      <PromotionSection
        heading={promotionHeading}
        imageSource={promotionImage}
        message={promotionMessage}
        extraClass={['section-margin']}
      />

      <ReviewSection
        sectionTitle={'Customer Reviews'}
        extraClass={['section-margin']}
      />
    </div>
  );
}

export default Home;
