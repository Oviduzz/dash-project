import React, {Component} from 'react';
import {Modal} from "antd";
import classes from "./ModalCommunity.module.scss";
import ModalDetailsComponent from "./ModalDetailsComponent";

class ModalRemoveUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fullName: 'Rachel Lund',
        email: 'rachel.lund@knovva.com',
        memberSince: '09-12-2019',
        status: 'Active'
      },
    }
  }

  componentDidMount() {
    //call for user details based on userId
  }


  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.visible}
        onCancel={(ev) => this.props.onCancel(ev)}
        closable={false}
        footer={null}
        wrapClassName='modalRemoveUser'
      >
        <div className={classes.removeUserBodyModal}>
          <ModalDetailsComponent title="Full Name" details={this.state.user.fullName}/>
          <ModalDetailsComponent title="Email" details={this.state.user.email}/>
          <ModalDetailsComponent title="Member since" details={this.state.user.memberSince}/>
          <ModalDetailsComponent title="Status" details={this.state.user.status}/>
          <div className={classes.userLetter}>
            {this.state.user.fullName.charAt(0).toUpperCase()}
          </div>
        </div>
        <div className={classes.modalButtonWrapper}>
          <button onClick={(ev) => this.props.onRemove(ev)}>Remove user from this community</button>
          <button onClick={(ev) =>this.props.onBan(ev)}>Ban user from this community</button>
        </div>

      </Modal>
    );
  }
}

export default ModalRemoveUser;
