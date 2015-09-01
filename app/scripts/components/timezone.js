import React  from 'react';
import moment from 'moment';
import 'moment-timezone';
import HourList from './hour_list';
import * as TimezoneUtils from '../lib/timezone_utils';

export default React.createClass({
  getDefaultProps(): any {
    return {
      timezone: 'Asia/Dubai',
      date:     new Date()
    }
  },

  getName(): string {
    return TimezoneUtils.formatName(this.props.timezone);
  },

  getZoneInfo(): string {
    return TimezoneUtils.formatZoneInfo(this.props.timezone, this.props.date);
  },

  getLocalTime(): any {
    return moment(this.props.date).tz(this.props.timezone);
  },

  getFormattedTime(): string {
    return this.getLocalTime().format('dddd, MMMM Do YYYY, h:mm a');
  },

  render(): any {
    return <div className="timezone">
      <h2>
        {this.getName()}
        <small>{this.getZoneInfo()}</small>
      </h2>

      <span>{this.getFormattedTime()}</span>

      <HourList time={this.getLocalTime()} />
    </div>;
  }
});
