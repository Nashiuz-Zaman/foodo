//component
import ImageLink from '../../components/ImageLink/ImageLink';
import TertiaryHeading from '../../components/TertiaryHeading/TertiaryHeading';

//styles
import styles from './LocationSection.module.css';

//LocationSection starts here
export default function LocationSection({
  heading,
  locationsData,
  extraClass = undefined,
}) {
  // jsx template
  return (
    <section
      className={`${styles['location-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <TertiaryHeading
        heading={heading}
        extraClass={[styles['location-section-main__section-title']]}
      />

      <div className={styles['location-section-main__locations']}>
        {locationsData.map((single) => {
          return (
            <ImageLink
              extraClass={[
                styles['location-section-main__locations__location'],
              ]}
              key={single.id}
              dataObject={single}
            />
          );
        })}
      </div>
    </section>
  );
}
