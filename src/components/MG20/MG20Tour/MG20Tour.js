import React, {Component} from 'react';
import classes from './MG20Tour.module.scss';
import ButtonAutoWidth from "../../Utils/ButtonAutoWidth";
import CycleComponent from "./CycleComponent/CycleComponent";
import cycle1 from '../../../assets/Images/cycle1.svg';
import cycle2 from '../../../assets/Images/cycle2.svg';
import cycle3 from '../../../assets/Images/cycle3.svg';
import cycle4 from '../../../assets/Images/cycle4.svg';
import reference1 from '../../../assets/Images/reference1.svg';
import reference2 from '../../../assets/Images/reference2.svg';
import reference3 from '../../../assets/Images/reference3.svg';
import watchTour from '../../../assets/Images/watchTour.svg';
import workshop1 from '../../../assets/Images/workshop1.svg';
import workshop2 from '../../../assets/Images/workshop2.svg';
import workshop3 from '../../../assets/Images/workshop3.svg';
import workshop4 from '../../../assets/Images/workshop4.svg';
import ReferenceTour from "./ReferenceTour/ReferenceTour";
import StudentClub from "./StudentClub/StudentClub";
import AboutMg20 from "./AboutMg20/AboutMg20";
import TourStepsBox from "./TourStepsBox/TourStepsBox";
import {Icon} from "antd";
import {navigate} from "@reach/router";

