import React  from 'react';
import moment from 'moment';
import Hour   from './hour';

export default React.createClass({
  HOUR_WIDTH: 60,

  getDefaultProps(): any {
    return {
      time: moment()
    }
  },

  calculateWidths(): any {
    let minuteOffset      = (this.HOUR_WIDTH / 60) * this.props.time.minute();
    let midPoint          = Math.floor(window.innerWidth / 2);

    this.width            = window.innerWidth + (this.HOUR_WIDTH * 2);
    this.hoursToDisplay   = Math.ceil(this.width / this.HOUR_WIDTH);
    this.hoursBeforeAfter = Math.ceil((this.hoursToDisplay - 1) / 2);
    this.offsetLeft = (midPoint - (this.hoursBeforeAfter * this.HOUR_WIDTH)) - minuteOffset;
  },

  getStyle(): any {
    this.calculateWidths();
    return {
      width: this.width + "px"
    };
  },

  getInnerStyle(): any {
    this.calculateWidths();
    return {
      '-webkit-transform': 'translateX(' + this.offsetLeft + 'px)',
      '-ms-transform': 'translateX(' + this.offsetLeft + 'px)',
      'transform': 'translateX(' + this.offsetLeft + 'px)'
    };
  },

  getHours(): any {
    let baseTime = moment(this.props.time).subtract(this.hoursBeforeAfter, 'hour');

    return Array.apply(0, Array(this.hoursToDisplay)).map(() => {
      let time = moment(baseTime);
      baseTime.add(1, 'hour');

      return {
        time:   time,
        key:    time.day() + "-" + time.hour(),
        active: time.isSame(this.props.time)
      }
    });
  },

  render(): any {
    return <div className="hour-list" style={this.getStyle()}>
      <div className="hour-list-inner" style={this.getInnerStyle()}>
        {this.getHours().map(function(result) {
          return <Hour time={result.time} key={result.key} active={result.active} />;
        })}
      </div>
    </div>;
  }
});
