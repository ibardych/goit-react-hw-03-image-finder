import styled from '@emotion/styled';
import { mediaSizes } from 'constants/media';
import { ishidden, transition } from 'helpers';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(0 0 0 / 0.8);
  z-index: 3;
  opacity: 1;
  ${transition('visible')};

  &.is-hidden {
    ${ishidden};

    & .inner {
      transform: scale(0.7);
      ${transition('transform')};
    }
  }

  & .window {
    position: fixed;
    top: 50%;
    left: 50%;
    width: 100%;
    max-width: calc(100% - 50px);
    transform: translateX(-50%) translateY(-50%);

    @media screen and (min-width: ${mediaSizes.tablet}) {
      max-width: calc(100% - 200px);
    }

    @media screen and (min-width: ${mediaSizes.desktop}) {
      max-width: calc(100% - 600px);
    }
  }

  & .inner {
    transform: scale(1);
    border-radius: 20px;
    box-shadow: 0px 0px 40px 10px #00cddc8f;
    background-color: #006b73;
    ${transition('transform')};
    padding: 3px;
    overflow: hidden;
    width: 100%;

    &::before {
      content: '';
      position: absolute;
      left: -50%;
      top: 20%;
      width: 100%;
      height: 30%;
      background: linear-gradient(0deg, transparent, #21f0ff);
      transform-origin: bottom right;
      animation: animate 6s linear infinite;
      opacity: 1;
      ${transition('opacity')};
    }

    @keyframes animate {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }

  & .close {
    position: fixed;
    z-index: 2;
    width: 20px;
    height: 20px;
    top: 14px;
    right: 14px;
    cursor: pointer;
    background-color: rgb(0 0 0 / 0);
    border: none;
    padding: 0;
    color: #ffffffd5;
    ${transition('opacity')};

    &:hover {
      opacity: 0.7;
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      width: 24px;
      height: 24px;
      top: 16px;
      right: 16px;
    }
  }

  & .container {
    padding: 10px;
    background: linear-gradient(
      120deg,
      rgb(28, 27, 35) 0%,
      rgb(10, 9, 16) 100%
    );
    width: 100%;
    position: relative;
    z-index: 1;
    border-radius: 18px;

    & .large-image {
      width: 100%;
      border-radius: 10px;
    }

    @media screen and (min-width: ${mediaSizes.tablet}) {
      padding: 10px;
    }
  }

  & .text {
    color: #fff;
    font-size: 30px;
    font-weight: 300;
    width: 100%;
  }
`;
