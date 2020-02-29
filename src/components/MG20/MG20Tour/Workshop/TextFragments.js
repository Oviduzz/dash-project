import React from 'react';
import classes from './Workshop.module.scss';
const TextFragments = ({text}) => {
  return (
    <div className={classes.textFragmentComponent}>
      <p>{text}</p>
    </div>
  );
};

export default TextFragments;
