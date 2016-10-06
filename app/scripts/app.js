'use strict';

import "bootstrap/less/bootstrap.less";
import "../stylesheets/style.scss";

import React        from 'react';
import ReactDOM     from 'react-dom';
import TimezonesApp from './components/timezones_app';

const node = document.getElementById('app');

ReactDOM.render(<TimezonesApp />, node);
