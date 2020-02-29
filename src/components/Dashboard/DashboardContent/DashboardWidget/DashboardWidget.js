import React from 'react';

import {Icon} from "antd";
import classes from './DashboardWidget.module.scss'


const DashboardWidget = ( {data}) => {
  return (
    <>
      {data.map((obj, idx) => (
        <div className={classes.dashboardWidgetWrapper} key={idx}>
          <div className={classes.content}>
            <span className={classes.number}>{obj.totalNumber}</span>
            <span className={classes.text}>{obj.text}</span>
          </div>
          <Icon component={() => (<img alt='bell icon' src={obj.icon}/>)}/>
        </div>
      ))}
    </>
  );
};

export default DashboardWidget;
