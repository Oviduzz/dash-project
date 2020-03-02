import React, {Component} from 'react';
import classes from '../Community.module.scss';
import watchGreyIcon from "../../../assets/Images/watchGreyIcon.svg";
import messageGreyIcon from "../../../assets/Images/messageGreyIcon.svg";
import {Icon} from "antd";
import lockRedIcon from "../../../assets/Images/lockRedIcon.svg";
import blueKeyIcon from "../../../assets/Images/blueKeyIcon.svg";
import userGreyIcon from "../../../assets/Images/userGreyIcon.svg";
import leaveBlueIcon from "../../../assets/Images/leaveBlueIcon.svg";

class OtherPosts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          route: '/living',
          title: 'livinginaconnectedworld',
          community: '/livinginaconnectedworld',
          favorites: {
            users: 192,
            messages: 397,
            time: 5,
          },
          isPrivate: true,
          isRegistered: false,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Cras scelerisque dapibus orci. Donec volutpat lacinia dui, eget bibendum magna tempus nec. In at risus tempor.'
        },
        {
          id: 2,
          route: '/living',
          title: 'General',
          community: '/general',
          favorites: {
            users: 192,
            messages: 397,
            time: 5,
          },
          isPrivate: false,
          isRegistered: false,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Cras scelerisque dapibus orci. Donec volutpat lacinia dui, eget bibendum magna tempus nec. In at risus tempor.'
        },
        {
          id: 3,

          route: '/living', title: 'Events',
          community: '/events',
          favorites: {
            users: 192,
            messages: 397,
            time: 5,
          },
          isPrivate: true,
          isRegistered: false,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Cras scelerisque dapibus orci. Donec volutpat lacinia dui, eget bibendum magna tempus nec. In at risus tempor.'
        },
        {
          id: 1,
          route: '/living',
          title: 'livinginaconnectedworld',
          community: '/livinginaconnectedworld',
          favorites: {
            users: 192,
            messages: 397,
            time: 5,
          },
          isPrivate: false,
          isRegistered: true,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Cras scelerisque dapibus orci. Donec volutpat lacinia dui, eget bibendum magna tempus nec. In at risus tempor.'
        },
        {
          id: 1,
          route: '/living',
          title: 'General',
          community: '/general',
          favorites: {
            users: 192,
            messages: 397,
            time: 5,
          },
          isPrivate: true,
          isRegistered: false,
          details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' +
            ' Cras scelerisque dapibus orci. Donec volutpat lacinia dui, eget bibendum magna tempus nec. In at risus tempor.'
        },
      ],
    }
  }

  render() {
    return (
      this.state.posts.map( post => (
        <div className={classes.postWrapper}>
          <div className={classes.contentWrapper}>
            <div className={classes.postDetails}>
              <div className={classes.topPostDetailsWrapper}>
                <h2>{post.title}</h2>
                {
                  post.isPrivate  && <div className={classes.privateButton}>
                    <Icon component={() => (<img alt='bell icon' src={lockRedIcon}/>)}/>
                    <span>Private</span>
                  </div>
                }
                {
                  (post.isPrivate && !post.isRegistered) && <div className={classes.requestButton}>
                    <Icon component={() => (<img alt='bell icon' src={blueKeyIcon}/>)}/>
                    <span>Request Access</span>
                  </div>
                }
                {
                  (!post.isPrivate && !post.isRegistered) && <div className={classes.joinButton}>
                    <span>Join</span>
                  </div>
                }
                {
                  (!post.isPrivate && post.isRegistered) && <div className={classes.requestButton}>
                    <Icon component={() => (<img alt='bell icon' src={leaveBlueIcon}/>)}/>
                    <span>Leave</span>
                  </div>
                }
              </div>
              <p className={classes.postRoutes}>{post.community}</p>
              <span className={classes.otherPostDetails}>{post.details}</span>
            </div>
            <div className={classes.bottomPostWrapper}>
              <div className={classes.iconWrapperOthers}>

                <div>
                  <Icon component={() => (<img alt='bell icon' src={userGreyIcon}/>)}/>
                  <span className={classes.numberOfVotes}>{post.favorites.users}</span>
                </div>
                <div>
                  <Icon component={() => (<img alt='bell icon' src={messageGreyIcon}/>)}/>
                  <span className={classes.numberOfVotes}>{post.favorites.messages}</span>
                </div>
                <div>
                  <Icon component={() => (<img alt='bell icon' src={watchGreyIcon}/>)}/>
                  <span className={classes.numberOfVotes}>{post.favorites.time} minutes ago</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      ) )
    );
  }
}

export default OtherPosts;
