//react
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

//image source
import leftCaret from './images/leftcaret.svg';
import rightCaretIcon from './images/rightcaret.svg';

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
  altForIcon = '',
  goBackLink = false,
  htmlElement = false,
  children = null,
  rightCaret = false,
  onClick = null,
}) {
  return (
    <>
      {/* external websites */}
      {linkFor === 'external' && (
        <a
          onClick={onClick}
          aria-label={ariaLabel}
          style={customStyle}
          className={`${styles['link-element-main']} ${
            extraClass ? extraClass.join(' ') : 'no-extra-class'
          }`}
          href={toUrl}
        >
          {goBackLink && <img src={leftCaret} alt={'left caret'} />}
          {isText && text}
          {!isText && htmlElement && children}
          {!goBackLink && rightCaret && (
            <img src={rightCaretIcon} alt={altForIcon} />
          )}
        </a>
      )}

      {/* hashtag id in the same page */}
      {linkFor === 'hashed' && (
        <HashLink
          onClick={onClick}
          aria-label={ariaLabel}
          style={customStyle}
          className={`${styles['link-element-main']} ${
            extraClass ? extraClass.join(' ') : 'no-extra-class'
          }`}
          to={`/${toUrl}`}
        >
          {goBackLink && <img src={leftCaret} alt={'left caret'} />}
          {isText && text}
          {!isText && htmlElement && children}
          {!goBackLink && rightCaret && (
            <img src={rightCaretIcon} alt={altForIcon} />
          )}
        </HashLink>
      )}

      {/* routing to another page on the same website */}
      {linkFor === 'samesite' && (
        <Link
          onClick={onClick}
          aria-label={ariaLabel}
          style={customStyle}
          className={`${styles['link-element-main']} ${
            extraClass ? extraClass.join(' ') : 'no-extra-class'
          }`}
          to={`/${toUrl}`}
        >
          {goBackLink && <img src={leftCaret} alt={'left caret'} />}
          {isText && text}
          {!isText && htmlElement && children}
          {!goBackLink && rightCaret && (
            <img src={rightCaretIcon} alt={altForIcon} />
          )}
        </Link>
      )}
    </>
  );
}
