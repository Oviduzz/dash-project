import React from 'react';
import classes from "./StudentClub.module.scss";
import {Avatar, Button, Icon} from "antd";
import notifyIcon from "../../../../assets/Images/notifyIcon.svg";
import mailIcon from "../../../../assets/Images/mailIcon.svg";
import fileIcon from "../../../../assets/Images/fileIcon.svg";
import deleteIcon from "../../../../assets/Images/deleteIcon.svg";
import plusIcon from "../../../../assets/Images/plusIcon.svg";
import arrowSelect from "../../../../assets/Images/arrowSelect.svg";
import StudentWidget from "../../../Courses/Students/StudentWidget";

const StudentClub = ({students, reference}) => {
  return (
    <div className={classes.studentClub} ref={reference}>
      <h2>Student Club</h2>
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
        <Button>Add a student
          <Icon component={() => (<img alt='delete icon' src={plusIcon}/>)}/>
        </Button>
        <Button>
          <Icon component={() => (<img alt='delete icon' src={arrowSelect}/>)}/>
        </Button>
      </div>
      <div className={classes.studentWrapper}>

        {students.map((student, idx) => (
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
              <Button>
                <Icon component={() => (<img alt='delete icon' src={deleteIcon}/>)}/>
              </Button>
            </div>
            <div className={classes.nameWrapper}>
              <span>{student.name}</span>
              <span>{student.surname}</span>
            </div>
            <div className={classes.widgetWrapper}>
              <StudentWidget number={student.attendance} name='Attendance'/>
              <StudentWidget number={student.something} name='Lorem'/>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default StudentClub;
