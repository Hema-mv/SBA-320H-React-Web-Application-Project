import React from 'react';

const Dashboard = ({ watchlist, alerts }) => {

  console.log('Watchlist:', watchlist);
  console.log('Alerts:', alerts);
  return (
    <div className="dashboard">
      <h2>Watchlists</h2>
      <div className="watchlist-container">
      
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
      <div className="dashboard-section">
        <h3>Alerts</h3>
        <ul>
          {alerts.map((alert, index) => (
            <li key={index}>{alert}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
