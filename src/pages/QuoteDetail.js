import { Route } from 'react-router-dom';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { Fragment } from 'react/cjs/react.production.min';
import Comments from '../components/comments/Comments';
import HighlightedQuote from '../components/quotes/HighlightedQuote';

const DATA_QUOTES = [
  { id: 'q1', author: 'Aza', text: 'Learning react is awesome!' },
  { id: 'q2', author: 'Adi', text: 'Learning react is fun!' },
];

const QuoteDetail = () => {
  const params = useParams();

  const quote = DATA_QUOTES.find((quote) => quote.id === params.quoteId);

  if (!quote) {
    return <p>not quote</p>;
  }
  return (
    <Fragment>
      <h1>The detail quote</h1>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
