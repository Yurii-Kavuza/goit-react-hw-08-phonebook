import React from 'react';
import PropTypes from 'prop-types';
import Section from './Section';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => { 
  return (
    <div>
      <Section title={'Phonebook'}>
        <ContactForm />
      </Section>
      <Section title={'Contacts'}>
        <Filter />
        <ContactList />
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
