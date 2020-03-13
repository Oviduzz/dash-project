
import React, {Component} from 'react';
import classes from "./ModalCommunity.module.scss";
import {AutoComplete, Icon, Input, Modal} from "antd";
import arrowSelect from "../../../assets/Images/arrowSelect.svg";
const { Option } = AutoComplete;

class ModalInviteFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelected: false
    }
  }
   option2 = this.props.users.map((obj, idx) => (
    <Option key={obj.name} value={obj.name} className='optionSelectFriend'>
      <div className={classes.searchFriendWrapper}>
        <div><img src={obj.pictureUrl} alt=""/></div>
        <div className={classes.searchFriendDetails}>
          <h3>{obj.name}</h3>
          <span>{obj.email}</span>
        </div>
      </div>
    </Option>
  ));
  render() {
    return (
      <Modal
        title="Basic Modal"
        visible={this.props.visible}
        onCancel={(ev) => this.props.onCancel(ev)}
        closable={false}
        footer={null}
        wrapClassName='modalInviteFriend'
      >
        <div className={classes.inviteFriendModal}>
          <h3>Invite a Friend</h3>
          <AutoComplete
            dataSource={this.option2}
            style={{ width: '100%' }}
            optionLabelProp="value"
            onSelect={() => this.setState({userSelected: true})}
          >
            <Input placeholder='Search' style={{  width: "100%"}}  prefix={<Icon type="search" />} suffix={<Icon component={() => (<img alt='bell icon' src={arrowSelect}/>)}/>}/>
          </AutoComplete>
        </div>
        <div className={classes.modalButtonInvite}>
          <button
            disabled={!this.state.userSelected}
            onClick={(ev) => this.props.onInvite(ev)}>Invite</button>
        </div>

      </Modal>
    );
  }
}

export default ModalInviteFriend;
