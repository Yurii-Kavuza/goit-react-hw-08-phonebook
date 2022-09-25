import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import initialContacts from '../data/contacts.json';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends React.Component {
  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string,
  };

  state = {
    contacts: initialContacts,
    filter: '',
  };

  deleteContact = dataId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== dataId),
    }));
  };

  formSubmitHandler = data => {
    data.id = nanoid();
    const contacts = this.state.contacts;
    const containsNamee = contacts.find(contact => contact.name === data.name);
    if (containsNamee) {
      return alert(`${data.name} is already in contacts.`);
    }
    this.setState(prevState => ({
      contacts: [...prevState.contacts, data],
    }));
  };

  filteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  onFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const { filter } = this.state;
    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onFilter={this.onFilter} value={filter} />
          <ContactList
            contacts={this.filteredContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default App;
