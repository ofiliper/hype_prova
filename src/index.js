import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/App.css';

import Names from './api/Names';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Home from './screen/Home';
// import reportWebVitals from './reportWebVitals';

import Rota from './rout/Rotas';

ReactDOM.render(
  <Rota />,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// reportWebVitals();
