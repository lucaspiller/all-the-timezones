import React   from 'react';
import Actions from '../actions/actions'
import moment  from 'moment';

export default React.createClass({
  getDefaultProps(): any {
    return {
      date: new Date()
    }
  },

  componentDidMount(): any {
    document.addEventListener('touchstart', this.touchStart);
    document.addEventListener('touchmove', this.touchMove);
  },

  componentWillUnmount(): any {
    document.removeEventListener('touchstart', this.touchStart);
    document.removeEventListener('touchmove', this.touchMove);
  },

  touchStart(event): any {
    this.lastX = event.touches[0].pageX;
  },

  touchMove(event): any {
    let delta = this.lastX - event.touches[0].pageX;
    this.lastX = event.touches[0].pageX;

    let key = 'second';
    if (delta > 3)  { key = 'minute'; }
    if (delta > 10) { key = 'hour'; }

    let newTime = moment(this.props.date).add(delta, key).toDate();
    Actions.setSelectedTime(newTime);
  },

  render(): any {
    return <div>
    </div>;
  }
});
