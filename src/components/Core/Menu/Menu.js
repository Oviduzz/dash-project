import React, {Component} from 'react';
import classes from './Menu.module.scss'
import {Icon, Popover} from "antd";
import course1 from "../../../assets/Images/course1.png";
import course2 from "../../../assets/Images/course2.png";
import course3 from "../../../assets/Images/course3.png";
import {Link} from "@reach/router";
import event1 from "../../../assets/Images/event1.svg";
import event2 from "../../../assets/Images/event2.svg";


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
const courseContent = (
    <div className={classes.contentMenuWrapper}>
      <div className={classes.secondMenuWrapper}>
        <Icon component={() => (<img alt='bell icon' src={course1}/>)}/>
        <div className={classes.itemMenu}>All Knvovva Courses</div>
      </div>
      <div className={classes.secondMenuWrapper}>
        <Icon component={() => (<img alt='bell icon' src={course2}/>)}/>
          <div>My Courses</div>
      </div>
    </div>
  )
;
const eventsContent = (
  <div className={classes.contentMenuWrapper}>
    <div className={classes.eventsMenuWrapper}>
      <h3>Upcoming events</h3>
      <ul>
        {upcomingEventsData.map((ev, idx) => {
          return <li key={idx}>{ev.title}</li>
        })}
      </ul>
    </div>
    <div className={classes.eventsMenuWrapper}>
      <h3>Past events</h3>
      <ul>
        {pastEventsData.map((ev, idx) => {
          return <li key={idx}>{ev.title}</li>
        })}
      </ul>
    </div>
  </div>
);


class Menu extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className={classes.menuWrapper}>
        <ul>
          <li>
            <Link to='/dashboard'
                  getProps={({isCurrent}) => {
                    return {
                      style: {
                        color: isCurrent ? "#212438" : "#9d9da7",
                        borderBottom: isCurrent ? '2px solid #235de8' : 'none',
                        outline: 'none',
                        padding: '20px 0'
                      },
                    };
                  }}>
              <span>Dashboard</span>
            </Link></li>
          <li>
            <Popover content={courseContent} trigger="hover" placement="bottom">
              <Link to='/courses/'
                    getProps={({isPartiallyCurrent}) => {
                      return {
                        style: {
                          color: isPartiallyCurrent ? "#212438" : "#9d9da7",
                          borderBottom: isPartiallyCurrent ? '2px solid #235de8' : 'none',
                          outline: 'none',
                          padding: '20px 0'
                        },
                      };
                    }}>
                <span>Courses</span>
              </Link>
            </Popover>
          </li>
          <li>
            <Popover content={eventsContent} trigger="hover" placement="bottom">
              <Link to='/events'
                    getProps={({isCurrent}) => {
                      return {
                        style: {
                          color: isCurrent ? "#212438" : "#9d9da7",
                          borderBottom: isCurrent ? '2px solid #235de8' : 'none',
                          outline: 'none',
                          padding: '20px 0'
                        },
                      };
                    }}>
                <span>Events</span>
              </Link>
            </Popover>
          </li>
          <li><span>Community</span></li>
          <li><Link to='/mg20'
                    getProps={({isCurrent}) => {
                      return {
                        style: {
                          color: isCurrent ? "#212438" : "#9d9da7",
                          borderBottom: isCurrent ? '2px solid #235de8' : 'none',
                          outline: 'none',
                          padding: '20px 0'
                        },
                      };
                    }}>
            <span>MG20 in Action</span>
          </Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
