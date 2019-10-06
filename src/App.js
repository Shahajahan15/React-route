import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyRoute from './components/MyRoute';
import MyNavigation from './components/MyNavigation';
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavigation></MyNavigation>
        <MyRoute></MyRoute>
      </BrowserRouter>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
