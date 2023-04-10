//component
import SearchIcon from '../SearchIcon/SearchIcon';

//styles
import styles from './MobileSearchbar.module.css';

export default function MobileSearchbar({
  brandName = '',
  searchTerm = '',
  setSearchTerm = '',
  expand = false,
  handleOpenClick = null,
  handleCloseClick = null,
  marginTop = null,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCloseClick();
  };

  return (
    <div
      style={{
        marginTop: `${marginTop}px`,
        height: `calc(100vh - ${marginTop}px)`,
      }}
      className={`${styles['mobile-searchbar-main']} ${
        expand && styles['expand']
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={styles['mobile-searchbar-main__form']}
      >
        <label className={styles['mobile-searchbar-main__form__label']}>
          <SearchIcon
            extraClass={[
              styles[
                'mobile-searchbar-main__form__label__search-icon-container'
              ],
            ]}
          />
          <input
            onClick={handleOpenClick}
            className={styles['mobile-searchbar-main__form__label__input']}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            type="text"
            value={searchTerm}
            placeholder={'Search'}
          />
          <input type="submit" hidden />
        </label>
      </form>

      <button onClick={handleCloseClick} className={styles['close-button']}>
        Cancel
      </button>
    </div>
  );
}
