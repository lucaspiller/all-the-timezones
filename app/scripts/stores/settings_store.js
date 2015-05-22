import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';
import assign from 'react/lib/Object.assign';

let settingsIsOpen = false;

let timezones = [
  'Asia/Dubai',
  'Europe/London',
  'America/Los_Angeles',
  'Asia/Kolkata',
  'Australia/Sydney',
];

var Store = assign({}, EventEmitter.prototype, {
  getOpenState(): boolean {
    return settingsIsOpen;
  },

  getTimezones(): any {
    return timezones;
  },

  setOpenState(isOpen): void {
    settingsIsOpen = isOpen;
    this.emitChange();
  },

  removeTimezone(timezone): void {
    var index = timezones.indexOf(timezone);
    if (index >= 0) {
      timezones.splice(index, 1);
    }

    this.emitChange();
  },

  emitChange(): void {
    this.emit(Constants.CHANGE_EVENT);
  },

  addChangeListener(callback): void {
    this.addListener(Constants.CHANGE_EVENT, callback);
  },

  removeChangeListener(callback): void {
    this.removeListener(Constants.CHANGE_EVENT, callback);
  }
});

Dispatcher.register(action => {
  switch(action.actionType) {
    case Constants.CHANGE_SETTINGS_OPEN_STATE:
      Store.setOpenState(action.open);
      break;

    case Constants.REMOVE_TIMEZONE:
      Store.removeTimezone(action.timezone);
      break;

    default:
      // no op
  }
});

module.exports = Store;
