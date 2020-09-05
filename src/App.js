import React, { Component } from 'react';
import CardGrid from './components/CardGrid'
import SearchStory from './components/SearchStory'

class App extends Component {
  render() {
    return (
      <div>
        <h1>Navigation Bar</h1>
        <SearchStory></SearchStory>
        <CardGrid></CardGrid>
      </div>
    )
  }
}

export default App;
