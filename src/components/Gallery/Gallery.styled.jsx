import styled from '@emotion/styled';
import { colors } from 'constants';

export const GalleryContainer = styled.div`
  width: 1500px;
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & .idle {
    display: flex;
    justify-content: center;
  }

  & .pending {
    margin-bottom: 40px;
  }

  & .rejected {
    margin-top: 40px;
    color: #717171;
    border: 1px dashed ${colors.color1};
    padding: 10px;
    border-radius: 5px;
  }
`;

export const GalleryStyled = styled.ul`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;
