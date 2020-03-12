import React, {Component} from 'react';
import {Icon} from "antd";
import heartGreyIcon from "../../../assets/Images/heartGreyIcon.svg";
import img1 from "../../../assets/Images/img1.svg";
import classes from '../Community.module.scss';

class WidgetRecentThreads extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recentThreads: [
        {
          id: 1,
          image: img1,
          title: '2020 Shanghai',
          time: '37',
          likes: 0
        }, {
          id: 2,
          image: img1,
          title: '2020 Shanghai',
          time: '21',
          likes: 2
        }, {
          id: 3,
          image: img1,
          title: '2020 Shanghai',
          time: '13',
          likes: 6
        },
      ]
    }
  }

  componentDidMount() {
    // update state according to desired threads
  }

  render() {
    return (
      <div className={classes.recentThreadsContainer}>
        <h3>Recent Threads</h3>
        {this.state.recentThreads.map((thread, idx) => (
          <div className={classes.widgetThreadDetails} key={idx}>
            <span>{thread.time} days ago</span>
            <div>
              <img src={thread.image} alt=""/>
              <div>
                <h4>{thread.title}</h4>
                <div>
                  <Icon component={() => (<img alt='bell icon' src={heartGreyIcon}/>)}/>
                  <span>{thread.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default WidgetRecentThreads;
