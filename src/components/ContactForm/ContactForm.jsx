import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, Label, FormBox } from './ContactForm.styled';
import { addContact } from 'redux/contacts/operations';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from 'redux/contacts/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';

const ContactForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
  });

  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  const initialValues = { name: '', number: '' };
  const handleAddContact = async (values, { resetForm }) => {
    const { name, number } = values;
    const isDuplicateName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isDuplicateNumber = contacts.find(
      contact => contact.number.toLowerCase() === number.toLowerCase()
    );

    if (isDuplicateName) {
      return alert(`${name} is already in contacts.`);
    }

    if (isDuplicateNumber) {
      return alert(`${number} is already in contacts.`);
    }

    console.log(`Name is ${name} and number number is ${number}`);
    await dispatch(addContact({ name, number }));
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleAddContact}
      validationSchema={schema}
    >
      <FormBox>
        <Label>
          Name
          <Field
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ErrorMessage name="name" />
        </Label>
        <Label>
          Number
          <Field
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="number" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
};

export default ContactForm;
