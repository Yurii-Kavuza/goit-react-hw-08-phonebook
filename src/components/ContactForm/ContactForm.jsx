import React from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, Label, FormBox } from './ContactForm.styled';
import { useAddContactMutation, useFetchContactsQuery } from 'redux/contacts/contactsSlice';

const ContactForm = () => {
  const schema = yup.object().shape({
    name: yup.string().required(),
    phone: yup.number().required(),
  });

  const { data : contacts} = useFetchContactsQuery();
  const [ addContact] = useAddContactMutation();

  const initialValues = { name: '', phone: '' };
  const handleAddContact = async (values, { resetForm }) => {
    const { name, phone } = values;
    const isDuplicateName = contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    const isDuplicateNumber = contacts.find(
      contact => contact.phone.toLowerCase() === phone.toLowerCase()
    );

    if (isDuplicateName) {
      return alert(`${name} is already in contacts.`);
    }

    if (isDuplicateNumber) {
      return alert(`${phone} is already in contacts.`);
    }

    console.log(`Name is ${name} and phone number is ${phone}`);
    await addContact({ name, phone });
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
            name="phone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <ErrorMessage name="phone" />
        </Label>
        <Button type="submit">Add contact</Button>
      </FormBox>
    </Formik>
  );
};

export default ContactForm;
