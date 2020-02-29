import React from 'react';
import {Icon} from "antd";
import arrowRight from "../../../../assets/Images/arrowRight.svg";
import classes from './Workshop.module.scss';
import {navigate} from "@reach/router";
const WorkshopItems = ({item, image}) => {

  const navigateToSection = () => {
    navigate('workshop-section', {state: {item, image},})
  }

  return (
    <div className={classes.workshopItemsWrapper} onClick={() => navigateToSection()}>
      <div className={classes.imgWrapper}>
        <img src={item.image} alt=""/>
      </div>
      <div className={classes.itemDetails}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
      <Icon component={() => (<img alt='bell icon' src={arrowRight}/>)} />
    </div>
  );
};

export default WorkshopItems;
