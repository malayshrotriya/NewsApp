import React, { Component } from 'react';
import CardGrid from './components/CardGrid'
import Header from './components/Header'
import './App.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <CardGrid></CardGrid>
      </div>
    )
  }
}

export default App;
