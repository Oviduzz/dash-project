import React, {Component} from 'react';
import classes from "../Community.module.scss";
import {Icon} from "antd";
import heartGreyIcon from "../../../assets/Images/heartGreyIcon.svg";
import messageGreyIcon from "../../../assets/Images/messageGreyIcon.svg";
import eyeGreyIcon from "../../../assets/Images/eyeGreyIcon.svg";
import ModalCommunity from "../CreateEditCommunity/ModalCommunity";

class PostComponent extends Component {
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
    const {image, title, community, postedBy, favorites, isPrivate, isRegistered} = this.props;
    return (
      <div className={classes.postWrapper} onClick={(e) => {
        e.stopPropagation();
        this.setState({showModal: true})
      }}>
        <ModalCommunity
          visible={this.state.showModal}
          onCancel={(ev) => this.handleCancel(ev)}
        />
        <div className={classes.imageBox}>
          <img src={image} alt=""/>
        </div>
        <div className={classes.contentWrapper}>
          <div className={classes.postDetails}>
            <h2>{title}</h2>
            <p>{community}</p>
          </div>
          <div className={classes.bottomPostWrapper}>
            <div className={classes.iconWrapper}>

              <div>
                <Icon component={() => (<img alt='bell icon' src={heartGreyIcon}/>)}/>
                <span className={classes.numberOfVotes}>{favorites.likes}</span>
              </div>
              <div>
                <Icon component={() => (<img alt='bell icon' src={messageGreyIcon}/>)}/>
                <span className={classes.numberOfVotes}>{favorites.messages}</span>
              </div>
              <div>
                <Icon component={() => (<img alt='bell icon' src={eyeGreyIcon}/>)}/>
                <span className={classes.numberOfVotes}>{favorites.views}</span>
              </div>

            </div>
            <span className={classes.postedBy}>
            {postedBy}
          </span>
          </div>
        </div>
      </div>
    );
  }
}

export default PostComponent;
