'use strict';

import "bootstrap/less/bootstrap.less";
import "../stylesheets/style.scss";

import React        from 'react';
import TimezonesApp from './components/timezones_app';

React.render(<TimezonesApp />, document.body);
