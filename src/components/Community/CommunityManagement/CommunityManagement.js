import React, {Component} from 'react';
import MembersManagement from "./MembersManagement";
import TopContainerBar from "./TopContainerBar";
import WidgetCommunityManagement from "./WidgetCommunityManagement";
import classes from './CommunityManagement.module.scss';
import {Tabs} from "antd";
import ModalRemoveUser from "../ModalComponents/ModalRemoveUser";
const { TabPane } = Tabs;

class CommunityManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      communityUsers: [
        {
        id: 1,
        pictureUrl: 'https://i.pravatar.cc/70?img=60',
        name: 'Tim Garnet',
        kpi: 6,
        isApproved: false,
      },{
        id: 2,
        pictureUrl: 'https://i.pravatar.cc/70?img=60',
        name: 'Tim Garnet',
        kpi: 6,
        isApproved: false,
      },{
        id: 3,
        pictureUrl: 'https://i.pravatar.cc/70?img=60',
        name: 'Tim Garnet',
        kpi: 6,
        isApproved: false,
      },{
        id: 4,
        pictureUrl: 'https://i.pravatar.cc/70?img=60',
        name: 'Tim Garnet',
        kpi: 6,
        isApproved: true,
      },{
        id: 5,
        pictureUrl: 'https://i.pravatar.cc/70?img=60',
        name: 'Tim Garnet',
        kpi: 6,
        isApproved: true,
      },{
        id: 6,
        pictureUrl: 'https://i.pravatar.cc/70?img=60',
        name: 'Tim Garnet',
        kpi: 6,
        isApproved: true,
      },
      ],
      communityDetails: {
        id: 1,
        name: 'Knovva',
        members: 1516
      },
      modalState: false
    }
  }
  callback = (key) => {
    console.log(key);
  };
  removeUser = () => {
    // capture ID when we want to remove to get infos
    this.setState({modalState: true})
  };

  onRemoveUser = () => {
    // do some request when we want to remove user
  };
  onBanUser = () => {
    // do some request when we want to ban user
  };

  handleCancel = (ev) => {
    ev.preventDefault();
    this.setState({modalState: false})
  };
  render() {
    return (
      <div className={classes.managementWrapper}>
        <div>
          <Tabs defaultActiveKey="1" onChange={() => this.callback} className='tabsFromCommunityManagement'>
            <TabPane tab="Member Management" key="1">
              <TopContainerBar/>
              {this.state.communityUsers.map((user, idx) => (
                <MembersManagement {...user} removeUser={this.removeUser} key={idx}/>
              ))}
            </TabPane>
            <TabPane tab="Community Settings" key="2">
              Content of Community Settings
            </TabPane>
          </Tabs>

        </div>
        <div>
          <WidgetCommunityManagement {...this.state.communityDetails}/>
        </div>
        <ModalRemoveUser visible={this.state.modalState} onRemove={this.onRemoveUser} onBan={this.onBanUser} onCancel={this.handleCancel}/>
      </div>


    );
  }
}

export default CommunityManagement;
