import React, { Component } from "react";

class RefillForm extends  Component {
  constructor() {
    super();

  }

  render() {
    const { items } = this.props;
    return (
      <div className="refill-form-container">
        <form>
          <input list="meds" />
          <datalist id="meds">
            {items.map((item) => {
              return <option value={item.name} key={item.id} />;
            })}
          </datalist>   
        </form>
      </div>
    );
  }
}

export default RefillForm;