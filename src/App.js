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
      items: list.items,
      editMode: false
    }
    this.toggleEditMode = this.toggleEditMode.bind(this);
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    });
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Overview 
          editMode={this.state.editMode} 
          items={this.state.items} 
          toggleEditMode={this.toggleEditMode}
        />
        <Refill />
        <Footer />
      </div>
    );
  }
}

export default App;
