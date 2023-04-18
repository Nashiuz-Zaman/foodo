//component
import HeroSection from '../../section-components/HeroSection/HeroSection';
import MenuCategorySection from '../../section-components/MenuCategorySection/MenuCategorySection';

//image source
import HeroImage from '../../assets/menu-page-hero.webp';

//data
import { foodCategories } from '../../data/FoodCategoryData';

//styles
import styles from './Menu.module.css';

//Menu starts here
export default function Menu({ extraClass = undefined }) {
  // jsx template
  return (
    <div
      className={`${styles['menu-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <HeroSection
        imageSource={HeroImage}
        shortIntroduction={'Welcome'}
        heading={'Explore Our Creations: The Perfect Meal Awaits'}
        buttonText={'View Menu'}
        toUrl="menu#menu"
        linkFor="hashed"
        extraClass={['section-margin']}
      />

      <MenuCategorySection
        sectionId={'menu'}
        sectionTitle={'Menu'}
        categoryData={foodCategories}
        extraClass={['section-margin', 'scroll-offset']}
      />
    </div>
  );
}
