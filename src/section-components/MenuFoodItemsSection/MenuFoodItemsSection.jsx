//component
import CardsCollectionWithHeading from '../../components/CardsCollectionWithHeading/CardsCollectionWithHeading';
import ShowcaseWithTitle from '../../components/ShowcaseWithTitle/ShowcaseWithTitle';

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
      {categories.map((category) => {
        return (
          <div
            id={category.title}
            className={`${styles['menu-food-items-section-main__single-category']} scroll-offset`}
            key={category.id}
          >
            <ShowcaseWithTitle
              dataObject={category}
              extraClass={[
                styles[
                  'menu-food-items-section-main__single-category__showcase-with-title-main'
                ],
              ]}
            />
            <CardsCollectionWithHeading
              dataArray={allItems.filter((item) => {
                return item.category === category.title;
              })}
            />
          </div>
        );
      })}
    </section>
  );
}
