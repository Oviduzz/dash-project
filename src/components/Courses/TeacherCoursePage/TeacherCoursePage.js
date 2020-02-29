import React, {Component} from 'react';
import classes from "./CoursesManagement.module.scss"
import OverviewCourses from "../OverviewCourses/OverviewCourses";
import {Button, Icon} from "antd"
import deleteIcon from "../../../assets/Images/deleteIcon.svg";
import Students from "../Students/Students";
import Lessons from "../Lessons/Lessons";

class TeacherCoursePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'overview'
    }
  }

  componentDidMount() {
    // add later logic
  }

  render() {
    return (
      <div className={classes.coursesWrapper}>
        <div className={classes.coursesMenu}>
          <ul>
            <li  className={(this.state.component === 'overview' ? classes.active : classes.inactive)}
                 onClick={() => this.setState({component: 'overview'})}>Overview</li>
            <li className={(this.state.component === 'lessons' ? classes.active : classes.inactive)}
              onClick={() => this.setState({component: 'lessons'})}>Lessons</li>
            <li
              className={(this.state.component === 'students' ? classes.active : classes.inactive)}
              onClick={() => this.setState({component: 'students'})}> Students</li>
          </ul>
          <Button>
            Archive
            <Icon component={() => (<img alt='delete icon' src={deleteIcon}/>)}/>
          </Button>
        </div>
        {this.state.component === 'overview' && <OverviewCourses/>}
        {this.state.component === 'students' && <Students/>}
        {this.state.component === 'lessons' && <Lessons/>}
      </div>
    );
  }
}

export default TeacherCoursePage;
