import React from 'react';
import Actions from '../actions/actions'

export default React.createClass({
  removeTimezone(): any {
    Actions.removeTimezone(this.props.timezone);
  },

  render(): any {
    var _this = this;
    return <li className="list-group-item">
      {this.props.timezone}
      <span className="pull-right">
        <button className="btn btn-danger btn-xs" onClick={this.removeTimezone}>
          <span className="glyphicon glyphicon-trash"></span>
        </button>
      </span>
    </li>
  }
});
