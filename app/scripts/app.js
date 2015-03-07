'use strict';

import "babel/polyfill";

import React from 'react';
import Dice  from './components/dice';

Promise.all([
  new Promise((resolve) => {
    if (window.addEventListener) {
      window.addEventListener('DOMContentLoaded', resolve);
    } else {
      window.attachEvent('onload', resolve);
    }
  }),
  new Promise((resolve) => {
    React.render(<Dice/>, document.body);
  })
]);

