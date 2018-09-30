import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';

const content = ['private to-dos are here', 'work to-dos are here', 'family to-dos are here'];

function Root() {
  return (
    <div>
      <Clock />
      <div id="tabs-and-auto">
        <Tabs content={content} />
      </div>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded');
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});