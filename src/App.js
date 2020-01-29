import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Nav from './component/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
