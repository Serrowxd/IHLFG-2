import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Dashboard from './components/Dashboard.js';

function App() {
  return (
    <div className="global-wrapper">
      <Dashboard />
    </div>
  );
}

export default App;
