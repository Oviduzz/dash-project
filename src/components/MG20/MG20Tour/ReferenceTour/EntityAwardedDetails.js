import React from 'react';
import classes from '../MG20Tour.module.scss'
const EntityAwardedDetails = ({name, academy, interests}) => {
  return (
    <div className={classes.entityBlock}>
      <h3>{name}</h3>
      <span>{academy}</span>
      <div className={classes.entityBadge}>
        {interests.map((int, idx) => (
          <span key={idx}>{int}</span>
        ))}
      </div>
    </div>
  );
};

export default EntityAwardedDetails;
