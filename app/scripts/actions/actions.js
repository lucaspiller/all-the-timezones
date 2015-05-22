import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';

export default {
  setSelectedTime: function(time) {
    Dispatcher.dispatch({
      actionType: Constants.SELECTED_TIME_CHANGE,
      time:       time
    });
  },

  showSettings: function() {
    Dispatcher.dispatch({
      actionType: Constants.CHANGE_SETTINGS_OPEN_STATE,
      open:       true
    })
  },

  hideSettings: function() {
    Dispatcher.dispatch({
      actionType: Constants.CHANGE_SETTINGS_OPEN_STATE,
      open:       false
    })
  },

  addTimezone: function(timezone) {
    Dispatcher.dispatch({
      actionType: Constants.ADD_TIMEZONE,
      timezone:   timezone
    });
  },

  removeTimezone: function(timezone) {
    Dispatcher.dispatch({
      actionType: Constants.REMOVE_TIMEZONE,
      timezone:   timezone
    });
  }
}
