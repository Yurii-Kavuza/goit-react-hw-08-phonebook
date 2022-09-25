import PropTypes from 'prop-types';
import { Label } from 'components/ContactForm/ContactForm.styled';

const Filter = ({ onFilter, value }) => (
  <div>
    <Label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onFilter} />
    </Label>
  </div>
);

Filter.propTypes = {
  onFilter: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
