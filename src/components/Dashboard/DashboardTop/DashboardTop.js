import React from 'react';
import classes from './DashboardTop.module.scss'
import {Icon, Progress} from "antd";
import topDashboardImage from "../../../assets/Images/topDashboardImage.png";
const DashboardTop = () => {
  return (
    <div className={classes.dashboardTopWrapper}>
      <div className={classes.leftBlock}>
        <Icon component={() => (<img  alt='bell icon' src={topDashboardImage} />)} />
        <div className={classes.content}>
          <h3>Ready to continue your last</h3>
          <div>
            <span>Living in a connected</span>
            <Icon type="arrow-right" />
          </div>
        </div>
      </div>
      <div className={classes.rightBlock}>
        <Progress type="circle" percent={23} strokeColor='white'  width={70}/>
      </div>
    </div>
  );
};

export default DashboardTop;
