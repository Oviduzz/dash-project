import React from 'react';
import classes from './Buttons.module.scss';
import {Button} from "antd";

const ButtonAutoWidth = ({text}) => {
  return (
    <Button className={classes.buttonAutoWidth}>
      {text}
    </Button>
  );
};

export default ButtonAutoWidth;
