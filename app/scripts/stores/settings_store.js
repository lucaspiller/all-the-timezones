import moment from 'moment';
import 'moment-timezone';
import Array from 'core-js/es6/array'
import Set from 'core-js/es6/set'
import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';
import assign from 'react/lib/Object.assign';

let settingsIsOpen = false;

let timezones = new Set([
  'Asia/Dubai',
  'Europe/London',
  'America/Los_Angeles',
  'Asia/Kolkata',
  'Australia/Sydney',
]);

var Store = assign({}, EventEmitter.prototype, {
  getOpenState(): boolean {
    return settingsIsOpen;
  },

  getTimezones(): any {
    return Array.from(timezones).sort((a, b) => {
      let aOffset = moment.tz.zone(a).offset(moment());
      let bOffset = moment.tz.zone(b).offset(moment());
      return bOffset - aOffset
    });
  },

  setOpenState(isOpen): void {
    settingsIsOpen = isOpen;
    this.emitChange();
  },

  addTimezone(timezone): void {
    timezones.add(timezone);
    this.emitChange();
  },

  removeTimezone(timezone): void {
    timezones.delete(timezone);
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

    case Constants.ADD_TIMEZONE:
      Store.addTimezone(action.timezone);
      break;

    default:
      // no op
  }
});

module.exports = Store;
