import React, { useState } from 'react';
import axios from 'axios';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const StockSearch = ({ onSearch, addToWatchlist , onSelect}) => {
  const [query, setQuery] = useState('');
  const [stock, setStock] = useState(null);
  const [chartData, setChartData] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
  
    try {
      const response = await axios.get(`https://financialmodelingprep.com/api/v3/quote-short/${query}?apikey=Y6SVioCOvDkJ5bWR4us5sD6uFNQ9Slef`);
      const stockData = response.data[0];
      setStock(stockData);
      onSearch(response.data);

      const historicalResponse = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${query}?apikey=Y6SVioCOvDkJ5bWR4us5sD6uFNQ9Slef`);
      setChartData(historicalResponse.data.historical);

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
        <div className="stock-result">
          <p>{stock.symbol} - ${stock.price}</p>
          <div className="stock-actions">
            <button onClick={() => onSelect(stock.symbol)}>View Details</button>
            <button onClick={handleAddToWatchlist}>Add to Watchlist</button>
          </div>
        </div>
      )}
       <div style={{ width: '100%', height: 400 }}>
        {chartData.length > 0 ? (
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="close" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: '#8884d8' }}>
            <p>No chart data available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StockSearch;