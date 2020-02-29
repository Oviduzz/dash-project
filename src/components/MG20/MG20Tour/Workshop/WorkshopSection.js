import React, {Component} from 'react';
import classes from "./Workshop.module.scss";
import {navigate} from "@reach/router";
import {Button, Icon, Menu, Tabs} from "antd";
import arrowLeft from "../../../../assets/Images/arrowLeft.svg";
import bulb from "../../../../assets/Images/bulb.svg";
import learn from "../../../../assets/Images/learn.svg";
import TextFragments from "./TextFragments";
import downloadIcon from "../../../../assets/Images/downloadIcon.svg";
const { TabPane } = Tabs;
class WorkshopSection extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      section: [{
        title: 'Session Snapshot',
        description: 'Over the next 60 minutes, students will be presented with an issue of real-world significance that has many possible solutions. The goal of the impACT Preparation session is for students to research and develop strong, relevant, and convincing arguments that answer this pressing issue.\n' +
          '\n' +
          'All students will learn about key Stakeholders (people or organizations with an interest and investment in the issue) and then they will be assigned the role of one of these Stakeholders to represent in the simulation. During next week’s impACT Simulation, students will deliver their arguments and ideas for a solution in front of a board of judges called the Deciding Committee.',
        learn: [{
          text: 'How to build an argument that supports a solution to a problem. '
        }, {
          text: 'Understand the role of a stakeholder by exploring the different voices and positions that exist in local and global affairs.'
        },],
        reflect: [{
          text: 'Consider how to best represent their stakeholder’s interests and present a convincing argument for their position.',
        }, {
          text: 'Practice anticipating and responding to arguments from different perspectives than their own.',
        }]
      }],
      item: props.location.state,
      current: 'mail',
    }
  }

  callback = (key) => {
    console.log(key);
  }

  render() {
    return (
      <>

        <div className={classes.sectionTopContainer}>
          <div className={classes.sectionTopWrapper}>
            <div className={classes.goB} onClick={() => navigate('/mg20Tour/workshop', {state: this.state.item})}>
              <Icon component={() => (<img alt='bell icon' src={arrowLeft}/>)}/>
              <span>Go Back</span>
            </div>
            <div className={classes.sectionTopContent}>
              <img src={this.state.item.image} alt=""/>
              <div className={classes.sectionText}>
                <h3>{this.state.item.item.title}</h3>
                <p>Preparation Guide</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sectionDetailed}>
          <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="impACT Brief" key="1">
              <div className={classes.buttonWrapper}>
                <Button>Download as pdf
                  <Icon component={() => (<img alt='delete icon' src={downloadIcon}/>)}/>
                </Button>
                <Button className={classes.buttonFull}>Continue
                  <Icon type='arrow-right'/>
                </Button>
              </div>
              <div className={classes.sectionDescription}>
                <h3>{this.state.section[0].title}</h3>
                <p>{this.state.section[0].description}</p>
              </div>
              <div className={classes.moreDetails}>
                <div className={classes.titleDetails}>
                  <img src={learn} alt=""/>
                  <h2>Learn</h2>
                </div>

                <div className={classes.textFragmentWrapper}>
                  {this.state.section[0].learn.map(item => (
                    <TextFragments text={item.text}/>
                  ))}
                </div>
              </div>
              <div className={classes.moreDetails}>
                <div className={classes.titleDetails}>
                  <img src={bulb} alt=""/>
                  <h2>Reflect</h2>
                </div>
                <div className={classes.textFragmentWrapper}>
                  {this.state.section[0].reflect.map(item => (
                    <TextFragments text={item.text}/>
                  ))}
                </div>

              </div>
            </TabPane>
            <TabPane tab="Session Snapshot & Prep" key="2">
              Content of Tab Pane 2
            </TabPane>
            <TabPane tab="Session Plan" key="3">
              Content of Tab Pane 3
            </TabPane>
            <TabPane tab="Instructions for Students" key="4">
              Content of Tab Pane 4
            </TabPane>
            <TabPane tab="Resources" key="5">
              Resources
            </TabPane>
          </Tabs>,

        </div>
      </>
    );
  }
}

export default WorkshopSection;
