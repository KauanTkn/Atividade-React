import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Letreiro from './letreiro';
import Relogio from './relogio';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>

    <Relogio />

    <Letreiro />
  </>
);