import PropTypes from 'prop-types';
import Form from 'components/Form/Form';
import { SearchbarStyled } from './Searchbar.styled';

const Searchbar = ({ onHandleSearch }) => {
  return (
    <>
      <SearchbarStyled>
        <Form onHandleSearch={onHandleSearch} />
      </SearchbarStyled>
    </>
  );
};

Searchbar.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
};

export default Searchbar;
