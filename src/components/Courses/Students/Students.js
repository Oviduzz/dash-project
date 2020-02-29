import React, {Component} from 'react';
import {Avatar, Button, Icon} from "antd";
import StudentWidget from "./StudentWidget";
import classes from './Students.module.scss'
import notifyIcon from "../../../assets/Images/notifyIcon.svg";
import mailIcon from "../../../assets/Images/mailIcon.svg";
import fileIcon from "../../../assets/Images/fileIcon.svg";

class Students extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          lessons: 23,
          quizzes: 33,
          assignments: 80,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          lessons: 23,
          quizzes: 33,
          assignments: 80,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          lessons: 23,
          quizzes: 33,
          assignments: 80,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          lessons: 23,
          quizzes: 33,
          assignments: 80,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          lessons: 23,
          quizzes: 33,
          assignments: 80,
        },
        {
          pictureUrl: 'https://i.pravatar.cc/150?img=30',
          name: 'Johnny',
          surname: 'McMahonnovic',
          lessons: 23,
          quizzes: 33,
          assignments: 80,
        },
      ]

    }
  }

  render() {
    return (
      <div className={classes.studentWrapper}>
        <div className={classes.buttonWrapper}>
          <Button>Message All Students
            <Icon component={() => (<img alt='delete icon' src={notifyIcon}/>)}/>
          </Button>
          <Button>Email All Students
            <Icon component={() => (<img alt='delete icon' src={mailIcon}/>)}/>
          </Button>
          <Button>Print
            <Icon component={() => (<img alt='delete icon' src={fileIcon}/>)}/>
          </Button>
        </div>
        {this.state.students.map((student, idx) => (
          <div className={classes.contentWrapper} key={idx}>
           <div className={classes.avatarWrapper}>
             <Avatar
               shape="circle"
               icon={"user"}
               src={student.pictureUrl}
             />
           </div>
            <div className={classes.notifyButtons}>
              <Button>
                <Icon component={() => (<img alt='delete icon' src={notifyIcon}/>)}/>
              </Button>
              <Button>
                <Icon component={() => (<img alt='delete icon' src={mailIcon}/>)}/>
              </Button>
            </div>
            <div className={classes.nameWrapper}>
              <span>{student.name}</span>
              <span>{student.surname}</span>
            </div>
            <div className={classes.widgetWrapper}>
              <StudentWidget number={student.lessons} name='Lessons'/>
              <StudentWidget number={student.quizzes} name='Quizzes'/>
              <StudentWidget number={student.assignments} name='Assignments'/>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Students;
