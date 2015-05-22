import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';
import assign from 'react/lib/Object.assign';

let settingsIsOpen = false;

var Store = assign({}, EventEmitter.prototype, {
  getOpenState(): boolean {
    return settingsIsOpen;
  },

  setOpenState(isOpen): void {
    settingsIsOpen = isOpen;
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

    default:
      // no op
  }
});

module.exports = Store;
