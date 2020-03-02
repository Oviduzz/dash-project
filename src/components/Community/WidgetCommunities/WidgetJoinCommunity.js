import React from 'react';
import classes from '../Community.module.scss'

const WidgetJoinCommunity = ({title, members}) => {
  return (
    <div className={classes.joinCommunityWrapper}>
      <span>Discussion Community for</span>
      <h3>{title}</h3>
      <div>
        <div className={classes.joinButtonCommunity}>
          Join
        </div>
        <span>{members} members</span>
      </div>
    </div>
  );
};

export default WidgetJoinCommunity;
