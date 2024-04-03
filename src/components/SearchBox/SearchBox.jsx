import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);
  console.log(filter);

  const onFilter = evt => {
    dispatch(changeFilter(evt.target.value));
  };

  return (
    <div className={css.searchBox}>
      <span>Find contacts by name</span>
      <input
        className={css.searchInput}
        type="text"
        name="filter"
        value={filter}
        onChange={onFilter}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
