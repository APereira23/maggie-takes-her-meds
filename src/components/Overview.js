import React, { Component } from 'react';
import EditButton from './EditButton';
import uniqid from 'uniqid';

class Overview extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { items, editMode, toggleEditMode } = this.props;
    if (editMode) return (
      <div className="overview">
        <EditButton editMode={editMode} items={items} toggleEditMode={toggleEditMode} />  
        <br></br><br></br>
        <table>
          {items.map((item) => {
            return (
            <thead className="overview-list-item" key={uniqid()}>
              <tr>
                <td>{item.name}</td>
                <td><button className="text-edit-button"></button></td>
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
          })}
        </table>
      </div>
    );
    return (
      <div className="overview">
        <EditButton editMode={editMode} items={items} toggleEditMode={toggleEditMode}/>  
        <br></br>
        <h2 className="edit-menu-header">
          My Stash
        </h2>
        <table>
          <thead>
            {items.map((item) => {
              return (
              <tr className="overview-list-item" key={uniqid()}>
                <td>{item.name}</td>
                <td>{item.quantity}un</td>
              </tr>
              );
            })}
          </thead>
        </table>
      </div>
    );
  }

}

export default Overview;