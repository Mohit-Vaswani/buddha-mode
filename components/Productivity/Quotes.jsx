import { useEffect, useState } from 'react';
import axios from 'axios';

const Quote = () => {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchQuote();
  }, []);

  const fetchQuote = async () => {
    setIsLoading(true); // Set loading to true before fetching a new quote
    try {
      const response = await axios.get('https://api.themotivate365.com/stoic-quote');
      const { author, quote } = response.data;
      setAuthor(author);
      setQuote(quote);
      setIsLoading(false); // Set loading to false when the quote is loaded
    } catch (error) {
      console.error('Error fetching quote:', error);
      setIsLoading(false); // Set loading to false in case of an error
    }
  };

  const handleButtonClick = () => {
    fetchQuote(); // Fetch a new quote when the button is clicked
  };

  return (
    <div className="w-full h-full flex flex-col p-10 mt-10 border relative">
      {isLoading ? (
        <p className="text-2xl font-mono">Loading...</p>
      ) : (
        <>
          <p className="text-2xl font-mono mb-8">{quote}</p>
          <p className="text-xl font-mono"> - {author}</p>
        </>
      )}

    </div>
  );
};

export default Quote;
