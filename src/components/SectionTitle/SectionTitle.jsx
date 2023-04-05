//styles
import styles from './SectionTitle.module.css';

export default function SectionTitle({
  title = 'no title provided',
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles['section-title-box']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <h2 className={styles['section-title-box__section-title']}>
        {title ?? 'Title Undefined'}
        <span className="highlighted">.</span>
      </h2>
    </div>
  );
}
