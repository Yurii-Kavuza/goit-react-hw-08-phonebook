import React, { Component } from 'react';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Button, Label, FormBox } from './ContactForm.styled';

const initialValues = { name: '', number: '' };

class ContactForm extends Component {
  schema = yup.object().shape({
    name: yup.string().required(),
    number: yup.number().required(),
  });

  initialValues = { name: '', number: '' };
  handleSubmit = (values, { resetForm }) => {
    this.props.onSubmit(values);
    resetForm();
  };

  render() {
    return (
      <Formik
        initialValues={this.initialValues}
        onSubmit={this.handleSubmit}
        validationSchema={this.schema}
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
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <ErrorMessage name="number" />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormBox>
      </Formik>
    );
  }
}

export default ContactForm;
