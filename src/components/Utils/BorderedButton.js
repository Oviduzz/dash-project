import React from 'react';
import classes from './Buttons.module.scss';

const BorderedButton = ({text}) => {
  return (
    <div className={classes.borderedButton}>
      {text}
    </div>
  );
};

export default BorderedButton;
