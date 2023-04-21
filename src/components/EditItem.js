import React, { Component } from 'react';
import uniqid from 'uniqid';


class EditItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, toggleEditItem } = this.props;
    return (
      <thead className="overview-list-item" key={uniqid()}>
        <tr>
          <td>{item.name} is being edited</td>
          <td><button className="item-props-edit-button" onClick={() => toggleEditItem()}></button></td>
        </tr>
        <tr>
          <td>In Stash:</td>
          <td>{item.quantity}</td>
        </tr>
        <tr>
          <td>Daily Dose:</td>
          <td>{item.dailyDose}</td>
        </tr>
      </thead>
    );
  }

}


export default EditItem;