import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';
import assign from 'react/lib/Object.assign';
import * as LocationHash from '../lib/location_hash'

var selectedTime = LocationHash.loadTime();

var CHANGE_EVENT = Symbol();

var Store = assign({}, EventEmitter.prototype, {
  getTime(): any {
    return selectedTime;
  },

  setTime(time): any {
    selectedTime = time;
    LocationHash.saveTime(selectedTime);
    this.emitChange();
  },

  emitChange(): void {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener(callback): void {
    this.addListener(CHANGE_EVENT, callback);
  },

  removeChangeListener(callback): void {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

Dispatcher.register(action => {
  switch(action.actionType) {
    case Constants.SELECTED_TIME_CHANGE:
      Store.setTime(action.time);
      break;

    default:
      // no op
  }
});

module.exports = Store;
