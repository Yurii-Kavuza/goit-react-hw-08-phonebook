import PropTypes from 'prop-types';

const Filter = ({ onFilter, value }) => (
  <div>
    <p>Find contacts by name</p>
    <input type="text" name="filter" value={value} onChange={onFilter} />
  </div>
);

Filter.propTypes = {
  onFilter: PropTypes.func,
  value: PropTypes.string,
};

export default Filter;
