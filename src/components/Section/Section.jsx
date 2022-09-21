import PropTypes from 'prop-types';
import { Part, Title } from './Section.styled';

const Section = ({ title, children }) => (
  <Part>
    <Title>{title}</Title>
    {children}
  </Part>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
