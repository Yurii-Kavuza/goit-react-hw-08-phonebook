import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: inside;
  padding-left: 16px;
  :not(:last-child) {
    margin-bottom: 8px;
  }
  :nth-of-type(2n) {
    background-color: #f3f6f9;
  }
`;
