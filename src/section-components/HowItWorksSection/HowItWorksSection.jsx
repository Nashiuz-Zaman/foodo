//component
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import ImageDescriptionButton from '../../components/ImageDescriptionButton/ImageDescriptionButton';
import TertiaryHeading from '../../components/TertiaryHeading/TertiaryHeading';
import LinkButton from '../../components/LinkButton/LinkButton';

//styles
import styles from './HowItWorksSection.module.css';

//HowItWorksSection starts here
export default function HowItWorksSection({
  sectionId = '',
  sectionTitle = 'no title provided',
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

      <ol className={styles['how-it-works-section-main__how-it-works-list']}>
        {howItWorksDataArray &&
          howItWorksDataArray.map((single, i) => {
            return (
              <li
                key={single.id}
                className={
                  styles['how-it-works-section-main__how-it-works-list__item']
                }
              >
                <p
                  className={
                    styles[
                      'how-it-works-section-main__how-it-works-list__item-number'
                    ]
                  }
                >
                  {single.id + 1}
                </p>

                <TertiaryHeading
                  extraClass={[
                    styles[
                      'how-it-works-section-main__how-it-works-list__item-heading'
                    ],
                  ]}
                  heading={single.heading}
                />
                <ImageDescriptionButton
                  extraClass={[
                    styles[
                      'how-it-works-section-main__how-it-works-list__item-image-description-button-main'
                    ],
                    (i + 1) % 2 === 0 &&
                      styles[
                        'how-it-works-section-main__how-it-works-list__item-image-description-button-main--reverse'
                      ],
                  ]}
                  imageSource={single.imageSource}
                  heading={single.heading}
                  description={single.description}
                />
              </li>
            );
          })}
      </ol>

      <LinkButton
        extraClass={[styles['how-it-works-section-main__order-button']]}
        buttonText={'Order Now'}
        toUrl="menu"
        linkFor={'samesite'}
        rightCaret={true}
      />
    </section>
  );
}
