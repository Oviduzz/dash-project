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
import {Input, Modal} from "antd";
import ModalCommunityDescription from "../ModalComponents/ModalCommunityDescription";
import ModalInviteFriend from "../ModalComponents/ModalInviteFriend";

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
      },
      showModal: true,
      communityDetails: {
        userInvited: 'john@doe.com',
        admin: 'Betty Garnett',
        name: 'rachel.lund@knovva.com',
        date: '09-12-2019',
        communityName: 'konvva'
      },
      isAdmin: false,
      showInviteModal: false,
      friends: [
        {
          id: 1,
          pictureUrl: 'https://i.pravatar.cc/70?img=55',
          name: 'Tim',
          email: 'tim@fairpixels.pro'
        },
        {
          id: 2,
          pictureUrl: 'https://i.pravatar.cc/70?img=54',
          name: 'Aron',
          email: 'aron@fairpixels.pro'
        },
        {
          id: 3,
          pictureUrl: 'https://i.pravatar.cc/70?img=53',
          name: 'John',
          email: 'john@fairpixels.pro'
        },
        {
          id: 4,
          pictureUrl: 'https://i.pravatar.cc/70?img=51',
          name: 'Henry',
          email: 'henry@fairpixels.pro'
        },
        {
          id: 5,
          pictureUrl: 'https://i.pravatar.cc/70?img=52',
          name: 'Pete',
          email: 'pete@fairpixels.pro'
        },
      ]
    }
  }

  handleCancel = (ev) => {
    ev.stopPropagation();
    this.setState({showModal: false})
  };
  declineRequest = (ev) => {
    ev.stopPropagation();
    this.setState({showModal: false})
  };
  acceptRequest = (ev) => {
    ev.stopPropagation();
    this.setState({showModal: false, isAdmin: true})
  };
  inviteFriend = () => {
    this.setState({showInviteModal: true})
  }
  onInvite = () => {
    //do smth
  }
  onCancel = () => {
    this.setState({showInviteModal: false})
  }

  componentDidMount() {
    // update state according to community route
    // here you can add logic for calling API for specific community then update the state with specific posts
  }

  render() {
    return (
      <div className={classes.journeyRoadContainer}>
        <Modal
          title="Basic Modal"
          visible={this.state.showModal}
          onCancel={(ev) => this.handleCancel(ev)}
          closable={false}
          footer={null}
          wrapClassName='modalInvite'
        >
          <h3>Hi {this.state.communityDetails.userInvited}! {this.state.communityDetails.admin} invited you to
            join {this.state.communityDetails.communityName} as admin</h3>
          <ModalCommunityDescription modalData={this.state.communityDetails}/>
          <div className={classes.modalButtonWrapper}>
            <button onClick={(ev) => this.declineRequest(ev)}>Decline</button>
            <button onClick={(ev) => this.acceptRequest(ev)}>Accept</button>
          </div>

        </Modal>
        <div className={classes.journeyRoadWrapper}>
          {this.state.posts.map((post, idx) => (
            <PostComponent {...post} key={idx}/>
          ))}
        </div>
        <div className={classes.joinCommunityWidget}>
          <WidgetJoinCommunity {...this.state.community} isAdmin={this.state.isAdmin} inviteFriend={this.inviteFriend}/>
          <WidgetRecentThreads/>
        </div>
        <ModalInviteFriend visible={this.state.showInviteModal} users={this.state.friends} onCancel={this.onCancel} onInvite={this.onInvite}/>
      </div>
    );
  }
}

export default JourneyRoad;
