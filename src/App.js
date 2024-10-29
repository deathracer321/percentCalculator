import React from 'react';
import logo from './logo.svg';
import './App.css';
import FinalAmount from './FinalAmount';
import FinalPercent from './FinalPercent';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <FinalAmount />
                <FinalPercent />
            </header>
        </div>
    );
}

export default App;
