//component
import Showcase from '../../components/Showcase/Showcase';
import PlainDescription from '../../components/PlainDescription/PlainDescription';
import TertiaryHeading from '../../components/TertiaryHeading/TertiaryHeading';

//styles
import styles from './PromotionSection.module.css';

//PromotionSection starts here
export default function PromotionSection({
  heading = '',
  imageSource = null,
  message = '',
  extraClass = undefined,
}) {
  // jsx template
  return (
    <section
      className={`${styles['promotion-section-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <TertiaryHeading
        heading={heading}
        extraClass={[styles['promotion-section-main__promotion-heading']]}
      />

      <Showcase
        extraClass={[styles['promotion-section-main__promotion-image']]}
        imageSource={imageSource}
      />

      <PlainDescription
        extraClass={[styles['promotion-section-main__promotion-message']]}
        description={message}
      />
    </section>
  );
}
