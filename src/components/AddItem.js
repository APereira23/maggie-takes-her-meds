import React, { Component } from "react";
import { Item } from '../data.js';


class AddItem extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.newNameRef = React.createRef();
    this.newDoseRef = React.createRef();
    this.newTimeRef = React.createRef();

  }

  addItem(e) {
    const { items, onEdit } = this.props;
    const newName = this.newNameRef.current.value;
    const newDose = this.newDoseRef.current.value;
    const newTime = this.newTimeRef.current.value;
    e.preventDefault();
    const updatedItems = items.concat(new Item(newName, newDose, newTime));
    onEdit(updatedItems);
  }

  render() {
    return (
      <div className="add-item-container">
        <p>Add a new Med:</p>
        <form onSubmit={this.addItem}>
          <table>
            <thead>
              <tr>
                <td><label>Name: </label></td>
                <td><input 
                  id="newName"
                  ref={this.newNameRef}
                  type="text"
                  size="10"
                  maxlength="30"
                  required
                /></td>
              </tr>
              <tr>
                <td><label>Dose: </label></td>
                <td><input 
                  id="newDose"
                  ref={this.newDoseRef}
                  type="text"
                  size="5"
                  maxLength="30"
                  required
                /></td>
              </tr>
              <tr>
                <td><label>When to take: </label></td>
                <td><input 
                  id="newTime"
                  ref={this.newTimeRef}
                  type="text"
                  size="5"
                  maxLength="30"
                  required
                /></td>
              </tr>
              <tr>
                <button className="confirm-button" type="submit">Submit</button>
              </tr>
            </thead>
          </table>
        </form>
      </div>
    );
  }
}

export default AddItem;