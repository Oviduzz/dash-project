import React, {Component} from 'react';
import {Button, Icon} from "antd";
import classes from './Lessons.module.scss'
import downloadIcon from "../../../assets/Images/downloadIcon.svg";

class Lessons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lessons: [
        {
          title: 'Globalism vs Isolationism',
          lessonsType: ['Handout']
        },
        {
          title: 'Globalism vs Isolationism',
          lessonsType: ['Ebook', 'Transcript', 'Handout']
        },
        {
          title: 'Globalism vs Isolationism',
          lessonsType: ['Presentation', 'Audiobook']
        },
        {
          title: 'Globalism vs Isolationism',
          lessonsType: ['Handout', 'Audiobook']
        },
        {
          title: 'Globalism vs Isolationism',
          lessonsType: ['Ebook', 'Transcript', 'Presentation']
        },
        {
          title: 'Globalism vs Isolationism',
          lessonsType: ['Ebook', 'Presentation', 'Audibook']
        },

        {
          title: 'Globalism vs Isolationism',
          lessonsType: ['Ebook']
        },
      ]
    }
  }

  render() {
    return (
      <div className={classes.lessonsWrapper}>
        <div className={classes.topButton}>
          <Button>Download All Course Files
            <Icon component={() => (<img alt='delete icon' src={downloadIcon}/>)}/>
          </Button>
        </div>
        <div>{this.state.lessons.map((item, idx) => (
          <div className={classes.contentWrapper} key={idx}>
            <div className={classes.circle}>{idx + 1}</div>
            <h2 className={classes.contentTitle}>{item.title}</h2>
            <div className={classes.buttonWrapper}>
              {item.lessonsType.map((type, idx) => (
                <Button key={idx}>
                  {type}
                  <Icon component={() => (<img alt='delete icon' src={downloadIcon}/>)}/>
                </Button>
              ))}
            </div>

          </div>
        ))}</div>
      </div>
    );
  }
}

export default Lessons;
