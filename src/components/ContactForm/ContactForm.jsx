import React from 'react';
import { addContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts } from 'redux/contacts/selectors';
import { Input, Button } from '@chakra-ui/react';
import { Form, Label } from '../CommonStyles/CommonStyles';

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectAllContacts);

  // const initialValues = { name: '', number: '' };
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
    <>
      <Form onSubmit={handleAddContact} autoComplete="off">
        <Label>
          Name
          <Input
            variant="outline"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </Label>
        <Label>
          Number
          <Input
            variant="outline"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </Label>
        <Button type="submit" colorScheme="teal" variant="solid">
          Add contact
        </Button>
      </Form>
      {/* <Formik
        initialValues={initialValues}
        onSubmit={handleAddContact}
        validationSchema={schema}
      >
        <Flex direction="column" width="400px" gap="15px">
          <Label>
            Name
            <Field
              as={Input}
              variant="outline"
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
              as={Input}
              variant="outline"
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Number number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" />
          </Label>
          <Button type="submit" colorScheme="teal" variant="solid">
            Add contact
          </Button>
        </Flex>
      </Formik> */}
    </>
  );
};

export default ContactForm;
