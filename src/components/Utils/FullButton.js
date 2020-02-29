import React from 'react';
import classes from './Buttons.module.scss';

const FullButton = ({text, openModal}) => {
  return (
    <div className={classes.fullButton} onClick={openModal}>
      {text}
    </div>
  );
};

export default FullButton;
