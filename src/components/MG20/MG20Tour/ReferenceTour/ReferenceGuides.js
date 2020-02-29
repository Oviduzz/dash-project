import React from 'react';
import classes from '../MG20Tour.module.scss';
const ReferenceGuides = ({image, title, description}) => {
  return (
    <div className={classes.referenceBox}>
      <div className={classes.imageContainer}>
        <img src={image} alt=""/>
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ReferenceGuides;
