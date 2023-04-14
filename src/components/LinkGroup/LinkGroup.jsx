//react
import { memo } from 'react';

//component
import LinkElement from '../LinkElement/LinkElement';

//styles
import styles from './LinkGroup.module.css';

function LinkGroup({ singleListObject = {}, extraClass = undefined }) {
  return (
    <div
      className={`${styles['link-group']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {singleListObject.heading && (
        <h3 className={styles['link-group__heading']}>
          {/* if there is no link for the heading, that means the heading is just a text 
          if there is a link then output the linkElement component */}
          {singleListObject.heading.link === undefined ? (
            singleListObject.heading.text
          ) : (
            <LinkElement
              extraClass={[styles['link-group__heading-link']]}
              toUrl={singleListObject.heading.link}
              linkFor={singleListObject.heading.linkFor}
              text={singleListObject.heading.text}
            />
          )}
        </h3>
      )}

      {singleListObject.options.length > 0 && (
        <ul className={styles['link-group__list']}>
          {singleListObject.options.map((option) => {
            return (
              <li key={option.text} className={styles['link-group__list-item']}>
                <LinkElement
                  extraClass={[styles['link-group__list-item-link']]}
                  text={option.text}
                  linkFor={option.linkFor}
                  toUrl={`${option.link}`}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default memo(LinkGroup);
