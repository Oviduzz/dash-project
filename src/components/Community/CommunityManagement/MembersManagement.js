import React from 'react';
import classes from './CommunityManagement.module.scss';
const MembersManagement = ({pictureUrl, name, kpi, isApproved, removeUser}) => {
  return (
    <div className={classes.userManagementWrapper}>
      <div className={classes.imageWrapper}>
        <img src={pictureUrl} alt=""/>
      </div>
      <div className={classes.userDetails} onClick={() => removeUser()}>
        <span>
          {name}
        </span>
        <span >
          KPI: {kpi}
        </span>
      </div>
      <div className={classes.buttonWrapper}>
       {!isApproved &&
         <>
       <button>Decline</button>
       <button>Approve</button>
       </>}
        {/*here you can change to be approved by user that sent the invite*/}
        {isApproved && <div>Approved by Febian</div>}
      </div>
    </div>
  );
};

export default MembersManagement;
