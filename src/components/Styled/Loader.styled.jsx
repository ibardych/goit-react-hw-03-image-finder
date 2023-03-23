import styled from '@emotion/styled';
import { colors } from 'constants';

export const Loader = styled.div`
  display: block;
  width: 80px;
  height: 10px;
  border-radius: 50%;
  background-color: transparent;
  position: relative;
  box-sizing: border-box;

  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    height: 5px;
    width: 100%;
    border-radius: 10px;
    background-color: ${colors.color2};
    top: 50%;
    left: 0;
    animation: width 1s linear infinite;
  }

  &:after {
    animation-delay: -0.3s;
  }

  @keyframes width {
    0% {
      width: 0;
      left: 50%;
      opacity: 1;
    }
    90% {
      width: 100%;
      left: 0%;
      opacity: 0;
    }
    100% {
      opacity: 0;
    }
  }
`;
