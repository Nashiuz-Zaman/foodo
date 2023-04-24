//react
import { useEffect, useRef } from 'react';

//redux
import { useDispatch, useSelector } from 'react-redux';
import { getAllFoodItems } from '../../features/foodItems/foodItemsSlice';

//component
import HeroSection from '../../section-components/HeroSection/HeroSection';
import MenuCategorySection from '../../section-components/MenuCategorySection/MenuCategorySection';
import MenuFoodItemsSection from '../../section-components/MenuFoodItemsSection/MenuFoodItemsSection';
import WideHeroSection from '../../section-components/WideHeroSection/WideHeroSection';

//hooks
import useDetectMenu from '../../hooks/useDetectMenu';
import useMediaQueryMatcher from '../../hooks/useMediaQueryMatcher';

//image source
import HeroImage from '../../assets/menu-page-hero.webp';

//data
import { foodCategories } from '../../data/FoodCategoryData';
import {
  menuHeroImagesArray,
  menuHeroLargeBackground,
} from '../../data/HeroData';

//styles
import styles from './Menu.module.css';
import ScrollToElement from '../../components/ScrollToElement/ScrollTolElement';

//Menu starts here
function Menu({ extraClass = undefined }) {
  const { mediaQueryState } = useMediaQueryMatcher();

  const dispatch = useDispatch();
  const allFoodItems = useSelector((state) => state.foodItems.allFoodItems);
  useEffect(() => {
    dispatch(getAllFoodItems());
  }, [dispatch]);

  // create ref for menu category section
  const menuRef = useRef();

  // show the scroll to element button conditionally
  const { passedMenu } = useDetectMenu(menuRef);

  // jsx template
  return (
    <div
      className={`${styles['menu-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {mediaQueryState.isSmallScreen && (
        <HeroSection
          imageSource={HeroImage}
          shortIntroduction={'Welcome'}
          heading={'Explore Our Creations: The Perfect Meal Awaits'}
          buttonText={'View Menu'}
          toUrl="menu#menu"
          linkFor="hashed"
          extraClass={['section-margin']}
        />
      )}

      {mediaQueryState.isLargeScreen && (
        <WideHeroSection
          shortIntroduction={'Welcome'}
          heading={'Explore Our Creations: The Perfect Meal Awaits'}
          buttonText={'View Menu'}
          toUrl="menu#menu"
          linkFor="hashed"
          images={menuHeroImagesArray}
          wholeHeroBackgroundImage={menuHeroLargeBackground}
          extraClass={['section-margin']}
        />
      )}

      <MenuCategorySection
        sectionId={'menu'}
        sectionTitle={'Menu'}
        categoryData={foodCategories}
        extraClass={['scroll-offset']}
        ref={menuRef}
      />

      <MenuFoodItemsSection
        allItems={allFoodItems && allFoodItems}
        categories={foodCategories}
        extraClass={['section-margin']}
      />

      <ScrollToElement
        buttonText={'Menu'}
        elementRef={menuRef.current}
        visible={passedMenu ? true : false}
      />
    </div>
  );
}

export default Menu;
