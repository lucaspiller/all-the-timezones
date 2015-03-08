import React from 'react';
import Timezone from './timezone';

export default React.createClass({
  getInitialState(): any {
    return {
      date: new Date()
    }
  },

  getDefaultProps(): any {
    return {
      timezones: [
        'Asia/Dubai',
        'Europe/London',
        'America/Los_Angeles',
        'Australia/Sydney',
      ]
    }
  },

  componentDidMount(): void {
    this.timer = setInterval(this.tick, 250);
  },

  componentWillUnmount(): void {
    clearInterval(this.timer);
  },

  tick(): void {
    this.setState({ date: new Date() });
  },

  render(): any {
    var _this = this;
    return <div>
      {this.props.timezones.map(function(result) {
        return <Timezone key={result} timezone={result} date={_this.state.date} />
      })}
    </div>
  }
});
