import React, { useState } from 'react';
import StockSearch from './components/StockSearch';
import StockList from './components/StockList';
import StockDetails from './components/StockDetails';
import WatchList from './components/WatchList';
import Alerts from './components/Alerts';
import Crypto from './components/Crypto';
import FinancialPlanning from './components/FinancialPlanning';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const [stocks, setStocks] = useState([]);
  const [selectedStock, setSelectedStock] = useState(null);
  const [watchlist, setWatchlist] = useState([]);
  const [alerts, setAlerts] = useState([]);

  const addToWatchlist = (stock) => {
    setWatchlist([...watchlist, stock]);
  };

  const addAlert = (alert) => {
    setAlerts([...alerts, alert]);
  };

  return (
    <div className="app-container">
      <h1>Stock Market Dashboard</h1>
      <div className="main-content">
        <div className="left-column">
        <StockSearch onSearch={setStocks} addToWatchlist={addToWatchlist} />
      <StockList stocks={stocks} onSelect={setSelectedStock} />
      <StockDetails symbol={selectedStock} />
          {/* <WatchList watchlist={watchlist} addToWatchlist={addToWatchlist} /> */}
         
        </div>
        <div lassName="middle-column"> 
      
        </div>
        <div className="right-column">
        <Dashboard watchlist={watchlist} alerts={alerts} />
        <Alerts addAlert={addAlert} />
        
        </div>
      </div>
      
      <Crypto />
      <FinancialPlanning />
    </div>
  );
};

export default App;