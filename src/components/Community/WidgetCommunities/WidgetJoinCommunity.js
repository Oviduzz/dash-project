import React from 'react';
import classes from '../Community.module.scss'
import {Icon} from "antd";
import cogGreyIcon from "../../../assets/Images/cogGreyIcon.svg";
import {navigate} from "@reach/router";

const WidgetJoinCommunity = ({title, members, isAdmin, inviteFriend}) => {
  return (
    <div className={classes.joinCommunityWrapper}>
      <span>Discussion Community for</span>
      <h3>{title}</h3>
      <div>
        <div className={classes.joinButtonWrapper}>
          {isAdmin && <div className={classes.joinedButtonWrapper}>
            Joined
          </div>}
          <div className={classes.joinButtonCommunity} onClick={() => inviteFriend()}>
            Join
          </div>
        </div>

        <span>{members} members</span>
      </div>
     { isAdmin && <Icon onClick={() => navigate('manage-community/new')}
       component={() => (<img alt='cog icon' src={cogGreyIcon}/>)}/>}
    </div>
  );
};

export default WidgetJoinCommunity;
