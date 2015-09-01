import React from 'react';
import moment from 'moment';
import 'moment-timezone';
import Actions from '../actions/actions'
import Array from 'core-js/es6/array'
import Set from 'core-js/es6/set'
import * as TimezoneUtils from '../lib/timezone_utils';

export default React.createClass({
  getInitialState(): any {
    return {
      selectedTimezone: this.selectableTimezones()[0]
    };
  },

  updateSelectedValue(event): any {
    this.setState({
      selectedTimezone: event.target.value
    });
  },

  addTimezone(): any {
    if (this.state.selectedTimezone != undefined) {
      Actions.addTimezone(this.state.selectedTimezone);
    }

    this.state.selectedTimezone = this.selectableTimezones()[1];
  },

  selectableTimezones(): any {
    let timezones = new Set(moment.tz.names());

    this.props.activeTimezones.forEach(t => {
      timezones.delete(t);
    });

    return Array.from(timezones).sort(function(a, b) {
      let offsetA = moment.tz.zone(a).offset(new Date());
      let offsetB = moment.tz.zone(b).offset(new Date());

      return offsetA - offsetB;
    });
  },

  getName(timezone): string {
    return TimezoneUtils.formatNameWithZoneInfo(timezone);
  },

  render(): any {
    var _this = this;
    return <div>
      <h4>Add Timezone</h4>
        <select value={this.state.timezone} onChange={this.updateSelectedValue} className="form-control">
        {this.selectableTimezones().map(function(result) {
          return <option key={result}>
            {_this.getName(result)}
          </option>
        })}
        </select>
        <button onClick={this.addTimezone} className="btn btn-default">
          Add
        </button>
    </div>
  }
});
