import React from 'react';
import {Button, Icon, Input, Select} from "antd";
import classes from '../Community.module.scss';
import plusGreyIcon from '../../../assets/Images/plusGreyIcon.svg';
import cogGreyIcon from '../../../assets/Images/cogGreyIcon.svg';
import arrowSelect from "../../../assets/Images/arrowSelect.svg";
import pencilIconWhite from "../../../assets/Images/pencilIconWhite.svg";
import {navigate} from "@reach/router";
const InputGroup = Input.Group;
const { Option } = Select;

const TopBar = () => {
  return (
    <div className={classes.topBarWrapper}>
      <div className={classes.leftPart}>
        <InputGroup compact>
          <Input placeholder='Search' style={{  width: "200px"}} prefix={<Icon type="search" />}/>
          <Select defaultValue="everything" className='selectTop' suffixIcon={<Icon component={() => (<img alt='bell icon' src={arrowSelect}/>)}/>}>
            <Option value="everything">Everything</Option>
            <Option value="newValue">Something</Option>
          </Select>

        </InputGroup>
      </div>
      <div className={classes.rightPart}>
        <div className='sortByContainer'>
          <div className={classes.pencilButton} onClick={() => navigate('/community/edit-community')}>
            <Icon component={() => (<img alt='plus icon' src={pencilIconWhite}/>)} />
          </div>
          <span>Sort by</span>
          <Select defaultValue="everything" className='rightTop' suffixIcon={<Icon component={() => (<img alt='bell icon' src={arrowSelect}/>)}/>} >
          <Option value="everything">Featured</Option>
          <Option value="newValue">Something</Option>
        </Select>
        </div>
        <Icon component={() => (<img alt='plus icon' src={plusGreyIcon}/>)} onClick={() => navigate('/community/create-community')}/>
        <Icon component={() => (<img alt='cog icon' src={cogGreyIcon}/>)}/>
      </div>
    </div>
  );
};

export default TopBar;
