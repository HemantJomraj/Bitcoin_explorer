import React from 'react';
import MarketPrice from './components/MarketPrice';
import TransactionCount from './components/TransactionCount';
import HashRate from './components/HashRate';
import BlockHeight from './components/BlockHeight';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Current Block Height</h1>
                <BlockHeight />
                <h2>Market Price</h2>
                <MarketPrice />
                <h2>Transaction Count</h2>
                <TransactionCount />
                <h2>Hash Rate</h2>
                <HashRate />
            </header>
        </div>
    );
}

export default App;
