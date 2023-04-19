//component
import CardsCollectionWithHeading from '../../components/CardsCollectionWithHeading/CardsCollectionWithHeading';
import OnlyDesignDiv from '../../components/OnlyDesignDiv/OnlyDesignDiv';

//styles
import styles from './MenuFoodItemsSection.module.css';

//MenuFoodItemsSection starts here
export default function MenuFoodItemsSection({
  sectionId = '',
  categories = [],
  allItems = [],
  extraClass = undefined,
}) {
  // jsx template
  return (
    <section
      id={sectionId}
      className={`${styles['menu-food-items-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {categories.map((category, i, arr) => {
        return (
          <>
            <CardsCollectionWithHeading
              divId={category.title}
              imageSource={category.icon}
              key={category.id}
              heading={category.title}
              dataArray={allItems.filter((item) => {
                return item.category === category.title;
              })}
            />
            {i < arr.length - 1 && <OnlyDesignDiv />}
          </>
        );
      })}
    </section>
  );
}
