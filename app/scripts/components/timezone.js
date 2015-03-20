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

  getName(): string {
    return this.props.timezone.split('/')[1].replace('_', ' ');
  },

  getZoneInfo(): string {
    let zone         = moment.tz.zone(this.props.timezone);
    let offset_hours = zone.offset(this.props.date) / 60;
    let abbr         = zone.abbr(this.props.date);

    if (offset_hours >= 0) {
      offset_hours = `+${offset_hours}`;
    }

    return `${abbr} UTC${offset_hours}`;
  },

  getTime(): string {
    return moment(this.props.date).tz(this.props.timezone).format('MMMM Do YYYY, h:mm a');
  },

  render(): any {
    return <div className="timezone">
      <h2>
        {this.getName()}
        <small>{this.getZoneInfo()}</small>
      </h2>

      <span>{this.getTime()}</span>
    </div>;
  }
});
