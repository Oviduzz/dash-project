import React, {Component} from 'react';
import classes from "./CategoryCourse.module.scss"
import {Icon, Progress, Select} from "antd";
import FullButton from "../../Utils/FullButton";

import EmptyButton from "../../Utils/EmptyButton";
import topDashboardImage from "../../../assets/Images/topDashboardImage.png";
import journey from "../../../assets/Images/journey.svg";
import powerCourse from "../../../assets/Images/powerCourse.svg";
import arrowSelect from "../../../assets/Images/arrowSelect.svg";
import AllCourses from "./AllCourses";
import MyCourses from "./MyCourses";


const allCourseData = [
  {
    id: '1',
    image: topDashboardImage,
    title: 'Living in a Connected World',
    text: 'This course explores the ways in which our world is connected in four major areas: international cooperation, the global economy, the environment, and cultural differences.',
    lessons: 12,
    assignments: 6,
    quizzes: 6,
    progress: 23,
    enrolled: true
  },
  {
    id: '2',
    image: journey,
    title: 'Journey on the Silk Road',
    text: 'Travel back in time to discover how the early days of trade shaped our connected world.',
    lessons: 12,
    assignments: 6,
    quizzes: 6,
    progress: 0,
    enrolled: false
  },
  {
    id: '3',
    image: powerCourse,
    title: 'Powering the Future',
    text: 'Where does our energy come from, and how can we make sure there\'s enough in the future?',
    lessons: 12,
    assignments: 6,
    quizzes: 6,
    progress: 0,
    enrolled: false
  },
  {
    id: '4',
    image: journey,
    title: 'Journey on the Silk Road',
    text: 'Travel back in time to discover how the early days of trade shaped our connected world.',
    lessons: 12,
    assignments: 6,
    quizzes: 6,
    progress: 0,
    enrolled: false
  }
];
const myCourseData = [
  {
    id: '1',
    image: topDashboardImage,
    title: 'Living in a Connected World',
    text: 'This course explores the ways in which our world is connected in four major areas: international cooperation, the global economy, the environment, and cultural differences.',
    lessons: 12,
    assignments: 6,
    quizzes: 6,
    progress: 23,
    enrolled: true
  },
];
const {Option} = Select;

class StudentCoursesPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courseView: 'my-courses'
    };
    this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    console.log(this.state);
    console.log(myCourseData);
    //here we will replace dummy data with API calls, and update the state according to models;
  }

  handleChange(value) {
    this.setState({courseView: value})
  }

  render() {
    return (
      <div className={classes.coursesWrapper}>
        <div className='selectContainer'>
          <Select defaultValue="my-courses" style={{width: 130}} onChange={this.handleChange}
                  suffixIcon={<Icon component={() => (<img alt='bell icon' src={arrowSelect}/>)}/>}>
            <Option value="all-courses">All Courses</Option>
            <Option value="my-courses">My Courses</Option>
          </Select>
        </div>
        <div className={classes.contentWrapper}>
          {this.state.courseView === 'all-courses' ? <AllCourses courseData={allCourseData}/> : <MyCourses courseData={myCourseData}/>}
        </div>
      </div>
    );
  }
}


export default StudentCoursesPage;
