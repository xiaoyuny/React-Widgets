import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Clock from './tabs';

function Root() {
  return (
    <div>
      <Clock />
      <Tabs />
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded');
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});