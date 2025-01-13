// filepath: /c:/Per-Scholas/2024-RTT-61/code/Labs/SBA 320H-React Web Application Project/StockMarketDashboard/src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/store';
import StockSearch from './components/StockSearch';
import StockDetails from './components/StockDetails';
import Alerts from './components/Alerts';
import Dashboard from './components/Dashboard';
import './App.css';

const App = () => {
  const addAlert = (alert) => {
    store.dispatch({ type: 'ADD_ALERT', payload: alert });
  };

  const handleSelect = (symbol) => {
    store.dispatch({ type: 'SET_SELECTED_STOCK', payload: symbol });
  };

  return (
    <Provider store={store}>
      <div className="app-container">
        <h2 className="header">Stock Market Dashboard</h2>
        <div className="main-content">
          <div className="left-column">
            <StockSearch onSelect={handleSelect}/>
            <StockDetails />
          </div>
          <div className="right-column">
            <Dashboard />
            <Alerts addAlert={addAlert}/>
          </div>
        </div>
      </div>
    </Provider>
  );
};

export default App;