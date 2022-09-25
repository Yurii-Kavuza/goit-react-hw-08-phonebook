import styled from '@emotion/styled';

export const ListItem = styled.li`
  list-style: inside;
  padding-left: ${p => p.theme.space[5]}px;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]}px;
  }
`;

export const Button = styled.button`
  margin-left: ${p => p.theme.space[4]}px;
`;
