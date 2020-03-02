import React from 'react';
import classes from '../Community.module.scss'
import {Link, navigate} from "@reach/router";

const WidgetCommunities = ({title, categories, children}) => {
  //we can send user to the specific community by calling api for specific ID
  return (
    <div className={classes.widgetContainer}>
      <h3>{title}</h3>
      {categories.map((categ, idx) => (
        <div className={classes.listCommunities} key={idx}>
          <Link to={`/community/${categ.route}`}
                getProps={({isCurrent}) => {
                  return {
                    style: {
                      color: isCurrent ? "#235EE8" : "#212438",
                      borderLeft: isCurrent ? '2px solid rgb(35, 93, 232)' : 'none',
                      outline: 'none',
                      padding: '0 0 15px',
                      position: 'relative',
                      right: '18px'
                    }
                  };
                }}>

            <span className={classes.linkToCommunity}>{categ.title}</span>


          </Link>
          {categ.title !== 'Home' && <h5>{categ.members} members</h5>}
        </div>

      ))}
      {children}
    </div>
  );
};

export default WidgetCommunities;
