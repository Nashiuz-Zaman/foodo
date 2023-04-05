//component
import SearchIcon from '../SearchIcon/SearchIcon';

//styles
import styles from './SearchButton.module.css';

//SearchButton starts here
export default function SearchButton({
  text = false,
  buttonText = 'no text-provided',
  extraClass = undefined,
  primaryColor = true,
}) {
  // jsx template
  return (
    <div
      className={`${styles['search-button-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <button
        className={styles['search-button-main__button']}
        aria-label={'A button used to search the database'}
      >
        <SearchIcon primaryColor={primaryColor} />
        {text && buttonText}
      </button>
    </div>
  );
}
