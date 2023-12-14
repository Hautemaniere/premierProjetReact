import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CompByeXo from './composant/newcomp'
import ExempleCondition from './exo29/composant29';
import exo30 from './exo30/composant30';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

  {/* <App/> */}
  {/* <CompByeXo couleur={'red'}/> */}
  {/* <ExempleCondition/> */}
  {exo30()}

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
