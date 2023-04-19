import React, { Component } from "react";

class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { editMode, toggleEditMode } = this.props;
    if (editMode) return (
      <button className="edit-close-button" onClick={() => toggleEditMode()}></button>
    );

    return (
      <button className="edit-open-button" onClick={() => toggleEditMode()}></button>
    );
  }
}

export default EditButton;