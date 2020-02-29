import React from 'react';
import classes from '../MG20Tour.module.scss';
const CycleComponent = ({title, image, sendToWorkshop}) => {
  return (
    <div className={classes.cycleBox} onClick={sendToWorkshop}>
      <img src={image} alt="img"/>
      <div className={classes.bottomBoxCycle}>
        {title}
      </div>
    </div>
  );
};

export default CycleComponent;
