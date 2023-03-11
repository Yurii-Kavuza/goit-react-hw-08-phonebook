import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Flex, Input, Button } from '@chakra-ui/react';
import { Form, Label } from '../CommonStyles/CommonStyles';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Flex justify="center">
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Label>
          Username
          <Input type="text" name="name" variant="outline" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" variant="outline" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" variant="outline" />
        </Label>
        <Button type="submit" colorScheme="teal" variant="solid">
          Register
        </Button>
      </Form>
    </Flex>
  );
};
