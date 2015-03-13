import React from 'react';
import Timezone from './timezone';
import TimeSelector from './time_selector';
import SelectedTimeStore from '../stores/selected_time_store'
import Actions from '../actions/actions'

function getState() {
  return {
    date: SelectedTimeStore.getTime()
  }
}

export default React.createClass({
  getInitialState(): any {
    return getState()
  },

  getDefaultProps(): any {
    return {
      timezones: [
        'Asia/Dubai',
        'Europe/London',
        'America/Los_Angeles',
        'Australia/Sydney',
      ]
    }
  },

  componentDidMount: function() {
    SelectedTimeStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SelectedTimeStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getState());
  },

  render(): any {
    var _this = this;
    return <div>
      <TimeSelector date={_this.state.date} />
      {this.props.timezones.map(function(result) {
        return <Timezone key={result} timezone={result} date={_this.state.date} />
      })}
    </div>
  }
});
