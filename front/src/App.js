import React, { Component } from 'react';
import Cards from './components/Cards';
import NavBar from './components/NavBar'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Cards />
      </div>
    );
  }
}

export default App;
