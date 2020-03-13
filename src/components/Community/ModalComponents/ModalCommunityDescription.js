import React from 'react';
import classes from '../Community.module.scss';
const ModalCommunityDescription = ({modalData}) => {
  console.log(modalData);
  return (
    <div className={classes.modalCommunityDescription}>
      <span>Community Description</span>
      <h3>{modalData.name}</h3>
      <span>Community created on</span>
      <h3>{modalData.date}</h3>
    </div>
  );
};

export default ModalCommunityDescription;
