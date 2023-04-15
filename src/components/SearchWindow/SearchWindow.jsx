//redux
import { useSelector, useDispatch } from 'react-redux';
import { closeSearchWindow } from '../../features/searchWindow/searchWindowSlice';

//component
import Searchbar from '../Searchbar/Searchbar';
import SearchResults from '../SearchResults/SearchResults';

//hooks
import useResetSearchForm from '../../hooks/useResetSearchForm';

//styles
import styles from './SearchWindow.module.css';

//SearchWindow starts here
export default function SearchWindow({
  headerHeight = null,
  extraClass = undefined,
}) {
  const { isOpen } = useSelector((state) => state.searchWindow);
  const dispatch = useDispatch();
  useResetSearchForm();

  // jsx template
  const customStyles = {
    marginTop: `${headerHeight}px`,
    height: `calc(100vh - ${headerHeight}px)`,
  };

  return (
    <div
      style={customStyles}
      className={`${styles['search-window-main']} ${
        isOpen ? styles['search-active'] : 'not-active'
      } ${extraClass ? extraClass.join(' ') : 'no-extra-class'}`}
    >
      <Searchbar
        closeFunction={() => {
          dispatch(closeSearchWindow());
        }}
      />

      <SearchResults />
    </div>
  );
}
