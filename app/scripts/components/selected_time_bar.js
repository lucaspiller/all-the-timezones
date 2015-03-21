import React  from 'react';
import moment from 'moment';

export default React.createClass({
  HOUR_WIDTH: 60,

  getDefaultProps(): any {
    return {
      time: moment()
    }
  },

  getStyle(): any {
    // TODO refactor into util class as duplicated in HourList
    let totalWidth     = window.innerWidth + (this.HOUR_WIDTH * 2);
    let marginLeft     = Math.ceil(totalWidth / 2);
    let height         = window.innerHeight;

    return {
      left:   marginLeft + "px",
      height: height + "px"
    };
  },

  render(): any {
    return <div className="selected-time-bar" style={this.getStyle()}>
      <div className="bar"></div>
    </div>;
  }
});
