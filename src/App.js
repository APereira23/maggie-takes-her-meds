import React, { Component } from 'react';
import { Item } from './data.js';
import list from './data.js';
import Header from './components/Header';
import Overview from './components/Overview';
import RefillButton from './components/RefillButton';
import Footer from './components/Footer';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: list,
      editMode: false,
      editItem: '',
      error: '',
      newItemForm: false,
      refillForm: false
    }
    this.toggleEditMode = this.toggleEditMode.bind(this);
    this.toggleEditItem = this.toggleEditItem.bind(this);
    this.toggleNewItemForm = this.toggleNewItemForm.bind(this);
    this.toggleRefillForm = this.toggleRefillForm.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleEditError = this.handleEditError.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  //updates med counter everyday at 7a.m.
  //NOT FUNCTIONAL (only runs with component open)
  componentDidMount() {
    const now = new Date();
    const next7am = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + 1, // next day
      7, // 7am
      0, // minutes
      0 // seconds
    );
    const timeUntilNext7am = next7am - now;
    function preventNegativeNums(nums) {
      return (nums < 0) ? 0 : nums;
    }
    this.interval = setInterval(() => {
      const updatedItems = this.state.items.map((item) => {
        return new Item(
          item.name,
          preventNegativeNums(parseInt(item.quantity) - parseInt(item.dailyDose)),
          item.dailyDose
        );
      });
      this.setState({
        items: updatedItems  
      });
    }, timeUntilNext7am);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleEditMode() {
    this.setState({
      editMode: !this.state.editMode,
      editItem: '',
      error: '',
      newItemForm: false,
      refillForm: false
    })
  }


  toggleEditItem(target) {
    this.setState({
      editItem: target.id
    })
  }

  toggleNewItemForm() {
    this.setState({
      newItemForm: !this.state.newItemForm
    })
  }

  toggleRefillForm() {
    this.setState({
      refillForm: true
    })
  }
  
  handleEdit(updatedItems) {
    this.setState({
      items: updatedItems,
      editItem: '',
      error: '',
      newItemForm: false,
      refillForm: false
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
          newItemForm={this.state.newItemForm}
          refillForm={this.state.refillForm}
          toggleEditMode={this.toggleEditMode}
          toggleEditItem={this.toggleEditItem}
          toggleNewItemForm={this.toggleNewItemForm}
          onEdit={this.handleEdit}
          onError={this.handleEditError}
          onDelete={this.handleDelete}
        />
        <RefillButton toggleRefillForm={this.toggleRefillForm} />
        <Footer />
      </div>
    );
  }
}

export default App;
