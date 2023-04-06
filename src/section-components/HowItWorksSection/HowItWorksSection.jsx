//component
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import PlainDescription from '../../components/PlainDescription/PlainDescription';
import ImageDescriptionButton from '../../components/ImageDescriptionButton/ImageDescriptionButton';
import TertiaryHeading from '../../components/TertiaryHeading/TertiaryHeading';

//styles
import styles from './HowItWorksSection.module.css';

//HowItWorksSection starts here
export default function HowItWorksSection({
  sectionId = '',
  sectionTitle = 'no title provided',
  description = 'no description provided',
  extraClass = undefined,
  howItWorksDataArray = null,
}) {
  // jsx template
  return (
    <section
      id={sectionId}
      className={`${styles['how-it-works-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <SectionTitle
        title={sectionTitle}
        extraClass={[styles['how-it-works-section-main__section-title']]}
      />
      <PlainDescription
        description={description}
        extraClass={[
          styles['how-it-works-section-main__top-plain-description'],
        ]}
      />

      <ol className={styles['how-it-works-section-main__how-it-works-list']}>
        {howItWorksDataArray &&
          howItWorksDataArray.map((single) => {
            return (
              <li key={single.id}>
                <p
                  className={
                    styles[
                      'how-it-works-section-main__how-it-works-list__item-number'
                    ]
                  }
                >
                  {single.id + 1}.
                </p>
                <TertiaryHeading heading={single.heading} />
                <ImageDescriptionButton
                  imageSource={single.imageSource}
                  heading={single.heading}
                  description={single.description}
                />
              </li>
            );
          })}
      </ol>
    </section>
  );
}
