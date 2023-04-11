//components
import FoodCard from '../FoodCard/FoodCard';

//styles
import styles from './SearchResults.module.css';

//SearchResults starts here
export default function SearchResults({
  results = [],
  extraClass = undefined,
}) {
  // jsx template
  return (
    <div
      className={`${styles['search-results-main']} ${
        extraClass ? extraClass.join(' ') : 'no-extra-class'
      }`}
    >
      {results.map((single) => {
        return <FoodCard />;
      })}
    </div>
  );
}
