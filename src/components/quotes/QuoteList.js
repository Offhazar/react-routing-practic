import { Fragment } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import QuoteItem from './QuoteItem';
import classes from './QuoteList.module.css';

const sortQuotes = (quotes, ascending) => {
  return quotes.sort((quoteA, quoteB) => {
    if (ascending) {
      return quoteA.id > quoteB.id ? 1 : -1;
    } else {
      return quoteA.id < quoteB.id ? 1 : -1;
    }
  });
};

const QuoteList = (props) => {
  const history = useHistory();

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const isSortingAsconding = queryParams.get('sort') === 'asc';

  const sorteQuotes = sortQuotes(props.quotes, isSortingAsconding);
  const changeSortingHandker = () => {
    history.push({
      pathname: location.pathname,
      search: `?sort=${isSortingAsconding ? 'desk' : 'asc'}`,
    });
    // history.push(
    //   `${location.pathname}?sort=${isSortingAsconding ? 'desk' : 'asc'}`
    // );
  };
  return (
    <Fragment>
      <div className={classes.sorting}>
        <button onClick={changeSortingHandker}>
          Sort {isSortingAsconding ? 'Descending' : 'Ascending'}
        </button>
      </div>
      <ul className={classes.list}>
        {sorteQuotes.map((quote) => (
          <QuoteItem
            key={quote.id}
            id={quote.id}
            author={quote.author}
            text={quote.text}
          />
        ))}
      </ul>
    </Fragment>
  );
};

export default QuoteList;
