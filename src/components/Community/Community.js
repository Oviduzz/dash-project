import React, {Component} from 'react';
import classes from './Community.module.scss';
import TopBar from "./TopBar/TopBar";
import WidgetCommunities from "./WidgetCommunities/WidgetCommunities";
import img1 from '../../assets/Images/img1.svg';
import img2 from '../../assets/Images/img2.svg';
import img3 from '../../assets/Images/img3.svg';
import img4 from '../../assets/Images/img4.svg';
import img5 from '../../assets/Images/img5.svg';

class Community extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          image: img1,
          route: 'events',
          title: 'Ask us Anything',
          community: '/events',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
          postedBy: 'Posted by Febian Shah - 12 months ago'
        },
        {
          id: 1,
          image: img2,
          route: 'events',
          title: 'Cohort a Ministerial Working Group I: Urban Growth',
          community: '/events',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
          postedBy: 'Posted by Febian Shah - 12 months ago'
        },
        {
          id: 2,
          image: img3,
          route: 'events',
          title: 'Ministerial Working Group I: Societal Impact',
          community: '/events',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
          postedBy: 'Posted by Febian Shah - 12 months ago'
        },
        {
          id: 3,
          image: img4,
          route: 'events',
          title: 'Cohort A: DIscourse with Civil Society',
          community: '/events',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
          postedBy: 'Posted by Febian Shah - 12 months ago'
        },
        {
          id: 4,
          image: img5,

          route: 'events',
          title: 'Task Force Delegates',
          community: '/events',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
          postedBy: 'Posted by Febian Shah - 12 months ago'
        },
        {
          id: 5,
          image: img5,

          route: 'events', title: 'Ask us Anything',
          community: '/events',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
          postedBy: 'Posted by Febian Shah - 12 months ago'
        },
        {
          id: 6,
          image: img1,

          route: 'events', title: 'Ask us Anything',
          community: '/events',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
          postedBy: 'Posted by Febian Shah - 12 months ago'
        },
        {
          id: 7,
          image: img1,

          route: 'events', title: 'Ask us Anything',
          community: '/events',
          favorites: {
            likes: 0,
            messages: 2,
            views: 2,
          },
          postedBy: 'Posted by Febian Shah - 12 months ago'
        },
      ],
      otherPosts: [
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
      communityCategories: [
        {
          id: 1,
          title: 'Home',
          members: 0,
          route: 'home'
        }, {
          id: 2,
          title: 'Journey on the Silk Road',
          members: 20,
          route: 'journey'
        }, {
          id: 3,
          title: 'Events',
          members: 18,
          route: 'events'
        }, {
          id: 4,
          title: 'Student Clubs',
          members: 104,
          route: 'student',
        },
      ],
      otherCommunities: [
        {
          id: 1,
          title: 'General',
          members: 138,
          route: 'general',
        },
        {
          id: 2,
          title: 'Living in a connected world',
          members: 20,
          route: 'ev'
        },
        {
          id: 3,
          title: 'Splash',
          members: 18,
          route: 'ev1'
        },
        {
          id: 4,
          title: 'Taskforce',
          members: 4,
          route: 'evv'
        },
      ],
    }
  }

  componentDidMount() {
    //add logic for specific calls updating state with specific data
    // I don't know the exact business logic of app but you can change easly components
    // you can update categories for widgets by data calling APIs

    // in  this.props.children we are displaying different posts components based on what we need
    // again I don't know if this was the desired functionality but again you can change them easly.
  }

  render() {

    return (
      <div>
        <TopBar/>
        <div className={classes.communityContainer}>
          <div className={classes.widgetWrapper}>
            <WidgetCommunities categories={this.state.communityCategories} title='My Communities'/>
            <WidgetCommunities categories={this.state.otherCommunities} title='Explore More' >
              <div className={classes.buttonViewMore}>View All Communities</div>
            </WidgetCommunities>
          </div>
          <div className={classes.communityPostWrapper}>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
}

export default Community;
