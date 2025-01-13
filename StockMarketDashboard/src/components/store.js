// filepath: /c:/Per-Scholas/2024-RTT-61/code/Labs/SBA 320H-React Web Application Project/StockMarketDashboard/src/store.js
import { createStore, combineReducers } from 'redux';

// Initial state
const initialState = {
  stocks: [],
  symbol: null,
  watchlist: [
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
  ],
  alerts: []
};

// Reducers
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_STOCKS':
      return { ...state, stocks: action.payload };
    case 'SET_SELECTED_STOCK':
      return { ...state, symbol: action.payload };
    case 'ADD_TO_WATCHLIST':
      return { ...state, watchlist: [...state.watchlist, action.payload] };
    case 'ADD_ALERT':
      return { ...state, alerts: [...state.alerts, action.payload] };
    default:
      return state;
  }
};

const store = createStore(rootReducer);

export default store;