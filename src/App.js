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
      editItem: '',
      error: ''
    }
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.toggleEditItem = this.toggleEditItem.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditError = this.handleEditError.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode,
      editItem: '',
      error: ''
    })
  }


  toggleEditItem(target) {
    this.setState({
      editItem: target.id
    })
  }
  
  handleEdit(updatedItems) {
    this.setState({
      items: updatedItems,
      editItem: '',
      error: ''
    })
  }

  handleEditError(message) {
    this.setState({
      error: message
    })
  }

  handleDelete(updatedItems) {
    this.setState({
      items: updatedItems
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
          error={this.state.error}
          toggleEditMode={this.toggleEditMode}
          toggleEditItem={this.toggleEditItem}
          onEdit={this.handleEdit}
          onError={this.handleEditError}
          onDelete={this.handleDelete}
        />
        <Refill />
        <Footer />
      </div>
    );
  }
}

export default App;
