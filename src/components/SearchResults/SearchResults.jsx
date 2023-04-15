//redux
import { useSelector } from 'react-redux';

//components
import FoodCard from '../FoodCard/FoodCard';

//styles
import styles from './SearchResults.module.css';

//SearchResults starts here
export default function SearchResults({ extraClass = undefined }) {
  const { searchResults } = useSelector((state) => state.search);

  // jsx template
  return (
    <div
      className={`${styles['search-results-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {searchResults && searchResults.length === 0 && (
        <p className={styles['search-results-main__result-summary']}>
          Type to search
        </p>
      )}

      {searchResults && searchResults.length > 0 && (
        <>
          <p className={styles['search-results-main__result-summary']}>
            {searchResults.length} matches found
          </p>
          {searchResults.map((single) => {
            return <FoodCard key={single.id} cardData={single} />;
          })}
        </>
      )}
    </div>
  );
}
