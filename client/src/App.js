import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import AppNavbar from './components/AppNavbar'
import List from './components/List'

function App() {
  return (
    <div className="App">
      <AppNavbar />
      <List />
    </div>
  );
}

export default App;
