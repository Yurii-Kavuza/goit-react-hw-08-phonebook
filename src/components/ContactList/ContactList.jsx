import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Button, ListItem } from './ContactList.styled';

const ContactList = () => {
  const dispatch = useDispatch();
  const handleDeleteContact = id => dispatch(deleteContact(id));

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
     <ul>
        {visibleContacts.map(({ id, name, number }) => {
          return (
            <ListItem key={id}>
              {name}: {number}
              <Button onClick={()=>handleDeleteContact(id)}>Delete</Button>
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
      phone: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
