import './app.css';
import './assets/robots.txt';

import React from 'react';
import Root from './components/root';

import data from './data';

React.render(
  <div>
    <Root data={data} />
  </div>,
  document.body
);
