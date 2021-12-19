import QuoteList from '../components/quotes/QuoteList';

const DATA_QUOTES = [
  { id: 'q1', author: 'Aza', text: 'Learning react is awesome!' },
  { id: 'q2', author: 'Adi', text: 'Learning react is fun!' },
];

const AllQuotes = () => {
  return <QuoteList quotes={DATA_QUOTES} />;
};

export default AllQuotes;
