import React  from 'react';
import moment from 'moment';

export default React.createClass({
  getDefaultProps(): any {
    return {
      time:   moment(),
      active: false
    }
  },

  shouldComponentUpdate: function(nextProps, nextState) {
    return (this.props.active != nextProps.active);
  },

  getClassName(): string {
    let hour = this.props.time.format('H'); // 24 hour
    let klass = "hour hour-" + hour;

    if (this.props.active) {
      klass += " hour-active";
    }

    return klass;
  },

  getFormattedHour(): string {
    return this.props.time.format('h'); // 12 hour
  },

  getFormattedAbbr(): string {
    return this.props.time.format('a'); // am / pm
  },

  render(): any {
    return <div className={this.getClassName()}>
      {this.getFormattedHour()}
      <small>
        {this.getFormattedAbbr()}
      </small>
    </div>;
  }
});
