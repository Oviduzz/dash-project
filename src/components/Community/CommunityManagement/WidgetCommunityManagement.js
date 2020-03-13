import React, {Component} from 'react';
import classes from './CommunityManagement.module.scss';
import {Icon, Upload} from "antd";
import uploadIcon from "../../../assets/Images/uploadIcon.svg";
import cogBlueIcon from "../../../assets/Images/cogBlueIcon.svg";
class WidgetCommunityManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

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
    // const { getFieldDecorator } = this.props.form;
    // use getFieldDecorator to add rules (like required fields and patterns and all of that)

    const uploadButton = (
      <div>
        <Icon component={() => (<img alt='edit' src={uploadIcon}/>)}/>
      </div>
    );
    const {imageUrl} = this.state;

    return (
      <div>
        <div className={classes.bannerWrapper}>
          <Upload
            name="avatar"
            listType="picture-card"
            className="banner-uploader"
            showUploadList={false}
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            onChange={this.handleChange}
          >
            {imageUrl ? <img src={imageUrl} alt="avatar" style={{width: '100%'}}/> : uploadButton}
          </Upload>
          <span>Edit Community Banner</span>
        </div>
        <div className={classes.communityWidgetDetails}>
          <div>
            <span className={classes.communityDetailsText}>Community Details</span>
            <h3>{this.props.name}</h3>
          </div>
          <div className={classes.members}>
            <span>{this.props.members} Members Online</span>
          </div>
          <Icon component={() => (<img alt='cog icon' src={cogBlueIcon}/>)}/>
        </div>
        <div className={classes.roles}>
          <span>Roles</span>
          <button>+ Add a role</button>
        </div>
      </div>
    );
  }
}

export default WidgetCommunityManagement;
