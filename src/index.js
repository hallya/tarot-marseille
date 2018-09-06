import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter as Router } from 'react-router-dom'
import App from './App';

const rootPath = process.env.NODE_ENV === 'production' ? '/tarot-marseille' : '/';

ReactDOM.render(
  <Router basename={rootPath}>
    <App />
  </Router>, document.getElementById('root'));
