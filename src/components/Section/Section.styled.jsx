import styled from '@emotion/styled';

export const Part = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  :not(:last-child) {
    margin-bottom: 32px;
  }
`;

export const Title = styled.h2`
  font-weight: bold;
`;
