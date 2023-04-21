import React, { Component } from "react";
import { Item } from '../data.js';


class AddItem extends Component {
  constructor() {
    super();
    this.addItem = this.addItem.bind(this);
    this.newNameRef = React.createRef();
    this.newQuantityRef = React.createRef();
    this.newDailyDoseRef = React.createRef();

  }

  addItem(e) {
    const { items, onEdit } = this.props;
    const newName = this.newNameRef.current.value;
    const newQuantity = this.newQuantityRef.current.value;
    const newDailyDose = this.newDailyDoseRef.current.value;
    e.preventDefault();
    const updatedItems = items.concat(new Item(newName, newQuantity, newDailyDose));
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
                  maxlength="20"
                  required
                /></td>
              </tr>
              <tr>
                <td><label>Quantity: </label></td>
                <td><input 
                  id="newQuantity"
                  ref={this.newQuantityRef}
                  type="number"
                  size="1"
                  pattern="[0-9]"
                  required
                /></td>
              </tr>
              <tr>
                <td><label>Daily dose: </label></td>
                <td><input 
                  id="newDailyDose"
                  ref={this.newDailyDoseRef}
                  type="number"
                  size="1"
                  pattern="[0-9]"
                  required
                /></td>
              </tr>
              <tr>
                <button type="submit">Submit</button>
              </tr>
            </thead>
          </table>
        </form>
      </div>
    );
  }
}

export default AddItem;