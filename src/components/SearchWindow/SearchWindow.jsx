//redux store
import { useSelector } from 'react-redux';

//component
import Searchbar from '../Searchbar/Searchbar';

//styles
import styles from './SearchWindow.module.css';

//SearchWindow starts here
export default function SearchWindow({
  headerHeight = null,
  extraClass = undefined,
}) {
  const { isOpen } = useSelector((state) => state.searchWindow);

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
      <Searchbar />
    </div>
  );
}
