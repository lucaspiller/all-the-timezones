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
    //event.preventDefault();
    this.lastX = event.touches[0].pageX;
  },

  touchMove(event): any {
    //event.preventDefault();
    let delta = this.lastX - event.touches[0].pageX;
    this.lastX = event.touches[0].pageX;

    setTimeout(() => {
      let newTime = moment(this.props.date).add(delta, 'minute').toDate();
      Actions.setSelectedTime(newTime);
    }, 0);
  },

  render(): any {
    return <div>
    </div>;
  }
});
