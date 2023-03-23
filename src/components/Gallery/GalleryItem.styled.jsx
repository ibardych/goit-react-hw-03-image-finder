import styled from '@emotion/styled';
import { transition } from 'helpers';

export const GalleryItemStyled = styled.li`
  flex-basis: calc((100% - 3 * 20px) / 4);
  flex-grow: 0;
  flex-shrink: 0;
  overflow: hidden;
  border-radius: 7px;
  position: relative;
  box-shadow: 0px 1px 5px -2px rgb(0 0 0 / 0.25);
  background-color: rgb(255, 255, 255, 0.03);
  cursor: pointer;
  position: relative;
  padding: 2px;
  overflow: hidden;
  ${transition('transform', 'box-shadow')}

  @media screen and (max-width: 1500px) {
    flex-basis: calc((100% - 20px * 2) / 3);
  }

  @media screen and (max-width: 1200px) {
    flex-basis: calc((100% - 20px * 1) / 2);
  }

  @media screen and (max-width: 800px) {
    flex-basis: 100%;
  }

  &:hover {
    transform: scale(1.03);
    box-shadow: 0px 0px 150px 5px rgb(0, 255, 222, 1);
    z-index: 1;

    & .item {
      color: rgb(255, 255, 255, 0.8) !important;
    }
  }

  &::before {
    content: '';
    position: absolute;
    left: -50%;
    top: -50%;
    width: 200%;
    height: 200%;
    background: conic-gradient(
      #ff0066,
      rgb(0, 255, 222, 1),
      #ff0066,
      rgb(0, 255, 222, 1),
      #ff0066
    );
    transform-origin: center;
    animation: animate 6s linear infinite;
    opacity: 0;
    ${transition('opacity')};
  }

  &:hover::before {
    opacity: 1;
  }

  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  & .container {
    background-color: rgb(255, 255, 255, 0);
    border: none;
    outline: none;
    display: block;
    width: 100%;
    padding: 0;
    cursor: pointer;
    border-radius: 5px;
    overflow: hidden;
  }

  & .image-wrapper {
    overflow: hidden;
    position: relative;

    &::after {
      content: '';
      display: block;
      padding-top: 65%;
    }
  }

  & .image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & .stats {
    display: flex;
    gap: 10px;
    justify-content: space-evenly;
    padding: 22px 12px;
    position: relative;
    z-index: 1;
    background-color: rgb(31, 30, 43);

    & .item {
      text-align: center;
      color: rgb(255, 255, 255, 0.5);
      font-size: 14px;
      font-weight: 200;
      ${transition('color')};

      & b {
        display: inline-block;
        margin-bottom: 5px;
        font-weight: 500;
        display: block;
      }
    }
  }
`;
