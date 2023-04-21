import React, { Component } from 'react';
import { Item } from '../data.js';


class EditItem extends Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.editNameRef = React.createRef();
    this.editQuantityRef = React.createRef();
    this.editDailyDoseRef = React.createRef();

  }

  edit() {
    const { item, items, onEdit, onError } = this.props;
    const newName = this.editNameRef.current.value;
    let newQuantity = this.editQuantityRef.current.value;
    let newDailyDose = this.editDailyDoseRef.current.value;

    if (newName === "") return onError("Error: name is empty");
    if (newName.length > 20) return onError("Error: 20 characters max");
    if (newQuantity === "") newQuantity = 0;
    if (newDailyDose === "") newDailyDose = 0;
    
    const updatedItems = items.map((newItem) => {
      if (newItem.id === item.id) return new Item(newName, newQuantity, newDailyDose);
      return newItem;
    })
    onEdit(updatedItems);
  }

  render() {
    const { item, error } = this.props;
    return (
      <thead className="overview-list-item" key={item.id}>
          <p className="error-message">{error}</p>
          <tr>
            <td>
              <input 
                id="editName"
                ref={this.editNameRef}
                type="text"
                size="10"
                defaultValue={item.name}
                required
              />
            </td>
          </tr>
          <tr>
            <td>In Stash:</td>
            <td>
              <input 
                id="editQuantity"
                ref={this.editQuantityRef}
                type="number"
                size="1"
                min="0"
                defaultValue={item.quantity}
                required
              />
            </td>
          </tr>
          <tr>
            <td>Daily Dose:</td>
            <td>
              <input 
                id="editQuantity"
                ref={this.editDailyDoseRef}
                type="number"
                size="1"
                min="0"
                defaultValue={item.dailyDose}
                required
              />
            </td>
          </tr>
          <tr>
            <button onClick={this.edit}>Save</button>
          </tr>
        </thead>
    );
  }
}


export default EditItem;