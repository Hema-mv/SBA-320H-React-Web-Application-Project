// filepath: /c:/Per-Scholas/2024-RTT-61/code/Labs/SBA 320H-React Web Application Project/StockMarketDashboard/src/components/Dashboard.jsx
import React from 'react';
import { connect } from 'react-redux';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = ({ watchlist, alerts }) => {
  // Sample data for the chart
  const sampleData = [
    { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
    { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
    { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
    { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
    { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
    { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
    { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
  ];

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
      {/* <div className="chart-container">
        <h3>Sample Chart</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={sampleData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  watchlist: state.watchlist,
  alerts: state.alerts
});

export default connect(mapStateToProps)(Dashboard);