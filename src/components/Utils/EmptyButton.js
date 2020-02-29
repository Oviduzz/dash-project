import React from 'react';
import classes from './Buttons.module.scss';

const EmptyButton = ({text}) => {
  return (
    <div className={classes.emptyButton}>
      {text}
    </div>
  );
};

export default EmptyButton;
