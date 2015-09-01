import React from 'react';
import Actions from '../actions/actions'
import * as TimezoneUtils from '../lib/timezone_utils';

export default React.createClass({
  removeTimezone(): any {
    Actions.removeTimezone(this.props.timezone);
  },

  getName(): string {
    return TimezoneUtils.formatNameWithZoneInfo(this.props.timezone);
  },

  render(): any {
    var _this = this;
    return <li className="list-group-item">
      {this.getName()}
      <span className="pull-right">
        <button className="btn btn-danger btn-xs" onClick={this.removeTimezone}>
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </span>
    </li>
  }
});
