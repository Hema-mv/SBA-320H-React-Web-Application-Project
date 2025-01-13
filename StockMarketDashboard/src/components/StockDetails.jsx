import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

const StockDetails = ({ symbol }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchStockDetails = async () => {
      if (symbol) {
        try {
          const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=Y6SVioCOvDkJ5bWR4us5sD6uFNQ9Slef`);
          setDetails(response.data[0]);
        } catch (error) {
          console.error('Error fetching stock details:', error);
        }
      }
    };

    fetchStockDetails();
  }, [symbol]);

  if (!symbol) {
    return <div>Select a stock to view details</div>;
  }

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="stock-details">
      <h2>{details.companyName} ({details.symbol})</h2>
      <p>Price: ${details.price}</p>
      <p>Change: {details.changesPercentage}%</p>
      <p>Industry: {details.industry}</p>
          <p>Website: <a href={details.website} target="_blank" rel="noopener noreferrer">{details.website}</a></p>
      
      {/* Add more details as needed */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  symbol: state.symbol
});

export default connect(mapStateToProps)(StockDetails);