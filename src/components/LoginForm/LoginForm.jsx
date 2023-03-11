import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Flex, Input, Button } from '@chakra-ui/react';
import { Form, Label } from '../CommonStyles/CommonStyles';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          Email
          <Input type="email" name="email" variant="outline" />
        </Label>
        <Label>
          Password
          <Input type="password" name="password" variant="outline" />
        </Label>
        <Button type="submit" colorScheme="teal" variant="solid">
          Log In
        </Button>
      </Form>
    </Flex>
  );
};
