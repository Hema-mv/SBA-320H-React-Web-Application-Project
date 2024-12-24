import React from 'react';

const Dashboard = ({ watchlist, alerts }) => {

  console.log('Watchlist:', watchlist);
  console.log('Alerts:', alerts);
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="dashboard-section">
        <h3>Watchlist</h3>
        <ul>
          {watchlist.map((stock, index) => (
            <li key={index}>{stock.symbol} - ${stock.price}</li>
          ))}
        </ul>
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