class Mg20Tour extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cycleData: [
        {
          id: 1,
          name: 'All'
        }, {
          id: 2,
          name: 'Getting Started'
        }, {
          id: 3,
          name: 'Sustainability'
        }, {
          id: 4,
          name: 'Climate Action'
        }, {
          id: 5,
          name: 'Global Leadership'
        }, {
          id: 6,
          name: 'Community'
        }, {
          id: 7,
          name: 'Technology'
        }, {
          id: 8,
          name: 'Global Health'
        }, {
          id: 9,
          name: 'Green Energy'
        }, {
          id: 10,
          name: 'Identity'
        },
      ],
      studentData: [
        {
          id: 1,
          image: cycle1,
          title: 'Building Community'
        },
        {
          id: 2,
          image: cycle2,
          title: 'Improv(e) your public speaking'
        },
        {
          id: 3,
          image: cycle3,
          title: 'Comparing Leadership styles'
        },
        {
          id: 4,
          image: cycle2,
          title: 'Improv(e) your public speaking'
        },
        {
          id: 5,
          image: cycle4,
          title: 'Asking Questions & Active Listening'
        },
      ],
      contentData: [
        {
          id: 1,
          image: cycle1,
          title: 'Cycle 1'
        },
        {
          id: 2,
          image: cycle2,
          title: 'Cycle 2'
        },
        {
          id: 3,
          image: cycle3,
          title: 'Cycle 3'
        },
        {
          id: 4,
          image: cycle2,
          title: 'Cycle 4'
        },
        {
          id: 5,
          image: cycle4,
          title: 'Cycle 5'
        },
      ],
      monthlyAwards: {
        studentOfTheMonth: {
          id: 1,
          name: 'Klara O.',
          academy: 'Dominican Academy',
          interests: ['Global Education', 'Sustainability']
        },
        clubOfTheMonth: {
          id: 1,
          name: 'Club Abc',
          academy: 'Orange Academy',
          interests: ['Global Education', 'Sustainability']
        }
      },
      referenceGuides: [
        {
          id: 1,
          image: reference1,
          title: "Educator's Guide",
          description: 'A look at the learning goals and explanation of the thinking that informs our curriculum design.' +
            ' This guide includes useful tips and best practices to help you create a dynamic extracurricular learning experience for students.'
        },
        {
          id: 2,
          image: reference2,
          title: "Simulation Guide",
          description: 'A look at the learning goals and explanation of the thinking that informs our curriculum design.' +
            ' This guide includes useful tips and best practices to help you create a dynamic extracurricular learning experience for students.'
        },
        {
          id: 3,
          image: reference3,
          title: "Community Pages",
          description: 'A look at the learning goals and explanation of the thinking that informs our curriculum design.' +
            ' This guide includes useful tips and best practices to help you create a dynamic extracurricular learning experience for students.'
        },
      ],
      students: [
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          attendance: 36,
          something: 33,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          attendance: 36,
          something: 33,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          attendance: 36,
          something: 33,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          attendance: 36,
          something: 33,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          attendance: 36,
          something: 33,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          attendance: 36,
          something: 33,
        },
      ],
      tourDetails: [{
        id: 1,
        step: 1,
        title: 'Let’s go through a few steps to get started with MG20inAction',
        description: 'Let’s have a look at the reference guides first.'
      }, {
        id: 2,
        step: 2,
        title: 'Lorem Ipsum',
        description: 'The reference guide is  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Donec in neque quis massa finibus mollis. Integer nibh dolor, euismod placerat nunc non, molestie finibus enim.'
      }, {
        id: 3,
        step: 3,
        title: 'Lorem Ipsum 3',
        description: 'The reference guide is  Lorem ipsum dolor sit amet, consectetur adipiscing elit. ' +
          'Donec in neque quis massa finibus mollis. Integer nibh dolor, euismod placerat nunc non, molestie finibus enim.'
      }],
      stepNr: 1,
      refElems: [],
      isStudent: false,
      isTour: true,
      workshop: [{
        image: cycle1,
        title: 'Building Community',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida sem ac enim sagittis faucibus in ac mi. Integer lacus enim, auctor sed finibus eu, ullamcorper condimentum nisi. Praesent imperdiet porttitor nisl vitae volutpat. Phasellus at vulputate lectus, non tempus metus. Ut sed augue et mi feugiat pulvinar. Mauris convallis magna non mi faucibus dignissim.' +
          ' Ut eget pretium turpis. Vestibulum ut enim et urna dictum hendrerit a vitae tortor.',
        workshopItems: [
          {
            tip: 'week1',
            image: workshop1,
            title: 'Workshop',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in neque quis massa finibus mollis.',
          },
          {
            tip: 'week2',
            image: workshop2,
            title: 'impACT Preparation',
            description: 'Integer nibh dolor, euismod placerat nunc non, molestie finibus enim.',
          },
          {
            tip: 'week3',
            image: workshop3,
            title: 'impACT: Global Priorities Simulation',
            description: 'Sed sodales posuere urna sed tincidunt. Vivamus mattis augue non quam hendrerit maximus. Aliquam varius aliquam lectus, at scelerisque nibh hendrerit vel. ',
          },
          {
            tip: 'week4',
            image: workshop4,
            title: 'Global Connections',
            description: 'Morbi ac sollicitudin augue.',
          },
        ]
      }]
    };
    this.refsArray = [];
  }

  setStep = () => {
    //logic for steps
    if (this.state.stepNr === 5) {
      this.setState({stepNr: 1})
    } else {
      this.setState({stepNr: this.state.stepNr + 1});
    }

    // you can set the refs to wherever you want to move the window
    switch (this.state.stepNr) {
      case 1:
        window.scrollTo(0, this.refsArray[0].offsetTop);
        break;
      case 2:
        window.scrollTo(0, this.refsArray[1].offsetTop);
        break;
      case 3:
        window.scrollTo(0, this.refsArray[2].offsetTop);
        break;
      default:
        break;
    }

  };

  hideTour = () => {
    this.setState({isTour: false});
    window.scrollTo(0, 0);
  };

  sendToWorkshop = () => {
    navigate('/mg20Tour/workshop', {state: this.state.workshop});
  };

  changeView = () => {
    // handle views from student to teacher
    this.setState({isStudent: !this.state.isStudent})
  };

  render() {
    return (
      <>
        <div className={classes.contentWrapper}>
          <div style={{cursor: 'pointer', position: 'absolute', top: '12%', left: '28%'}}
               onClick={() => this.changeView()}><Icon type='swap'/></div>
          <div className={classes.topWrapper}>
            {this.state.isStudent ? <h1>Browse Workshops</h1> : <h1>Find Your Cycle</h1>}
            <div className={classes.cycleButtons}>
              {
                this.state.cycleData.map((cycle, idx) => (
                  <ButtonAutoWidth text={cycle.name} key={idx}/>
                ))
              }

            </div>
            {this.state.isStudent && <div className={classes.watchTour}>
              <img src={watchTour} alt=""/>
              <div>
                <h3>You’re not assigned to any workshop yet</h3>
                <p>Once your facilitator assigns a new workshop for you, you’ll be able to access it from here.</p>
              </div>
            </div>}
          </div>
          <div className={classes.cycleWrapper}>
            {
              !this.state.isStudent && this.state.contentData.map((content, idx) => (
                <CycleComponent image={content.image} title={content.title} sendToWorkshop={this.sendToWorkshop} key={idx}/>
              ))
            }
            {
              this.state.isStudent && this.state.studentData.map((content, idx) => (
                <CycleComponent image={content.image} title={content.title} sendToWorkshop={this.sendToWorkshop} key={idx}/>
              ))
            }

          </div>
        </div>
        <ReferenceTour isStudent={this.state.isStudent} monthlyAwards={this.state.monthlyAwards}
                       referenceGuides={this.state.referenceGuides} reference={(ref) => this.refsArray.push(ref)}/>
        {!this.state.isStudent &&
        <StudentClub students={this.state.students} reference={(ref) => this.refsArray.push(ref)}/>}
        <AboutMg20 reference={(ref) => this.refsArray.push(ref)}/>
        {(!this.state.isStudent && this.state.isTour) &&
        <TourStepsBox hideTour={this.hideTour} tourDetails={this.state.tourDetails} setStepFn={this.setStep}
                      stepNumber={this.state.stepNr}/>}
      </>
    );
  }
}

export default Mg20Tour;
