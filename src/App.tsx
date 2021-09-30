import React from 'react';
import './css/App.css';

import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
      <div className="App">
        <Header />
        <div className="card-list">
          <Card text="This is a test card" title="Test" />
        </div>
      </div>
  );
}

export default App;
