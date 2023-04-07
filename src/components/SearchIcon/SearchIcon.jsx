//image source
import searchImage from './image/search.svg';

//styles
import styles from './SearchIcon.module.css';

//SearchIcon starts here
export default function SearchIcon({
  extraClass = undefined,
  primaryColor = true,
}) {
  // jsx template
  return (
    <div
      className={`${styles['search-icon-container']} ${
        primaryColor ? styles['primary-color'] : styles['white-color']
      } ${extraClass ? extraClass.join(' ') : 'no-extra-class'}`}
    >
      <img src={searchImage} alt={'magnifying glass'} />
    </div>
  );
}
