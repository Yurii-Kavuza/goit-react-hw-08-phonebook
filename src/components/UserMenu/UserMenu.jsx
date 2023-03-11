import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Username, Wrapper } from './UserMenu.styled';
import { Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <Wrapper>
      <Username>Welcome, {user.name}</Username>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        colorScheme="orange"
        variant="solid"
      >
        Logout
      </Button>
    </Wrapper>
  );
};
