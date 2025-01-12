import React from 'react';
const handleAddToWatchlist = () => {
  if (stock) {
    addToWatchlist(stock);
  }
};

const StockList = ({ stocks, onSelect, addToWatchlist }) => {
  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol} className="stock-item">
            <div className="stock-info">
              <p>{stock.symbol} - ${stock.price}</p>
              <div className="stock-actions">
                <button onClick={() => onSelect(stock.symbol)}>View Details</button>
                {/* <button onClick={() => addToWatchlist(stock)}>Add to Watchlist</button> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
