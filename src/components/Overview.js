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
        <br>
        </br>
        <br>
        </br>
        {items.map((item) => {
          return (
          <p className="overview-list-item" key={uniqid()}>
            {item.name}: {item.quantity} - {item.dailyDose} a day
          </p>
          );
        })}
      </div>
    );
  }

}



export default Overview;