import React, { useState } from 'react';
import axios from 'axios';

const StockSearch = ({ onSearch, addToWatchlist }) => {
  const [query, setQuery] = useState('');
  const [stock, setStock] = useState(null);

  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/${query}?apikey=Y6SVioCOvDkJ5bWR4us5sD6uFNQ9Slef`);
      const stockData = response.data[0];
      setStock(stockData);
      onSearch(response.data);
    } catch (error) {
      console.error('Error fetching stocks:', error);
    }
  };

  const handleAddToWatchlist = () => {
    if (stock) {
      addToWatchlist(stock);
    }
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for stocks..."
        />
        <button type="submit">Search</button>
      </form>
      {stock && (
        <div>
          <p>{stock.symbol} - ${stock.price}</p>
          <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
        </div>
      )}
    </div>
  );
};

export default StockSearch;