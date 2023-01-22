import PropTypes from 'prop-types';
import { Label } from 'components/ContactForm/ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filter/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const onFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <div>
      <Label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
          autoComplete="off"
        />
      </Label>
    </div>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
