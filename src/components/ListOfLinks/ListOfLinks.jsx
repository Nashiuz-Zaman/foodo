//components
import LinkElement from '../LinkElement/LinkElement';

//styles
import styles from './ListOfLinks.module.css';

export default function ListOfLinks({
  linkDataArray = undefined,
  extraClass = undefined,
}) {
  return (
    <div
      className={`${styles['list-of-links-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <ul className={styles['list-of-links-main__list']}>
        {linkDataArray.map((single) => {
          return (
            <li
              key={single.id}
              className={styles['list-of-links-main__list__list-item']}
            >
              <LinkElement
                linkFor={single.linkFor}
                toUrl={single.toUrl}
                text={single.text}
                ariaLabel={single.ariaLabel && single.ariaLabel}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
