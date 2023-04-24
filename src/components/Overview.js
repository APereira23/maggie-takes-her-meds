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
    
    // Displays "Add new Item form"
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

    return (
      <div className="overview">
        <EditButton 
          editMode={editMode} 
          items={items} 
          toggleEditMode={toggleEditMode} 
        />
        <h2 className="edit-menu-header">
          My Stash
        </h2>
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
                <td>
                  <button className="item-props-edit-button" onClick={() => toggleEditItem(item)}></button>
                  <DeleteButton target={item} items={items} onDelete={onDelete} />
                </td>
              </tr>
              <tr>
                <td>How many:</td>
                <td>{item.dose}</td>
              </tr>
              <tr>
                <td>When to take:</td>
                <td>{item.time}</td>
              </tr>
            </thead>
            );
          })}
        </table>
      </div>
    );
  }

}

export default Overview;