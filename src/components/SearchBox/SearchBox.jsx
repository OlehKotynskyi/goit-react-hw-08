import { useDispatch, useSelector } from 'react-redux';
import css from './SearchBox.module.css';
import filterContacts from '../../redux/contacts/filtersSlice';
import { selectFilters } from '../../redux/contacts/selectors';

const SearchBox = () => {
   const dispatch = useDispatch();
   const value = useSelector(selectFilters);
   const handleFilterItem = evt => dispatch(filterContacts.filterContacts(evt.target.value.trim()));

   return (
      <input
         type="text"
         value={value}
         onChange={handleFilterItem}
         placeholder="Search"
         className={css.search}
      />
   );
};

export default SearchBox;
