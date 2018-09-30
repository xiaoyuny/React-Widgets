import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './auto';

const content = ['private to-dos are here', 'work to-dos are here', 'family to-dos are here'];
const autolist = ['Abba', 'Barney', 'Barbara', 'Jeff', 'Jenny', 'Sarah', 'Sally'];

function Root() {
  return (
    <div>
      <Clock />
      <Weather />
      <div id="tabs-and-auto">
        <Tabs content={content} />
        <AutoComplete autolist={autolist} />
      </div>
    </div>
  )
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('page loaded');
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});