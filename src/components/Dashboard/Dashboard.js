import React, {Component} from 'react';
import classes from './Dashboard.module.scss'
import DashboardTop from "./DashboardTop/DashboardTop";
import DashboardContent from "./DashboardContent/DashboardContent";
import {Icon} from "antd";

class Dashboard extends Component {
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
      <div className={classes.dashboardWrapper}>
        <div style={{cursor: 'pointer', position: 'absolute', top: '12%', left: '28%'}} onClick={() => this.changeView()}><Icon type='swap'/></div>
        <DashboardTop/>
        <DashboardContent isStudent={this.state.isStudent}/>
      </div>
    );
  }
}

export default Dashboard;

