import React, { Component } from 'react';
import EditButton from './EditButton';
import DeleteButton from './DeleteButton';
import EditItem from './EditItem';
import AddItem from './AddItem';


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
      newItemForm,
      toggleEditMode, 
      toggleEditItem,
      toggleNewItemForm,
      onEdit,
      onError,
      onDelete,
      } = this.props;
    if (newItemForm) return (
      <div className="overview">
        <EditButton 
          editMode={editMode} 
          items={items} 
          toggleEditMode={toggleEditMode} 
        />
        <AddItem items={items} onEdit={onEdit} />
      </div>
    );
    if (editMode) return (
      <div className="overview">
        <EditButton 
          editMode={editMode} 
          items={items} 
          toggleEditMode={toggleEditMode} 
        />
        <br></br><br></br>
        <button onClick={toggleNewItemForm}>Add New Item</button>
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
                <td className="item-header">{item.name}</td>
                <td><button className="item-props-edit-button" onClick={() => toggleEditItem(item)}></button></td>
                <td><DeleteButton target={item} items={items} onDelete={onDelete} /></td>
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