import React from 'react';
import {Progress} from "antd";
import classes from './Students.module.scss'
const StudentWidget = ({number, name}) => {
  return (
    <div className={classes.widgetContent}>
      <h3>{number}%</h3>
      <h4>{name}</h4>
      <Progress percent={number} showInfo={false}  strokeColor={{
        '0%': '#7982EA',
        '100%': '#7982EA'}}/>
    </div>
  );
};

export default StudentWidget;
