import React, {Component} from 'react';
import img1 from "../../../assets/Images/img1.svg";
import img2 from "../../../assets/Images/img2.svg";
import img3 from "../../../assets/Images/img3.svg";
import img4 from "../../../assets/Images/img4.svg";
import img5 from "../../../assets/Images/img5.svg";
import PostComponent from "./PostComponent";

class DynamicCommunityComponent extends Component {
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
      ],
    }
  }

  componentDidMount() {
    // here you can add multiple api calls and update only the component

  }

  componentDidUpdate(prevProps, prevState, snapshot) {

    if (prevProps.uri !== this.props.location.pathname) {

      // add more to switch cases
      switch (this.props.location.pathname) {
        case '/community/home':
          this.setState({
            posts: [{
              id: 1,
              image: img1,
              route: 'events',
              title: 'Ask us Anything',
              community: '/journey',
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
                community: '/somethinelse',
                favorites: {
                  likes: 0,
                  messages: 2,
                  views: 2,
                },
                postedBy: 'Posted by Febian Shah - 12 months ago'
              },]
          });
          break;
        case '/community/events':
          this.setState({
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
          });
          break;
      }
    }
  }

  render() {
    return (
      this.state.posts.map((post, idx) => (
        <PostComponent {...post} key={idx}/>
      ))
    );
  }
}

export default DynamicCommunityComponent;
