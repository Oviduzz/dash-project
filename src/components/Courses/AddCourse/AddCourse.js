import React, {Component} from 'react';
import {Icon, Input, Modal} from "antd";
import classes from './AddCourse.module.scss'


class AddCourse extends Component {

  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
  }

  handleCancel = (ev) => {
    ev.stopPropagation();
    this.setState({showModal: false})
  };

  render() {
    return (
      <div className={classes.addCourseWrapper} onClick={(e) => {
        e.stopPropagation();
        this.setState({showModal: true});
      }}>
        <div className={classes.details}>
          <span className={classes.title}>Have a code?</span>
          <span className={classes.subtitle}>Add a course</span>
        </div>
        <Icon type="plus" />
        <Modal
          title="Basic Modal"
          visible={this.state.showModal}
          onCancel={(ev) => this.handleCancel(ev)}
          closable={false}
          footer={null}
          wrapClassName='modalCourse'
        >
          <h3>Enter your class code</h3>
          <Input placeholder="Code"/>
          <button>Join</button>
        </Modal>
      </div>
    );
  }
}
export default AddCourse
