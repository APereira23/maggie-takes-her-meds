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
        <EditList items={items} />  
        <br>
        </br>
        <br>
        </br>
        <table>
          {items.map((item) => {
            return (
            <tr className="overview-list-item" key={uniqid()}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>{item.dailyDose} a day</td>
            </tr>
            );
          })}
        </table>
      </div>
    );
  }

}



export default Overview;