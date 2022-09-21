import React from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import initialContacts from '../data/contacts.json';
import Section from './Section/Section';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

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

  formSubmitHandler = data => {
    data.id = nanoid();
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
    return (
      <div>
        <Section title={'Phonebook'}>
          <ContactForm onSubmit={this.formSubmitHandler} />
        </Section>
        <Section title={'Contacts'}>
          <Filter onFilter={this.onFilter} value={this.state.filter} />
          <ContactList contacts={this.filteredContacts()} />
        </Section>
      </div>
    );
  }
}

export default App;
