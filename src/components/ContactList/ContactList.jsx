import PropTypes from 'prop-types';
import {Button, ListItem } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => {
      return (
        <ListItem key={id}>
          {name}: {number}
          <Button onClick={() => onDeleteContact(id)}>Delete</Button>
        </ListItem>
      );
    })}
  </ul>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
