import React from 'react';
import Timezone from './timezone';
import ButtonController from './button_controller';
import WheelController from './wheel_controller';
import TouchController from './touch_controller';
import SelectedTimeBar from './selected_time_bar'
import Settings from './settings';
import SelectedTimeStore from '../stores/selected_time_store'
import SettingsStore from '../stores/settings_store'
import Actions from '../actions/actions'

function getState() {
  return {
    date:      SelectedTimeStore.getTime(),
    timezones: SettingsStore.getTimezones()
  }
}

export default React.createClass({
  getInitialState(): any {
    return getState()
  },

  componentDidMount: function() {
    SelectedTimeStore.addChangeListener(this._onChange);
    SettingsStore.addChangeListener(this._onChange);
    window.addEventListener("resize", this._onChange);
  },

  componentWillUnmount: function() {
    SelectedTimeStore.removeChangeListener(this._onChange);
    SettingsStore.removeChangeListener(this._onChange);
    window.removeEventListener("resize", this._onChange);
  },

  _onChange: function() {
    this.setState(getState());
  },

  render(): any {
    var _this = this;
    return <div>
      <div className="timezones-app">
        <ButtonController date={_this.state.date} />
        <WheelController date={_this.state.date} />
        <TouchController date={_this.state.date} />

        <SelectedTimeBar date={_this.state.data} />

        {this.state.timezones.map(function(result) {
          return <Timezone key={result} timezone={result} date={_this.state.date} />
        })}
      </div>

      <Settings />
    </div>
  }
});
