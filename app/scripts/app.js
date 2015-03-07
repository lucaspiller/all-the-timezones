'use strict';

import "babel/polyfill";

import React from 'react';
import Clock from './components/clock';

Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }),
  new Promise((resolve) => {
    React.render(
      <div>
        <Clock />
        <Clock timezone='Europe/London' />
        <Clock timezone='America/Los_Angeles' />
      </div>
    , document.body);
  })
]);
