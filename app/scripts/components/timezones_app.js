import React from 'react';
import Timezone from './timezone';
import WheelController from './wheel_controller';
import ButtonController from './button_controller';
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
        'Asia/Kolkata',
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
      <ButtonController date={_this.state.date} />
      <WheelController date={_this.state.date} />
      {this.props.timezones.map(function(result) {
        return <Timezone key={result} timezone={result} date={_this.state.date} />
      })}
    </div>
  }
});
