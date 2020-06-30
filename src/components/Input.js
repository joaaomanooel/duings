import React from 'react';
import styled from 'styled-components/native';
import { colors } from '@/constants';

export const Label = styled.Text`
  color: ${colors.black()};
  font-weight: 500;
  font-size: 14px;
`;

export const Input = styled.TextInput`
  border-color: ${({ error }) => (error ? colors.red(0.5) : colors.black(0.1))};
  color: ${colors.black()};
  margin-bottom: 30px;
  border-radius: 10px;
  border-width: 1px;
  margin-top: 10px;
  font-size: 14px;
  padding: 15px;
`;

export default ({ label, ...props }) => {
  return (
    <>
      <Label>{label}</Label>
      <Input {...props} />
    </>
  );
};
