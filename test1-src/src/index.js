import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App';

render((
  <BrowserRouter basename="/test1">
    <App />
  </BrowserRouter>
), document.getElementById('root'));
