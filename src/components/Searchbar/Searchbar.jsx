//redux
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearchTerm,
  searchForFoodItems,
} from '../../features/search/searchSlice';

//component
import SearchIcon from '../SearchIcon/SearchIcon';

//styles
import styles from './Searchbar.module.css';

export default function Searchbar({
  extraClass = undefined,
  closeFunction = null,
}) {
  const { searchTerm } = useSelector((state) => state.search);
  const dispatch = useDispatch();

  return (
    <div
      className={`${styles['searchbar-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      <form className={styles['searchbar-main__form']}>
        <label className={styles['searchbar-main__form__label']}>
          <SearchIcon
            primaryColor={false}
            extraClass={[
              styles['searchbar-main__form__label__search-icon-container'],
            ]}
          />
          <input
            className={styles['searchbar-main__form__label__input']}
            type="text"
            value={searchTerm}
            placeholder={'Search'}
            onChange={(e) => {
              dispatch(setSearchTerm(e.target.value));
              dispatch(searchForFoodItems());
            }}
          />
          <input type="submit" hidden />
        </label>
      </form>

      <button
        onClick={closeFunction}
        className={styles['searchbar-main__close-button']}
      >
        Close
      </button>
    </div>
  );
}
