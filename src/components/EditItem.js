import React, { Component } from 'react';
import { Item } from '../data.js';


class EditItem extends Component {
  constructor(props) {
    super(props);
    this.edit = this.edit.bind(this);
    this.editNameRef = React.createRef();
    this.editDoseRef = React.createRef();
    this.editTimeRef = React.createRef();

  }

  edit() {
    const { item, items, onEdit, onError } = this.props;
    const newName = this.editNameRef.current.value;
    let newDose = this.editDoseRef.current.value;
    let newTime = this.editTimeRef.current.value;

    if (newName === "") return onError("Error: name is empty");
    if (newName.length > 20) return onError("Error: 20 characters max");
    if (newTime.length > 20) return onError("Error: 20 characters max");
    if (newDose === "") newDose = 0;
    if (newTime === "") newTime = 0;
    
    const updatedItems = items.map((newItem) => {
      if (newItem.id === item.id) return new Item(newName, newDose, newTime);
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
            <td>How many:</td>
            <td>
              <input 
                id="editDose"
                ref={this.editDoseRef}
                type="number"
                size="1"
                min="0"
                defaultValue={item.Dose}
                required
              />
            </td>
          </tr>
          <tr>
            <td>When to take:</td>
            <td>
              <input 
                id="editDose"
                ref={this.editTimeRef}
                type="number"
                size="1"
                min="0"
                defaultValue={item.Time}
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