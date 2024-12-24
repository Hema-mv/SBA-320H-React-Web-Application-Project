import React from 'react';

const StockList = ({ stocks, onSelect }) => {
  return (
    <div>
      <h2>Stock List</h2>
      <ul>
        {stocks.map((stock) => (
          <li key={stock.symbol}>
            <p>{stock.symbol} - ${stock.price}</p>
            <button onClick={() => onSelect(stock.symbol)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StockList;
