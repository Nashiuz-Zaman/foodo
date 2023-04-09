//components
import LinkElement from '../LinkElement/LinkElement';

//image source
import appleStore from './image/footer-app-apple.svg';
import googleStore from './image/footer-app-google.svg';

//styles
import styles from './AppStoreLinks.module.css';

//data
const appleStoreData = {
  title: 'Link to Apple Store',
  imageSource: appleStore,
  linkFor: 'external',
  link: 'https://apps.apple.com/',
};

const googleStoreData = {
  title: 'Link to Google Store',
  imageSource: googleStore,
  linkFor: 'external',
  link: 'https://play.google.com//',
};

const data = [appleStoreData, googleStoreData];

//AppStoreLinks starts here
export default function AppStoreLinks({ extraClass = undefined }) {
  // jsx template
  return (
    <div
      className={`${styles['app-store-links-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {data.map((single) => {
        return (
          <LinkElement
            key={single.title}
            toUrl={single.link}
            linkFor={single.linkFor}
            isText={false}
            ariaLabel={single.title}
            htmlElement={true}
            extraClass={[styles['app-store-links-main__link']]}
          >
            <img src={single.imageSource} alt={single.title} />
          </LinkElement>
        );
      })}
    </div>
  );
}
