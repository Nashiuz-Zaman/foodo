//component
import ImageLink from '../../components/ImageLink/ImageLink';
import SectionTitle from '../../components/SectionTitle/SectionTitle';

//styles
import styles from './MenuCategorySection.module.css';

//MenuCategorySection starts here
export default function MenuCategorySection({
  sectionId = '',
  sectionTitle = '',
  categoryData = undefined,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <section
      id={sectionId}
      className={`${styles['menu-category-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <SectionTitle
        extraClass={[styles['menu-category-section-main__section-title']]}
        title={sectionTitle}
      />

      <div className={styles['menu-category-section-main__category-container']}>
        {categoryData &&
          categoryData.map((single) => {
            return <ImageLink key={single.id} dataObject={single} />;
          })}
      </div>
    </section>
  );
}