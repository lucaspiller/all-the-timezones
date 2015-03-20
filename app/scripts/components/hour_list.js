import React  from 'react';
import moment from 'moment';
import Hour   from './hour';

export default React.createClass({
  getDefaultProps(): any {
    return {
      time: moment()
    }
  },

  getStyle(): any {
    let offset = 60 - this.props.time.minute();
    return { marginLeft: offset + "px" };
  },

  getHours(): any {
    let baseTime = moment(this.props.time);

    return Array.apply(0, Array(24)).map(() => {
      let result = moment(baseTime);
      baseTime.add(1, 'hour');
      return result;
    });
  },

  render(): any {
    return <div className="hour-list" style={this.getStyle()}>
      {this.getHours().map(function(result) {
        return <Hour time={result} key={result.hour()} />;
      })}
    </div>;
  }
});
