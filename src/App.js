import React, { Component } from 'react';
import list from './list.json';
import Header from './components/Header';
import Overview from './components/Overview';
import Refill from './components/Refill';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: list.items
    }
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Overview items={this.state.items}/>
        <Refill />
        <Footer />
      </div>
    );
  }
}

export default App;
