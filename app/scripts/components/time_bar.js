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
    document.addEventListener('mousewheel', this.scrollEvent);
  },

  componentWillUnmount(): any {
    document.removeEventListener('mousewheel', this.scrollEvent);
  },

  scrollEvent(event): any {
    event.preventDefault();
    var newTime = moment(this.props.date).add(event.wheelDelta * 6, 'second').toDate();
    Actions.setSelectedTime(newTime);
  },

  render(): any {
    return <div>
    </div>;
  }
});
