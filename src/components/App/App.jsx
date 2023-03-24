import Copyright from 'components/Copyright/Copyright';
import Gallery from 'components/Gallery/Gallery';
import PopularQueries from 'components/PopularQueries/PopularQueries';
import Searchbar from 'components/Searchbar/Searchbar';
import { POPULAR_QUERIES } from 'constants';
import { Component } from 'react';
//import draw from 'constants/background';
//import PhoneBook from '../PhoneBook/PhoneBook';
import { MainContainer } from './App.styled';

class App extends Component {
  state = {
    query: '',
  };

  handleSearch = searchQuery => {
    const query = searchQuery.replace(/[&?=]/g, '').toLowerCase().trim();
    this.setState({ query });
  };

  render() {
    return (
      <>
        <MainContainer>
          <Searchbar
            onHandleSearch={this.handleSearch}
            searchQuery={this.state.query}
          />
          <PopularQueries
            queries={POPULAR_QUERIES}
            searchQuery={this.state.query}
            OnHandlePopularQuery={this.handleSearch}
          />
          <Gallery query={this.state.query} />
          <Copyright message="©2023 Made by Iurii Bardych" />
        </MainContainer>
      </>
    );
  }
}

export default App;
