import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import { Input } from '@chakra-ui/react';
import { Label, FormContainer } from 'components/CommonStyles/CommonStyles';

const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const onFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FormContainer>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          value={filter}
          onChange={onFilter}
          autoComplete="off"
          variant="outline"
        />
      </Label>
    </FormContainer>
  );
};

Filter.propTypes = {
  onFilter: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
