import { selectFilter } from 'redux/filter/selectors';

export const selectLoading = state => state.contacts.loading;

export const selectAllContacts = state => state.contacts.items;

export const selectVisibleContacts = state => {
  const contacts = selectAllContacts(state);
  const filter = selectFilter(state);
  const normalizedFilter = filter.toLowerCase();
  return contacts?.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
