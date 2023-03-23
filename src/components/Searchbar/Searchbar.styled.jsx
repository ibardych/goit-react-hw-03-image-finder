import styled from '@emotion/styled';

export const SearchbarStyled = styled.header`
  background: linear-gradient(
    120deg,
    rgba(59, 58, 75, 0.95) 0%,
    rgba(22, 20, 33, 0.95) 100%
  );
  backdrop-filter: blur(2px);
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
  position: sticky;
  top: 0;
  z-index: 1;
  box-shadow: 0 0 15px 0 rgb(0, 0, 0, 0.5);
`;
