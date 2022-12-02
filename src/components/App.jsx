import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const LS_KEY = 'contacts';

const App = () => {
  const contactsLS = JSON.parse(window.localStorage.getItem(LS_KEY));

  const [contacts, setContacts] = useState(() => { contactsLS ?? [] });
  const [filter, setFilter] = useState('');

  const filteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = dataId => {
    setContacts(contacts.filter(contact => contact.id !== dataId));
  };

  const onFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const formSubmitHandler = data => {
    data.id = nanoid();
    const containsNamee = contacts.find(contact => contact.name === data.name);
    if (containsNamee) {
      return alert(`${data.name} is already in contacts.`);
    }
    setContacts([...contacts, data]);
  };

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Section title={'Phonebook'}>
        <ContactForm onSubmit={formSubmitHandler} />
      </Section>
      <Section title={'Contacts'}>
        <Filter onFilter={onFilter} value={filter} />
        <ContactList
          contacts={filteredContacts()}
          onDeleteContact={deleteContact}
        />
      </Section>
    </div>
  );
};

App.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default App;
