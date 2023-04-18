import React, { Component } from "react";

class Refill extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="refill-button-container">
        <button className="refill-button">Refill</button>
      </div>
    );
  }
}

export default Refill;