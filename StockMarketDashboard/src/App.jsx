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
  // const [watchlist, setWatchlist] = useState([]);
  const [alerts, setAlerts] = useState([]);
  const [watchlist, setWatchlist] = useState([
    { symbol: 'AAPL', price: 150, change: 1.2 },
    { symbol: 'GOOGL', price: 2800, change: -0.5 },
    { symbol: 'AMZN', price: 3400, change: 0.8 },
    { symbol: 'MSFT', price: 299, change: 1.1 },
    { symbol: 'TSLA', price: 700, change: -2.3 },
    { symbol: 'FB', price: 350, change: 0.4 },
    { symbol: 'NFLX', price: 590, change: -1.0 },
    { symbol: 'NVDA', price: 220, change: 2.5 },
    { symbol: 'BABA', price: 160, change: -0.8 },
    { symbol: 'V', price: 230, change: 0.6 }
  ]);


  
  const handleSearch = (data) => {
    console.log('Search results:', data);
  };
  const handleSelect = (symbol) => {
    setSelectedStock(symbol);
    console.log('Selected stock:', symbol);
  };

  const addToWatchlist = (stock) => {
    setWatchlist([...watchlist, stock]);
  };

  const addAlert = (alert) => {
    setAlerts([...alerts, alert]);
  };

  return (
    <div className="app-container">
      <h2 className="header">Stock Market Dashboard</h2>
      <div className="main-content">
       
       
        <div className="right-column">
        <Dashboard watchlist={watchlist} alerts={alerts} />
        <Alerts addAlert={addAlert} />
        
        </div>
        <div className="left-column" >
        <StockSearch onSearch={handleSearch} 
        addToWatchlist={addToWatchlist} 
        onSelect={handleSelect} />
      {/* <StockList stocks={stocks} onSelect={setSelectedStock} /> */}
      <StockDetails symbol={selectedStock} />
          {/* <WatchList watchlist={watchlist} addToWatchlist={addToWatchlist} /> */}
         
        </div>
      </div>
      
      {/* <Crypto /> */}
      {/* <FinancialPlanning /> */}
    </div>
  );
};

export default App;