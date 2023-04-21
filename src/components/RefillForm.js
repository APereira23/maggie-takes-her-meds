import React, { Component } from "react";
import { Item } from '../data.js';

class RefillForm extends  Component {
  constructor() {
    super();
    this.refill = this.refill.bind(this);
    this.refillNameRef = React.createRef();
    this.refillQuantityRef = React.createRef();
  }

  refill(e) {
    e.preventDefault();
    const { items, onEdit } = this.props;
    const refillName = this.refillNameRef.current.value;
    const refillQuantity = this.refillQuantityRef.current.value;
    const updatedItems = items.map((item) => {
      if (item.name === refillName) return new Item(
        item.name,
        parseInt(item.quantity) + parseInt(refillQuantity),
        item.dailyDose
      );
      return item;
    });
    onEdit(updatedItems);
  }

  render() {
    const { items } = this.props;
    return (
      <div className="refill-form-container">
        <form className="refill-form" onSubmit={this.refill}>
          <label>Refill which Med? </label>
          <br></br>
          <input list="meds" ref={this.refillNameRef} required />
          <datalist id="meds">
            {items.map((item) => {
              return <option value={item.name} key={item.id} />;
            })}
          </datalist>
          <br></br>
          <label>How many?</label> 
          <br></br>
          <input type="number" size="1" min="0" ref={this.refillQuantityRef} required />
          <br></br>
          <button type="submit">Confirm</button>
        </form>
      </div>
    );
  }
}

export default RefillForm;