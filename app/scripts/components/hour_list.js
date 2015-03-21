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
    let baseTime = moment(this.props.time);

    return Array.apply(0, Array(this.hoursToDisplay)).map(() => {
      let result = moment(baseTime);
      baseTime.add(1, 'hour');
      return result;
    });
  },

  render(): any {
    return <div className="hour-list" style={this.getStyle()}>
      <div className="hour-list-inner" style={this.getInnerStyle()}>
        {this.getHours().map(function(result) {
          return <Hour time={result} key={result.day() + "-" + result.hour()} />;
        })}
      </div>
    </div>;
  }
});
