import React from 'react';
import {Icon} from "antd";
import classes from './DashboardFeed.module.scss'
import EmptyButton from "../../../Utils/EmptyButton";
import FullButton from "../../../Utils/FullButton";


const DashboardFeed = ({data}) => {
  // we return different buttons depending on feedType
  return (
    <>
      {data.map((feed, idx) => (
          <div className={classes.dashboardFeedWrapper} key={idx}>
            <Icon component={() => (<img alt='bell icon' src={feed.icon}/>)}/>
            <div className={classes.content}>
              <h3>{feed.title}</h3>

              {(feed.feedType !== 'success' || feed.feedType === 'success-student' )
                ?
                <p><span className={classes.messageDetails}>{feed.studentName}</span> {feed.text} <span
                  className={classes.messageDetails}>{feed.courseName}</span></p>
                :
                <p><span className={classes.messageDetails}>{feed.courseName}</span> {feed.text} </p>}
              {(feed.feedType === 'enroll') &&<EmptyButton text={'Welcome'}/>
              }
              {(feed.feedType === 'success-student') && <EmptyButton text={'Launch this course'}/>
                }
              {(feed.feedType === 'message') && <FullButton text={'Launch chat'}/>}
            </div>
            <span className={classes.updated}>{feed.updatedAt}</span>
          </div>

        )
      )}
    </>
  );
};

export default DashboardFeed;
