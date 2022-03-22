import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import StatisticsContext from './statistic-hooks';

ReactDOM.render(
  <React.StrictMode>
    <StatisticsContext >
      <App />
    </StatisticsContext >
  </React.StrictMode>,
  document.getElementById('root')
);
