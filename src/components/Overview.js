import React, { Component } from 'react';
import EditButton from './EditButton';
import EditItem from './EditItem';

class Overview extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { 
      items, 
      editMode, 
      editItem,
      error,
      toggleEditMode, 
      toggleEditItem, 
      onEdit,
      onError 
      } = this.props;

    if (editMode) return (
      <div className="overview">
        <EditButton 
          editMode={editMode} 
          items={items} 
          toggleEditMode={toggleEditMode} 
          />  
        <br></br><br></br>
        <table>
          {items.map((item) => {
            if (editItem === item.id) return <EditItem 
              item={item} 
              items={items} 
              error={error}
              onEdit={onEdit} 
              onError={onError}
            />
            return (
            <thead className="overview-list-item" key={item.id}>
              <tr>
                <td>{item.name}</td>
                <td><button className="item-props-edit-button" onClick={() => toggleEditItem(item)}></button></td>
                <td><button className="item-delete-button">Delete</button></td>
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
              <tr className="overview-list-item" key={item.id}>
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