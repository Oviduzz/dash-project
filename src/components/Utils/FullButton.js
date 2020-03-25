import React from 'react';
import classes from './Buttons.module.scss';

const FullButton = ({text, openModal, bgColor, textColor}) => {
  return (
    <div className={classes.fullButton} style={{backgroundColor: bgColor, color: textColor}} onClick={openModal}>
      {text}
    </div>
  );
};

export default FullButton;
