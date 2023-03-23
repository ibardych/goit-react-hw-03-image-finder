import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const Input = styled.input`
  border-radius: 0px;
  border: 0;
  outline: none;
  padding: 8px 36px 8px 2px;
  font-size: 16px;
  width: 250px;
  max-width: 100%;
  background-color: rgb(0, 0, 0, 0);
  border-bottom: 1px solid #555;
  color: #fff;
  ${transition('width', 'border-bottom')}

  &::placeholder {
    color: gray;
  }

  &:not(:placeholder-shown),
  &:focus {
    width: 300px;
    border-bottom: 1px solid ${colors.color2};
  }
`;
