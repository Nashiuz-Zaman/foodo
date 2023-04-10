//components
import CloseButton from '../../CloseButton/CloseButton';
import LeftCaret from '../../Symbols/LeftCaret/LeftCaret';
import RightCaret from '../../Symbols/RightCaret/RightCaret';
import LinkElement from '../../LinkElement/LinkElement';
import SocialMediaLinks from '../../SocialMediaLinks/SocialMediaLinks';

//styles
import styles from './MobileNavigationInnerMenu.module.css';

export default function MobileNavigationInnerMenu({
  singleMenuOptions = [],
  handleCloseClick,
  currentMenu,
  handleMenuChangeForward,
  previousMenuArray,
  socialmediaButtonsHeading = null,
  socialmediaButtonsData = null,
}) {
  return (
    <div
      className={`${styles['mobile-navigation-innermenu']} ${
        currentMenu === singleMenuOptions.id ? styles['show'] : ''
      } ${
        previousMenuArray.includes(singleMenuOptions.id)
          ? styles['previously-shown']
          : ''
      }`}
    >
      {singleMenuOptions.id === 'main' && (
        <div
          className={
            styles['mobile-navigation-innermenu__closelisticon-container']
          }
        >
          <CloseButton handleClick={handleCloseClick} />
        </div>
      )}

      {singleMenuOptions.id !== 'main' && (
        <div
          className={
            styles['mobile-navigation-innermenu__leftcareticon-container']
          }
        >
          <LeftCaret />
        </div>
      )}

      <ul className={styles['mobile-navigation-innermenu__list-of-options']}>
        {singleMenuOptions.heading !== undefined && (
          <li
            onClick={() => {
              if (singleMenuOptions.heading.link) {
                handleCloseClick();
              }
            }}
            className={
              styles['mobile-navigation-innermenu__list-of-options__heading']
            }
          >
            {/* if it is not a link, a span tag is output */}
            {singleMenuOptions.heading.link === undefined && (
              <span>{singleMenuOptions.heading.text}</span>
            )}

            {/* if it is a link, a LINK or <a> tag is output */}
            {singleMenuOptions.heading.link !== undefined && (
              <LinkElement
                linkFor={singleMenuOptions.heading.linkFor}
                toUrl={singleMenuOptions.heading.link}
                text={singleMenuOptions.heading.text}
              />
            )}
          </li>
        )}

        {singleMenuOptions.options.map((single) => {
          return singleMenuOptions.id === 'main' ? (
            <li
              onClick={() => {
                single.link !== undefined
                  ? handleCloseClick()
                  : handleMenuChangeForward(single);
              }}
              key={single.id}
              className={
                styles[
                  'mobile-navigation-innermenu__list-of-options__single-option--main-list'
                ]
              }
            >
              {single.link !== undefined ? (
                <LinkElement
                  linkFor={single.linkFor}
                  toUrl={single.link}
                  text={single.text}
                />
              ) : (
                <span>
                  {single.text}
                  <RightCaret />
                </span>
              )}
            </li>
          ) : (
            <li
              onClick={() => {
                single.link !== undefined
                  ? handleCloseClick()
                  : handleMenuChangeForward(single);
              }}
              className={
                styles[
                  'mobile-navigation-innermenu__list-of-options__single-option'
                ]
              }
              key={single.id}
            >
              {single.link !== undefined ? (
                <LinkElement
                  linkFor={single.linkFor}
                  toUrl={single.link}
                  text={single.text}
                />
              ) : (
                <span>
                  {single.text}
                  <RightCaret />
                </span>
              )}
            </li>
          );
        })}
      </ul>

      {singleMenuOptions.id === 'main' && (
        <SocialMediaLinks
          extraClass={[
            styles['mobile-navigation-innermenu__social-media-links'],
          ]}
          heading={socialmediaButtonsHeading}
          logoButtonsArray={socialmediaButtonsData}
        />
      )}
    </div>
  );
}
