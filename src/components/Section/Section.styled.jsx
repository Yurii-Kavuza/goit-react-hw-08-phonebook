import styled from '@emotion/styled';

export const Part = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[5]}px;
  }
`;

export const Title = styled.h2``;
