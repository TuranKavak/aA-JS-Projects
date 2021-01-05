import React from 'react';
import ReactDOM from 'react-dom';

import Clock from './clock';
import Tabs from './tabs';
import Weather from './weather';
import AutoComplete from './autocomplete';

const panes = [
  { title: 'one', content: 'I am the first' },
  { title: 'two', content: 'Second pane here' },
  { title: 'three', content: 'Third pane here' },
  
];

const names = [
  'Abba',
  'Barney',
  'Barbara',
  'Jeff',
  'Jenny',
  'Sarah',
  'Sally',
  'Xander'
];

function Root() {
return (
  <div>
    <Clock/>
    <Weather/>
    <div className='interactive'>
      <Tabs panes={panes} />
      <AutoComplete names={names} />
    </div>
  </div>
);
}

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("main");
  ReactDOM.render(<Root/>, root);
});
