import styled from '@emotion/styled';
import { Form } from 'formik';

export const Label = styled.label`
  display: inline-flex;
  flex-direction: column;
  gap: ${p => p.theme.space[2]}px;
  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[3]}px;
  }
`;

export const FormBox = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 400px;
  padding: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.black};
`;

export const Button = styled.button`
  cursor: pointer;
  border-radius: ${p => p.theme.radii.normal};
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: ${p => p.theme.space[2]}px;

  :hover {
    background-color: ${p => p.theme.colors.secondary};
    color: ${p => p.theme.colors.white};
  }
`;
