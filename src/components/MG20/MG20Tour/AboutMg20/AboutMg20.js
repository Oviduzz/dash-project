import React from 'react';
import classes from '../MG20Tour.module.scss';

const AboutMg20 = ({reference}) => {
  return (
    <div className={classes.aboutMg20} ref={reference}>
      <div>
        <h2>
          About Mg20 In Action
        </h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida sem ac enim sagittis faucibus in ac
          mi. Integer lacus enim, auctor sed finibus eu, ullamcorper condimentum nisi. Praesent imperdiet porttitor nisl
          vitae volutpat. Phasellus at vulputate lectus, non tempus metus. Ut sed augue et mi feugiat pulvinar. Mauris
          convallis magna non mi faucibus dignissim. Ut eget pretium turpis. Vestibulum ut enim et urna dictum hendrerit
          a vitae tortor.</p>
      </div>
    </div>
  );
};

export default AboutMg20;
