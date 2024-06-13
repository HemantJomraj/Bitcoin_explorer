import React from 'react';
import BlockHeight from './components/BlockHeight';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bitcoin Explorer</h1>
        <BlockHeight />
      </header>
    </div>
  );
};

export default App;
