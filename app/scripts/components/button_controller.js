import React   from 'react';
import Actions from '../actions/actions'
import moment  from 'moment';

export default React.createClass({
  getDefaultProps(): any {
    return {
      date: new Date()
    }
  },

  decrHour(event): void {
    var newTime = moment(this.props.date).subtract(1, 'hour').toDate();
    Actions.setSelectedTime(newTime);
  },

  incrHour(event): void {
    var newTime = moment(this.props.date).add(1, 'hour').toDate();
    Actions.setSelectedTime(newTime);
  },

  showSettings(event): void {
    Actions.showSettings();
  },

  render(): any {
    return <div>
      <button onClick={this.decrHour}>-1 hr</button>
      <button onClick={this.incrHour}>+1 hr</button>
      <button onClick={this.showSettings}>Settings</button>
    </div>;
  }
});
