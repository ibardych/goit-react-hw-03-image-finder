import styled from '@emotion/styled';
import { colors } from 'constants';
import { transition } from 'helpers';

export const PopularQueriesStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background-color: rgb(255, 255, 255, 0);
  margin-bottom: 50px;
  ${transition('background-color')}

  & .query {
    background-color: rgb(0, 0, 0, 0.1);
    padding: 4px 12px;
    border-radius: 20px;
    color: #cbcbcb;
    font-weight: 300;
    border-left: 1px solid ${colors.color2};
    border-right: 1px solid ${colors.color2};
    box-shadow: 0px 0px 8px -1px rgb(0, 255, 222, 0.3);
    cursor: pointer;
    ${transition('color', 'box-shadow', 'background-color')}

    &:hover {
      color: ${colors.color2};
      box-shadow: 0px 0px 10px 0px rgb(0, 255, 222, 1);
    }

    &.active {
      color: ${colors.color2};
    }
  }

  & .title {
    color: ${colors.color2};
  }
`;
