//react
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

//image source
import goBackIcon from './images/leftcaret.svg';

//styles
import styles from './LinkElement.module.css';

export default function LinkElement({
  linkFor = 'samesite',
  toUrl = '',
  text = 'no text provided',
  extraClass = undefined,
  customStyle = {},
  ariaLabel = '',
  isText = true,
  iconImagesource = null,
  altForIcon = '',
  goBackLink = false,
  card = false,
  children = null,
}) {
  return (
    <>
      {/* external websites */}
      {linkFor === 'external' && (
        <a
          aria-label={ariaLabel}
          style={customStyle}
          className={`${styles['link-element-main']} ${
            extraClass ? extraClass.join(' ') : 'no-extra-class'
          }`}
          href={toUrl}
        >
          {goBackLink && <img src={goBackIcon} alt={'left caret'} />}
          {isText && text}
          {!isText && card && children}
          {!goBackLink && iconImagesource && (
            <img src={iconImagesource} alt={altForIcon} />
          )}
        </a>
      )}

      {/* hashtag id in the same page */}
      {linkFor === 'hashed' && (
        <HashLink
          aria-label={ariaLabel}
          style={customStyle}
          className={`${styles['link-element-main']} ${
            extraClass ? extraClass.join(' ') : 'no-extra-class'
          }`}
          to={`/${toUrl}`}
        >
          {goBackLink && <img src={goBackIcon} alt={'left caret'} />}
          {isText && text}
          {!isText && card && children}
          {!goBackLink && iconImagesource && (
            <img src={iconImagesource} alt={altForIcon} />
          )}
        </HashLink>
      )}

      {/* routing to another page on the same website */}
      {linkFor === 'samesite' && (
        <Link
          aria-label={ariaLabel}
          style={customStyle}
          className={`${styles['link-element-main']} ${
            extraClass ? extraClass.join(' ') : 'no-extra-class'
          }`}
          to={`/${toUrl}`}
        >
          {goBackLink && <img src={goBackIcon} alt={'left caret'} />}
          {isText && text}
          {!isText && card && children}
          {!goBackLink && iconImagesource && (
            <img src={iconImagesource} alt={altForIcon} />
          )}
        </Link>
      )}
    </>
  );
}
