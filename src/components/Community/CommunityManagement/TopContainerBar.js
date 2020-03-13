import React from 'react';
import {Icon, Input, Select} from "antd";
import arrowSelect from "../../../assets/Images/arrowSelect.svg";
import classes from './CommunityManagement.module.scss';
const {Option} = Select;
const TopContainerBar = () => {
  return (
    <div className={classes.topBarContainer}>
      <Input placeholder='Search for users' style={{  width: "70%"}} prefix={<Icon type="search" />}/>
      <Select defaultValue="joinRequests" className='managementSelect' suffixIcon={<Icon component={() => (<img alt='bell icon' src={arrowSelect}/>)}/>}>
        <Option value="joinRequests">Show Join Requests</Option>
        <Option value="newValue">Something</Option>
      </Select>
    </div>
  );
};

export default TopContainerBar;
