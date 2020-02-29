import React, {Component} from 'react';
import classes from './DashboardContent.module.scss'
import DashboardFeed from "./DashboardFeed/DashboardFeed";
import DashboardWidget from "./DashboardWidget/DashboardWidget";
import millestone from "../../../assets/Images/millestone.png";
import enroll from "../../../assets/Images/enroll.png";
import message from "../../../assets/Images/message.png";
import success from "../../../assets/Images/success.png";
import students from "../../../assets/Images/students.png";
import courses from "../../../assets/Images/courses.png";
import lessons from "../../../assets/Images/lessons.png";
import trophyStudent from "../../../assets/Images/trophyStudent.svg";


const teacherFeedData = [
  {
    icon: millestone,
    title: 'Milestone Reached',
    text: "You've just enrolled your 1000th student. Congratulations!",
    updatedAt: '6hrs ago',
    feedType: 'milestone'
  },
  {
    icon: enroll,
    title: 'You have a new',
    updatedAt: '6hrs ago',
    text: 'just enrolled into your course',
    feedType: 'enroll',
    studentName: 'Jessica Pearson',
    courseName: 'Living in a Connected'
  },
  {
    icon: enroll,
    title: 'You have a new',
    text: 'just enrolled into your course',
    courseName: 'Living in a connected',
    studentName: 'Harvey Spector',
    updatedAt: '6hrs ago',
    feedType: 'enroll'
  },
  {
    icon: message,
    title: "You've got a message",
    text: "just asked a question about",
    updatedAt: '6hrs ago',
    feedType: 'message',
    studentName: 'Mike Ross',
    courseName: 'Living in a Connected'
  },
  {
    icon: millestone,
    title: 'Milestone Reached',
    text: "You've just published your 5th course",
    updatedAt: '6hrs ago',
    feedType: 'milestone'
  },
  {
    icon: success,
    title: 'Your course was successfully',
    text: "was just published. Start inviting students",
    courseName: 'The word of Trees',
    updatedAt: '6hrs ago',
    feedType: 'success'
  }
];
const teacherWidgetData = [
  {
    totalNumber: 125,
    text: 'Total Students',
    icon: students
  },
  {
    totalNumber: 3,
    text: 'Courses',
    icon: courses
  },
  {
    totalNumber: 68,
    text: 'Lessons',
    icon: lessons
  }
];

const studentFeedData = [
  {
    icon: millestone,
    title: 'Milestone Reached',
    text: "You've successfully finished your 5th Quiz!",
    updatedAt: '6hrs ago',
    feedType: 'milestone'
  },
  {
    icon: message,
    title: "You've got a message",
    text: "replied to your message",
    updatedAt: '6hrs ago',
    feedType: 'message',
    studentName: 'Mike Ross',
    courseName: ''
  },
  {
    icon: success,
    title: 'New lessons',
    text: "2 new lessons were added to",
    courseName: 'The word of Trees',
    updatedAt: '6hrs ago',
    feedType: 'success-student'
  },
  {
    icon: millestone,
    title: 'Milestone Reached',
    courseName: 'The word of Trees',
    text: "You've enrolled into your first course",
    updatedAt: '6hrs ago',
    feedType: 'enroll-student'
  }
];
const studentWidgetData = [
  {
    totalNumber: 1,
    text: 'Enrolled MyCourses',
    icon: students
  },
  {
    totalNumber: 14,
    text: 'Completed Lessons',
    icon: courses
  },
  {
    totalNumber: 9,
    text: 'Completed Assignments',
    icon: lessons
  },
  {
    totalNumber: 5,
    text: 'Completed Quizzes',
    icon: trophyStudent
  }
];


class DashboardContent extends Component {
  constructor(props) {
    // good practice is to have default props even we are not using later
    super(props)
    // add default state if we need to
  }

  componentDidMount() {
    // here we can call API and set in state and replace dummy data from constants above
  }

  render() {
    // const {info} = useContext(StudentViewContext);
    return (
      this.props.isStudent  ? isStudent() : isTeacher()
    )
  }
}

// we have different components depending on data that we have from server, for student and for teacher
const isTeacher = () => {
  return (
    <div className={classes.dashboardContentWrapper}>
      <div className={classes.feedContainer}>
        <DashboardFeed data={teacherFeedData}/>
      </div>
      <div className={classes.widgetContainer}>
        <DashboardWidget data={teacherWidgetData}/>
      </div>
    </div>
  );
};

const isStudent = () => {
  return (
    <div className={classes.dashboardContentWrapper}>
      <div className={classes.feedContainer}>
        <DashboardFeed data={studentFeedData}/>
      </div>
      <div className={classes.widgetContainer}>
        <DashboardWidget data={studentWidgetData}/>
      </div>
    </div>
  );
};

export default DashboardContent;




