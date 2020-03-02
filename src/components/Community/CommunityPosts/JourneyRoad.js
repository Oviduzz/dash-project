import React, {Component} from 'react';
import img1 from "../../../assets/Images/img1.svg";
import img2 from "../../../assets/Images/img2.svg";
import img3 from "../../../assets/Images/img3.svg";
import img4 from "../../../assets/Images/img4.svg";
import img5 from "../../../assets/Images/img5.svg";
import PostComponent from "./PostComponent";
import classes from '../Community.module.scss';
import WidgetJoinCommunity from "../WidgetCommunities/WidgetJoinCommunity";
import WidgetRecentThreads from "../WidgetCommunities/WidgetRecentThreads";

class JourneyRoad extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          image: img1,
          route: 'events',
          title: 'Lesson 2 - Travelers - Question 1',
          community: '/journeyonthesilkroad',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
        },
        {
          id: 1,
          image: img2,
          route: 'events',
          title: 'Lesson 2 - Travelers - Question number 2',
          community: '/journeyonthesilkroad',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
        },
        {
          id: 2,
          image: img3,
          route: 'events',
          title: 'Lesson 2 - Travelers - Question number 3',
          community: '/journeyonthesilkroad',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
        },
        {
          id: 3,
          image: img4,
          route: 'events',
          title: 'Lesson 4 - Transport - Question 1',
          community: '/journeyonthesilkroad',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
        },
        {
          id: 4,
          image: img5,

          route: 'events',
          title: 'Lesson 4 - Transport - Question 1',
          community: '/journeyonthesilkroad',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
        },
        {
          id: 5,
          image: img5,

          route: 'events',
          title: 'Ask us Anything',
          community: '/journeyonthesilkroad',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
        },
        {
          id: 6,
          image: img1,

          route: 'events',
          title: 'Ask us Anything',
          community: '/journeyonthesilkroad',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
        },
        {
          id: 7,
          image: img1,

          route: 'events', title: 'Ask us Anything',
          community: '/journeyonthesilkroad',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
        },
      ],
      community: {
        title: 'Journey On The Silk Road',
        members: 1516
      }
    }
  }

  componentDidMount() {
    // update state according to community route
    // here you can add logic for calling API for specific community then update the state with specific posts
  }

  render() {
    return (
      <div className={classes.journeyRoadContainer}>
        <div className={classes.journeyRoadWrapper}>
          {this.state.posts.map(post => (
            <PostComponent {...post}/>
          ))}
        </div>
        <div className={classes.joinCommunityWidget}>
         <WidgetJoinCommunity {...this.state.community} />
         <WidgetRecentThreads/>
        </div>
      </div>
    );
  }
}

export default JourneyRoad;
