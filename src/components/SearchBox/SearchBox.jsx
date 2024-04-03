import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectNameFilter } from '../../redux/filtersSlice';
import css from './SearchBox.module.css';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  const handleFilterChange = filter => dispatch(changeFilter(filter));
  return (
    <div className={css.searchBox}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        name="filter"
        value={filter}
        onChange={evt => handleFilterChange(evt.target.value)}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
