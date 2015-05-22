import React from 'react';
import Timezone from './settings_timezone';
import NewTimezone from './settings_new_timezone';

export default React.createClass({
  render(): any {
    var _this = this;
    return <div>
      <h2>Timezones</h2>
      <ul>
        {this.props.timezones.map(function(result) {
          return <Timezone key={result} timezone={result} />
        })}
      </ul>
      <NewTimezone activeTimezones={this.props.timezones} />
    </div>
  }
});
