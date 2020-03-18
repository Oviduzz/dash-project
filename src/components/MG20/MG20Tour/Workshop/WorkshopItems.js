import React, {Component} from 'react';
import {Icon} from "antd";
import arrowRight from "../../../../assets/Images/arrowRight.svg";
import classes from './Workshop.module.scss';
import {navigate} from "@reach/router";

class WorkshopItems extends Component {
  constructor(props) {
    super(props);
  }

  navigateToSection = () => {
    switch (this.props.item.tip) {
      case 'week1':
        navigate('facilitator-week1', {state: {item:this.props.item, image: this.props.image},});
        break;
      case 'week2':
        navigate('facilitator-week2', {state:  {item:this.props.item, image: this.props.image},});
        break;
      case 'week3':
        navigate('facilitator-week3', {state:  {item:this.props.item, image: this.props.image},});
        break;
      case 'week4':
        navigate('facilitator-week4', {state:  {item:this.props.item, image: this.props.image},});
        break;
      default:
        navigate('facilitator-week1', {state:  {item:this.props.item, image: this.props.image},})
    }

  }

  changeView = () => {
    // handle views from student to teacher
    this.setState({isStudent: !this.state.isStudent})
  };

  render() {
    return (
      <>
        <div style={{cursor: 'pointer', position: 'absolute', top: '12%', left: '28%'}} onClick={() => this.changeView()}>
          <Icon type='swap'/></div>
        <div className={classes.workshopItemsWrapper} onClick={() => this.navigateToSection()}>
          <div className={classes.imgWrapper}>
            <img src={this.props.item.image} alt=""/>
          </div>
          <div className={classes.itemDetails}>
            <h3>{this.props.item.title}</h3>
            <p>{this.props.item.description}</p>
          </div>
          <Icon component={() => (<img alt='bell icon' src={arrowRight}/>)}/>
        </div>
      </>
    );
  }
}

export default WorkshopItems;
