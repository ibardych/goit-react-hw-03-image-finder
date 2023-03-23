import { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import { Input } from './Input.styled';
import { FormStyled } from './Form.styled';

const defaultState = {
  searchQuery: '',
};

class Form extends Component {
  state = { ...defaultState };

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
    );
  }
}

Form.propTypes = {
  onHandleSearch: PropTypes.func.isRequired,
};

export default Form;
