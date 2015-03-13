import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';
import assign from 'react/lib/Object.assign';

var selectedTime = new Date();

var CHANGE_EVENT = Symbol();

var Store = assign({}, EventEmitter.prototype, {
  getTime(): any {
    return selectedTime;
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
      selectedTime = action.time;
      Store.emitChange();
      break;

    default:
      // no op
  }
});

module.exports = Store;
