import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  useDeleteContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsSlice';
import { selectVisibleContacts } from 'redux/contacts/selectors';
import { Button, ListItem } from './ContactList.styled';

const ContactList = () => {
  const { error, isLoading } = useFetchContactsQuery();
  const [deleteContact, result] = useDeleteContactMutation();

  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <>
      {error && <p>Something went wrong!</p>}
      {isLoading ? (
        <p>Contacts are loading...</p>
      ) : (
        <ul>
          {visibleContacts.map(({ id, name, phone }) => {
            return (
              <ListItem key={id}>
                {name}: {phone}
                <Button
                  onClick={() => deleteContact(id)}
                  disabled={result.isLoading}
                >
                  Delete
                </Button>
              </ListItem>
            );
          })}
        </ul>
      )}
    </>
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
