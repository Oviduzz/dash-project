import React from 'react';
import classes from './Header.module.scss'
import {Avatar, Badge, Icon} from "antd";
import bell from '../../../assets/Images/bell.png'
import logo from '../../../assets/Images/logo.png'
import notification from '../../../assets/Images/notification.png'

const Header = () => {

  return (
    <div className={classes.header}>
      <Icon component={() => (<img  alt='bell icon' src={logo} />)} />
      <div className={classes.userActions}>
        <Badge style={{backgroundColor: '#F57171', fontWeight: 'bold'}} count={5}  >
          <Icon component={() => (<img  alt='bell icon' src={notification} />)} />
        </Badge>
        <Icon component={() => (<img  alt='bell icon' src={bell} />)} />
        <Avatar
          shape="circle"
          icon={"user"}
          src='https://i.pravatar.cc/150?img=30'
        />
      </div>
    </div>
  );
};

export default Header;
