# Stock Market Dashboard

## Overview

The Stock Market Dashboard is a web application that allows users to search for stocks, view stock details, add stocks to a watchlist, and view alerts. The application also includes a dashboard with a default chart grid to visualize stock data.

## Features

- **Stock Search**: Search for stocks by symbol and view their details.
- **Watchlist**: Add stocks to a watchlist and view the list of stocks with their prices and changes.
- **Alerts**: View alerts related to stocks.
- **Dashboard**: View a default chart grid with sample data.


## Installation

1. Clone the repository:
   ```sh
2. git clone https://github.com/your-username/stock-market-dashboard.git

   Navigate to the project directory:

Install the dependencies:
npm install --save-dev vite
npm install axios
npm install react
npm install react-dom
npm install react-router
npm install recharts
npm install styled-components
Usage
Start the development server:
npm run dev
Open your browser and navigate to http://localhost:5050 to view the application.

Components
App
The main component that renders the entire application. It includes the following components:

StockSearch: Allows users to search for stocks and view their details.
StockDetails: Displays detailed information about a selected stock.
WatchList: Displays the list of stocks added to the watchlist.
Dashboard: Displays the default chart grid with sample data.
Alerts: Displays alerts related to stocks.
StockSearch
Allows users to search for stocks by symbol and view their details. Users can also add stocks to the watchlist.

StockDetails
Displays detailed information about a selected stock.

WatchList
Displays the list of stocks added to the watchlist, including their symbols, prices, and changes.

Dashboard
Displays the default chart grid with sample data.

Alerts
Displays alerts related to stocks.