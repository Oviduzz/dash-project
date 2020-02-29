import React from 'react';
import {Icon} from "antd";
import classes from './Event.module.scss'

const Event = ({data}) => {
    return (
        <>
            {data.map((item, idx) => (

                <div className={classes.eventFeedWrapper} key={idx}>
                    <Icon component={() => (<img alt='bell icon' src={item.icon}/>)}/>
                    <div className={classes.content}>
                        <h3>{item.title}</h3>
                        <p>{item.text}</p>
                    </div>

                </div>

            ))}
        </>
    );
};

export default Event;
