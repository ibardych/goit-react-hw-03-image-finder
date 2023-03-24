import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const ButtonStyled = styled.button`
  position: absolute;
  right: 0px;
  top: 0px;
  height: 100%;
  width: 36px;
  border-radius: 3px;
  border: 0;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255, 0);
  cursor: pointer;
  ${transition('background-color')}

  &:hover svg {
    fill: ${colors.color2};
  }

  & svg {
    fill: #ccc;
    width: 20px;
    height: 20px;
    ${transition('fill')}
  }
`;
