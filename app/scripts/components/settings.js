import React from 'react';
import Settings from './settings';
import SettingsStore from '../stores/settings_store'
import Actions from '../actions/actions'

function getState() {
  return {
    isOpen: SettingsStore.getOpenState()
  }
}

export default React.createClass({
  getInitialState(): any {
    return getState()
  },

  componentDidMount: function() {
    SettingsStore.addChangeListener(this._onChange);
  },

  componentWillUnmount: function() {
    SettingsStore.addChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState(getState());
  },

  hideSettings(event): void {
    Actions.hideSettings();
  },

  getStyle(): any {
    return {
      display: (this.state.isOpen ? 'block' : 'none')
    }
  },

  render(): any {
    var _this = this;
    return <div className="modal" style={_this.getStyle()}>
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <button type="button" className="close" onClick={this.hideSettings}><span aria-hidden="true">&times;</span></button>
            <h4 className="modal-title">Settings</h4>
          </div>
          <div className="modal-body">
           /* TODO settings body */
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={this.hideSettings}>Done</button>
          </div>
        </div>
      </div>
    </div>
  }
});
