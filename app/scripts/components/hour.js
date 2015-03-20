import React  from 'react';
import moment from 'moment';

export default React.createClass({
  getDefaultProps(): any {
    return {
      time: moment()
    }
  },

  getFormattedTime(): string {
    return this.props.time.format('h');
  },

  render(): any {
    return <div className="hour">
      {this.getFormattedTime()}
    </div>;
  }
});
