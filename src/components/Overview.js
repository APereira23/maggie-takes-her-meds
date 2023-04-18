import React, { Component } from 'react';
import EditList from './EditList';
import uniqid from 'uniqid';

class Overview extends Component {
  constructor(props) {
    super(props);
  };

  render() {
    const { items } = this.props;
    return (
      <div className="overview">
        <EditList />        
        {items.map((item) => {
          return (
          <li className="overview-list-item" key={uniqid()}>
            {item.name}: {item.quantity} - {item.dailyDose} a day
          </li>
          );
        })}
      </div>
    );
  }

}



export default Overview;