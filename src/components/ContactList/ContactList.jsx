import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/contacts/contactsSlice';
import { getContacts, getFilter } from 'redux/selectors';
import { Button, ListItem } from './ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = () => {   
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = filteredContacts();

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            {name}: {number}
            <Button onClick={() => dispatch(deleteContact(id))}>Delete</Button>
          </ListItem>
        );
      })}
    </ul>
  );
};

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
