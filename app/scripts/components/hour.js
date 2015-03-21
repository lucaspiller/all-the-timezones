import React  from 'react';
import moment from 'moment';

export default React.createClass({
  getDefaultProps(): any {
    return {
      time: moment()
    }
  },

  getClassName(): string {
    let hour = this.props.time.format('H'); // 24 hour
    return "hour hour-" + hour;
  },

  getFormattedHour(): string {
    return this.props.time.format('h'); // 12 hour
  },

  getFormattedAbbr(): string {
    return this.props.time.format('a'); // am / pm
  },

  render(): any {
    return <div className={this.getClassName()}>
      {this.getFormattedHour()}
      <small>
        {this.getFormattedAbbr()}
      </small>
    </div>;
  }
});
