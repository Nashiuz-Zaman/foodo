//component
import SearchIcon from '../SearchIcon/SearchIcon';

//styles
import styles from './Searchbar.module.css';

export default function Searchbar({
  searchTerm = '',
  setSearchTerm = '',
  expand = false,
  handleOpenClick = null,
  handleCloseClick = null,
  extraClass = undefined,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseClick();
  };

  return (
    <div
      className={`${styles['searchbar-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <form onSubmit={handleSubmit} className={styles['searchbar-main__form']}>
        <label className={styles['searchbar-main__form__label']}>
          <SearchIcon
            extraClass={[
              styles['searchbar-main__form__label__search-icon-container'],
            ]}
          />
          <input
            onClick={handleOpenClick}
            className={styles['searchbar-main__form__label__input']}
            type="text"
            // value={searchTerm}
            placeholder={'Search'}
          />
          <input type="submit" hidden />
        </label>
      </form>

      <button
        onClick={handleCloseClick}
        className={styles['searchbar-main__close-button']}
      >
        Close
      </button>
    </div>
  );
}
