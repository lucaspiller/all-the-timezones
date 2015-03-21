import Debounce from 'lodash/function/debounce'
import moment from 'moment';

// setting the location hash blocks the browser, so we need to use
// debounce from lodash
export let saveTime = Debounce((time) => {
  window.location.hash = '#' + Math.floor(time.getTime() / 1000);
}, 100);

export function loadTime() {
  let hashValue = window.location.hash.slice(1);
  let time = moment(parseInt(hashValue) * 1000);
  if (time.isValid()) {
    return time._d;
  } else {
    return new Date();
  }
}
