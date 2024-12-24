import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StockDetails = ({ symbol }) => {
  const [details, setDetails] = useState(null);

  useEffect(() => {
    const fetchStockDetails = async () => {
      try {
        const response = await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}?apikey=Y6SVioCOvDkJ5bWR4us5sD6uFNQ9Slef`);
        setDetails(response.data[0]);
      } catch (error) {
        console.error('Error fetching stock details:', error);
      }
    };

    if (symbol) {
      fetchStockDetails();
    }
  }, [symbol]);

  return (
    <div>
      {details ? (
        <div>
          <h2>{details.companyName}</h2>
          <p>Price: ${details.price}</p>
          <p>Industry: {details.industry}</p>
          <p>Website: <a href={details.website} target="_blank" rel="noopener noreferrer">{details.website}</a></p>
        </div>
      ) : (
        <p>Select a stock to view details.</p>
      )}
    </div>
  );
};

export default StockDetails;
