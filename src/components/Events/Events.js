import React, {Component} from 'react';
import styles from './Events.module.scss'
import Event from "./Event/Event";
import event1 from "../../assets/Images/event1.svg";
import event2 from "../../assets/Images/event2.svg";

const upcomingEventsData = [
  {
    id: 1,
    icon: event1,
    title: 'Shanghai Summit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna nisi, aliquet id justo ac, consectetur vehicula nisi. Donec sagittis viverra iaculis.'
  },
  {
    id: 2,
    icon: event2,
    title: 'Boston Summit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna nisi, aliquet id justo ac, consectetur vehicula nisi. Donec sagittis viverra iaculis.'
  }
];
const pastEventsData = [
  {
    id: 1,
    icon: event1,
    title: 'Shanghai Summit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna nisi, aliquet id justo ac, consectetur vehicula nisi. Donec sagittis viverra iaculis.'
  },
  {
    id: 2,
    icon: event1,
    title: 'Shanghai Summit',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas magna nisi, aliquet id justo ac, consectetur vehicula nisi. Donec sagittis viverra iaculis.'
  }
];

class Events extends Component {
  constructor(props) {
    super(props)

  }

  componentDidMount() {
    // add API call and replace dummy data
  }

  render() {
    return (
      <div className={styles.eventsWrapper}>
        <div>
          <h3>Upcoming Events</h3>
          <Event data={upcomingEventsData}/>
        </div>

        <div>
          <h3>Past Events</h3>
          <Event data={pastEventsData}/>
        </div>
      </div>
    );
  }
}

export default Events;
