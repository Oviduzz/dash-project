import React from 'react';
import EntityAwardedDetails from "./EntityAwardedDetails";
import classes from '../MG20Tour.module.scss';
import ReferenceGuides from "./ReferenceGuides";
import studentImage from '../../../../assets/Images/studentImage.svg';
import clubImage from '../../../../assets/Images/clubImage.svg';

const ReferenceTour = ({referenceGuides, monthlyAwards, reference, isStudent}) => {
  const {studentOfTheMonth} = monthlyAwards;
  const {clubOfTheMonth} = monthlyAwards;

  return (
    <>
      <div className={classes.sectionWrapper} ref={reference}>
        <div className={classes.studentWrapper}>
          <h2>Student of the Month</h2>
          <img src={studentImage} alt=""/>
          <EntityAwardedDetails name={studentOfTheMonth.name} academy={studentOfTheMonth.academy}
                                interests={studentOfTheMonth.interests}/>
          {isStudent
          && <div className={classes.studentPortal}>
            <h3>Want to be featured in the Student Spotlight?</h3>
            <p>Click here to learn more and submit an application!</p>
          </div>}
        </div>
        <div className={classes.clubWrapper}>
          <h2>Club of the Month</h2>
          <img src={clubImage} alt=""/>
          <EntityAwardedDetails name={clubOfTheMonth.name} academy={clubOfTheMonth.academy}
                                interests={clubOfTheMonth.interests}/>
          {isStudent
          && <div className={classes.studentPortal}>
            <h3>Want to be featured in the Club Of the Month?</h3>
            <p>Click here to learn more and submit an application!</p>
          </div>}
        </div>
      </div>
      <div className={classes.referenceWrapper}>
        <h2>Reference Guides</h2>
        <div className={classes.referenceBoxWrapper}>
          {referenceGuides.map((reference, idx) => (
            <ReferenceGuides {...reference} key={idx}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default ReferenceTour;
