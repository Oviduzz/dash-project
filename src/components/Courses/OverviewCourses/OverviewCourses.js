import React, {Component} from 'react';
import classes from './OverviewCourses.module.scss'
import {Button, Icon, Progress, Upload} from "antd";
import pencilEdit from "../../../assets/Images/pencilEdit.svg";
import uploadIcon from "../../../assets/Images/uploadIcon.svg";
import students from "../../../assets/Images/students.png";
import lessons from "../../../assets/Images/lessons.png";
import trophyStudent from "../../../assets/Images/trophyStudent.svg";


class OverviewCourses extends Component {
  state = {
    loading: false,
    widgetData: [
      {
        totalNumber: 185,
        text: 'Total Students',
        icon: students,
        isInfo: true,
      },
      {
        totalNumber: 23,
        text: 'Lessons Completions',
        icon: lessons,
        isInfo: false,
      },
      {
        totalNumber: 21,
        text: 'Assignments Completions',
        icon: lessons,
        isInfo: false,
      },
      {
        totalNumber: 17,
        text: 'Quizzes Completion',
        icon: trophyStudent,
        isInfo: false
      }
    ]
  };

  // whole logic you can find it on antd docs for upload documents or images
  getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  handleChange = info => {
    if (info.file.status === 'uploading') {
      this.setState({loading: true});
      return;
    }
    if (info.file.status === 'done') {
      // // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl =>
        this.setState({
          imageUrl,
          loading: false,
        })
      );
    }
  };

  render() {
    const uploadButton = (
      <div>
        <Icon component={() => (<img alt='edit' src={uploadIcon}/>)}/>
      </div>
    );
    const {imageUrl} = this.state;
    return (
      <div className={classes.overviewWrapper}>
        <div className={classes.leftWrapper}>
          <div className={classes.uploadPicture}>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              onChange={this.handleChange}
            >
              {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
            </Upload>
          </div>
          <div className={classes.content}>
            <h2>Living in a Connected World</h2>
            <p>
              This course explores the ways in which our world is connected in four major areas: international
              cooperation,
              the global economy, the environment, and cultural differences.
            </p>
          </div>
          <div className={classes.code}>
            <span>SHAlCE-KOI451 </span>
            <Button>
              Edit
              <Icon component={() => (<img alt='edit' src={pencilEdit}/>)}/>
            </Button>
          </div>
        </div>
        <div className={classes.rightWrapper}>
          <>
            {this.state.widgetData.map((obj, idx) => (
              <div className={classes.widgetWrapper} key={idx}>
                <div className={classes.contentWrapper}>
                  <div className={classes.widgetContent}>
                    <span className={classes.number}>{obj.isInfo ? `${obj.totalNumber}` : `${obj.totalNumber}%`}</span>
                    <span className={classes.text}>{obj.text}</span>
                  </div>
                  <Icon component={() => (<img alt='bell icon' src={obj.icon}/>)}/>
                </div>
                {
                  !obj.isInfo &&
                  <Progress percent={obj.totalNumber} showInfo={false}  strokeColor={{
                  '0%': '#7982EA',
                  '100%': '#7982EA'}}/>}
              </div>
            ))}
          </>
        </div>
      </div>
    );
  }
}

export default OverviewCourses;
