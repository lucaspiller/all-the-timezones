import React  from 'react';
import moment from 'moment';
import 'moment-timezone';

export default React.createClass({
  getDefaultState: function() {
    return {
      data: new Date()
    }
  },

  getDefaultProps: function () {
    return {
      timezone: 'Asia/Dubai'
    }
  },

  componentDidMount: function(){
    this.timer = setInterval(this.tick, 250);
  },

  componentWillUnmount: function(){
    clearInterval(this.timer);
  },

  tick: function(){
    this.setState({ date: new Date() });
  },

  getTime(): string {
    return moment(this.date).tz(this.props.timezone).format('MMMM Do YYYY, h:mm:ss a');
  },

  render(): any {
    return <div>
      <strong>{this.props.timezone}</strong> {this.getTime()}
    </div>;
  }
});
