import React  from 'react';
import moment from 'moment';
import 'moment-timezone';

export default React.createClass({
  getDefaultProps(): any {
    return {
      timezone: 'Asia/Dubai',
      date:     new Date()
    }
  },

  getTime(): string {
    return moment(this.props.date).tz(this.props.timezone).format('MMMM Do YYYY, h:mm:ss a');
  },

  render(): any {
    return <div>
      <strong>{this.props.timezone}</strong> {this.getTime()}
    </div>;
  }
});
