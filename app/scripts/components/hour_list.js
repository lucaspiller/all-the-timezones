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
    var minuteOffset    = 60 - this.props.time.minute();
    this.marginLeft     = -this.HOUR_WIDTH + minuteOffset;
    this.width          = window.innerWidth + (this.HOUR_WIDTH * 2);

    this.hoursToDisplay = Math.ceil(this.width / this.HOUR_WIDTH);
    this.hoursBeforeAfter = Math.ceil((this.hoursToDisplay - 1) / 2);
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
      marginLeft: this.marginLeft + "px",
    };
  },

  getHours(): any {
    let baseTime = moment(this.props.time).subtract(this.hoursBeforeAfter, 'hour');

    return Array.apply(0, Array(this.hoursToDisplay)).map(() => {
      let time = moment(baseTime);
      baseTime.add(1, 'hour');

      return {
        time:   time,
        key:    time.day() + "-" + time.hour()
      }
    });
  },

  render(): any {
    return <div className="hour-list" style={this.getStyle()}>
      <div className="hour-list-inner" style={this.getInnerStyle()}>
        {this.getHours().map(function(result) {
          return <Hour time={result.time} key={result.key} />;
        })}
      </div>
    </div>;
  }
});
