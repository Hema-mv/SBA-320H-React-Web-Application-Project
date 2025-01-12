import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Crypto = () => {
  const [cryptos, setCryptos] = useState([]);

  useEffect(() => {
    const fetchCryptos = async () => {
      try {
        const response = await axios.get(` https://financialmodelingprep.com/api/v3/symbol/available-cryptocurrencies?apikey=Y6SVioCOvDkJ5bWR4us5sD6uFNQ9Slef`);
        setCryptos(response.data);
      } catch (error) {
        console.error('Error fetching cryptos:', error);
      }
    };

    fetchCryptos();
  }, []);

  return (
    <div>
      <h2>Cryptocurrencies</h2>
      <ul>
        {cryptos.map((crypto) => (
          <li key={crypto.symbol}>
            <p>{crypto.name} ({crypto.symbol}) - ${crypto.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Crypto;
