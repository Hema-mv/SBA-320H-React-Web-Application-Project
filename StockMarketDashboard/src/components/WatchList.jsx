import React from 'react';

const WatchList = ({ watchlist }) => {
  return (
    <div className="watchlist-container">
      <h2 >Watchlists</h2>
      <table>
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {watchlist.map((stock, index) => (
            <tr key={index}>
              <td>{stock.symbol}</td>
              <td>${stock.price}</td>
              <td>{stock.change}%</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WatchList;
