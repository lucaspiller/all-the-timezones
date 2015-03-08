'use strict';

import "babel/polyfill";

import React        from 'react';
import TimezonesApp from './components/timezones_app';

Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }),
  new Promise((resolve) => {
    React.render(<TimezonesApp />, document.body);
  })
]);
