import React, { useState } from 'react';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Input, Button } from '@chakra-ui/react';
import { Form, Label } from '../CommonStyles/CommonStyles';
import { toast } from 'react-toastify';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        return setName(value);
      case 'number':
        return setNumber(value);
      default:
        return;
    }
  };

  const handleAddContact = e => {
    e.preventDefault();
    const isDuplicateName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isDuplicateNumber = contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );

    if (isDuplicateName) {
      console.log('Name is already in contacts');
      return toast.info(`${name} is already in contacts.`);
    }

    if (isDuplicateNumber) {
      return toast.info(`${number} is already in contacts.`);
    }

    dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Form onSubmit={handleAddContact} autoComplete="off">
      <Label>
        Name
        <Input
          onChange={handleChange}
          variant="outline"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          value={name}
        />
      </Label>
      <Label>
        Number
        <Input
          onChange={handleChange}
          variant="outline"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          value={number}
        />
      </Label>
      <Button type="submit" colorScheme="teal" variant="solid">
        Add contact
      </Button>
    </Form>
  );
};

export default ContactForm;
