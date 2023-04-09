//react

import LinkElement from '../LinkElement/LinkElement';

//styles
import styles from './ImageLinkButton.module.css';

export default function ImageLinkButton({
  extraClass = undefined,
  linkData = undefined,
}) {
  return linkData.source === undefined ? (
    <p>Please provide button image</p>
  ) : (
    <div
      title={linkData.title}
      className={`${styles['image-link-button-main']}  ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <LinkElement
        linkFor={linkData.linkFor}
        ariaLabel={linkData.title}
        text={<>&nbsp;</>}
        customStyle={{
          background: `url(${linkData.source})`,
        }}
        toUrl={linkData.link ?? 'No url provided'}
        extraClass={[styles['image-link-button-main__link']]}
      />
    </div>
  );
}
