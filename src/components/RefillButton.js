import React, { Component } from "react";

class RefillButton extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    const { toggleRefillForm } = this.props;
    toggleRefillForm();
    }
  
  render() {
    return (
      <div className="refill-button-container">
        <button className="refill-button" onClick={this.toggle}>Refill</button>
      </div>
    );
  }
}

export default RefillButton;