import React from 'react';
import Actions from '../actions/actions'

export default React.createClass({
  removeTimezone(): any {
    Actions.removeTimezone(this.props.timezone);
  },

  render(): any {
    var _this = this;
    return <li>
      {this.props.timezone}
      <span onClick={this.removeTimezone}>
        DEL
      </span>
    </li>
  }
});
