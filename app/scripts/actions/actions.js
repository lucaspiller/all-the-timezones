import Dispatcher from '../dispatcher/dispatcher';
import Constants from '../constants/constants';

export default {
  setSelectedTime: function(time) {
    Dispatcher.dispatch({
      actionType: Constants.SELECTED_TIME_CHANGE,
      time:       time
    });
  }
}
