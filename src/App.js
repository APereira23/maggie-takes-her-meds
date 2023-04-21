import React, { Component } from 'react';
import list from './data.js';
import Header from './components/Header';
import Overview from './components/Overview';
import Refill from './components/Refill';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: list,
      editMode: false,
      editItem: false
    }
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.toggleEditItem = this.toggleEditItem.bind(this);
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode
    })
  }

  toggleEditItem() {
    this.setState({
      editItem: !this.state.editItem
    })
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Overview 
          editMode={this.state.editMode} 
          editItem={this.state.editItem}
          items={this.state.items} 
          toggleEditMode={this.toggleEditMode}
          toggleEditItem={this.toggleEditItem}
        />
        <Refill />
        <Footer />
      </div>
    );
  }
}

export default App;
