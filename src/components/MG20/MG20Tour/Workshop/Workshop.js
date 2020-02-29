import React from 'react';
import {Icon} from "antd";
import arrowLeft from "../../../../assets/Images/arrowLeft.svg";
import FullButton from "../../../Utils/FullButton";
import classes from './Workshop.module.scss';
import WorkshopItems from "./WorkshopItems";
import {navigate} from "@reach/router";

const Workshop = (props) => {
  const state = props.location.state[0];
  console.log(props);
  return (
    <>
      <div className={classes.workshopWrapper}>
        <div className={classes.bgc}>
          <div className={classes.goB} onClick={() => navigate('/mg20Tour')}>
            <Icon component={() => (<img alt='bell icon' src={arrowLeft}/>)}/>
            <span>Go Back</span>
          </div>
          <div className={classes.topContainer}>
            <img src={state.image} alt=""/>
            <div className={classes.topDetailsWrapper}>
              <h2>{state.title}</h2>
              <p>{state.description}</p>
              <div className={classes.buttonCyrcle}>
                Activate this Cycle
              </div>
            </div>
          </div>
        </div>
      </div>
      {state.workshopItems.map(item => (
        <WorkshopItems item={item} image={state.image}/>
      ))}
    </>
  );
};

export default Workshop;
