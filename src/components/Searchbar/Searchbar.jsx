import PropTypes from 'prop-types';
import { Component } from 'react';
import { SearchbarStyled } from './Searchbar.styled';
import { FormStyled } from './Form.styled';
import { Input } from './Input.styled';
import Button from './Button';

const defaultState = {
  searchQuery: '',
};

class Searchbar extends Component {
  state = { ...defaultState };

  componentDidUpdate(prevProps) {
    if (this.props.searchQuery !== prevProps.searchQuery) {
      this.setState({ searchQuery: this.props.searchQuery });
    }
  }

  submitHandler = e => {
    e.preventDefault();
    this.props.onHandleSearch(this.state.searchQuery);
  };

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <SearchbarStyled>
        <FormStyled onSubmit={this.submitHandler}>
          <Input
            name="searchQuery"
            type="text"
            value={this.state.searchQuery}
            placeholder="Search images and photos"
            onChange={this.handleInputChange}
          />
          <Button type="submit" />
        </FormStyled>
      </SearchbarStyled>
    );
  }
}

Searchbar.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
};

export default Searchbar;
