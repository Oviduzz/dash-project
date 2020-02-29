import React from 'react';
import classes from "./CategoryCourse.module.scss";
import {Icon, Progress} from "antd";
import FullButton from "../../Utils/FullButton";
import EmptyButton from "../../Utils/EmptyButton";
import AddCourse from "../AddCourse/AddCourse";

const AllCourses = ({courseData}) => {
  return (
    <>
      <div className={classes.bigContainer}>
        {courseData.map((course, idx) => (
          <div className={classes.courseFeedWrapper} key={idx}>

            <Icon component={() => (<img alt='bell icon' src={course.image}/>)}/>

            <div className={classes.content}>
              <h3>{course.title}</h3>
              <p>{course.text}</p>
              <div className={classes.courseDetails}>
                <div>
                  <span className={classes.courseNumbers}>{course.lessons}</span>
                  <span className={classes.courseNumberTitles}>Lessons</span>
                </div>
                <div>
                  <span className={classes.courseNumbers}>{course.assignments}</span>
                  <span className={classes.courseNumberTitles}>Assignments</span>
                </div>
                <div>
                  <span className={classes.courseNumbers}>{course.quizzes}</span>
                  <span className={classes.courseNumberTitles}>Quizzes</span>
                </div>
              </div>
              {
                course.enrolled ? <FullButton text='Continue'/> : <EmptyButton text='Request Access'/>
              }
            </div>
            {
              course.enrolled && <div className='percentBlock'>
                <Progress type="circle" percent={course.progress} strokeColor='#5865d2' width={70}/>
              </div>
            }
            {
              course.enrolled && <div className='percentBlock-small'>
                <Progress type="circle" percent={course.progress} strokeColor='#5865d2' width={50}/>
              </div>
            }

          </div>
        ))}
      </div>
      <AddCourse/>
    </>
  )
};

export default AllCourses;
