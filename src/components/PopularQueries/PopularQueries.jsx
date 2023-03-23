import PropTypes from 'prop-types';
import { PopularQueriesStyled } from './PopularQueries.styled';

const PopularQueries = ({ queries, searchQuery, OnHandlePopularQuery }) => {
  return (
    <PopularQueriesStyled>
      <div className="title">Popular queries</div>
      {queries.map(query => (
        <div
          key={query}
          onClick={() => OnHandlePopularQuery(query)}
          className={`query ${query === searchQuery ? 'active' : ''}`}
        >
          {query}
        </div>
      ))}
    </PopularQueriesStyled>
  );
};

PopularQueries.propTypes = {
  queries: PropTypes.arrayOf(PropTypes.string).isRequired,
  searchQuery: PropTypes.string,
  OnHandlePopularQuery: PropTypes.func.isRequired,
};

export default PopularQueries;
