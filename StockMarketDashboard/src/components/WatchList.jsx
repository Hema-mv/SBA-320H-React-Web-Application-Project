import React from 'react';

const WatchList = ({ watchlist }) => {
  return (
    <div>
      <h2>Watchlist</h2>
      <ul>
        {watchlist.map((stock, index) => (
          <li key={index}>{stock.symbol} - ${stock.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
