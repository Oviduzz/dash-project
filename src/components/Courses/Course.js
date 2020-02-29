import React, {Component} from 'react';
import {Icon} from "antd";
import TeacherCoursePage from "./TeacherCoursePage/TeacherCoursePage";
import StudentCoursesPage from "./StudentCoursePage/StudentCoursesPage";
class Course extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isStudent: true
    }
  }

  changeView = () => {
    // handle views from student to teacher
    this.setState({isStudent: !this.state.isStudent})
  };
  render() {
    return (
      <div >
        <div style={{cursor: 'pointer', position: 'absolute', top: '12%', left: '28%'}} onClick={() => this.changeView()}><Icon type='swap'/></div>
        {this.state.isStudent ?  <StudentCoursesPage/> : <TeacherCoursePage/>}

      </div>
    );
  }
}

export default Course;
