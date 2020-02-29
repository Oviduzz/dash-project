import React from 'react';
import classes from './TourStepsBox.module.scss';
import {Progress} from "antd";

const TourStepsBox = ({tourDetails, stepNumber, setStepFn, hideTour}) => {
  // we filter tourDetails to only show 1 step
  // you can make a function if you know how many steps you will have at the end - add percent for Progress bar
  const stepsDetails = tourDetails.filter( elem => {
    return elem.step === stepNumber
  })
  return (
    <div className={classes.tourBoxWrapper}>
      <h3>{stepsDetails[0] ? stepsDetails[0].title : ''}</h3>
      <p>{stepsDetails[0] ? stepsDetails[0].description : ''}</p>
      <div className={classes.steps}>
        <span>Step {stepNumber} of 5</span>
        <div className={classes.progressBar}>
          <Progress percent={stepNumber*20} showInfo={false} />
        </div>
        {
          stepNumber === 5 && <div className={classes.fullButton} onClick={() => hideTour()}>
            Got it
          </div>
        }
        {
          stepNumber < 5 && <div className={classes.fullButton} onClick={() => setStepFn()}>
            Take me there
          </div>
        }

      </div>
    </div>
  );
};

export default TourStepsBox;
