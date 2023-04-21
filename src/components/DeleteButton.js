import React, { Component } from 'react';

class DeleteButton extends Component {
  constructor(props) {
    super(props);
    this.delete = this.delete.bind(this);
  }

  delete() {
    const { target, items, onDelete } = this.props;
    const updatedItems = items.filter(item => item.id !== target.id);
    onDelete(updatedItems);
  }

  render() {
    return (
      <button className="item-delete-button" onClick={this.delete}></button>
    );
  }
}

export default DeleteButton;