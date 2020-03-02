import React, {Component} from 'react';
import {Button, Form, Icon, Input, Select, Switch, Upload} from "antd";
import classes from "../Community.module.scss";
import uploadIcon from "../../../assets/Images/uploadIcon.svg";

const {Option} = Select;
const { TextArea } = Input;
class CreateEditCommunity extends Component {

  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {
    // api handle
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  };

  handleSelectChange = value => {
    console.log(value);
    // this.props.form.setFieldsValue({
    //   note: `Hi, ${value === 'male' ? 'man' : 'lady'}!`,
    // });
  };

  handleReset = () => {
    this.props.form.resetFields();
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
    // const { getFieldDecorator } = this.props.form;
    // use getFieldDecorator to add rules (like required fields and patterns and all of that)

    const uploadButton = (
      <div>
        <Icon component={() => (<img alt='edit' src={uploadIcon}/>)}/>
      </div>
    );
    const {imageUrl} = this.state;

    return (
      <div className={classes.createCommunity}>
        <Form onSubmit={this.handleSubmit} className='form-community'>
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
          <Form.Item label="Display Name">
            <Input placeholder='Better make it good'/>
          </Form.Item>
          <Form.Item label="Url Name">
            <Input placeholder='Be original'/>
          </Form.Item>

          <Form.Item label="Description">
            <TextArea placeholder='Write your life’s work here' rows={5}/>
          </Form.Item>

          <Form.Item label="Add Administrators/Moderators">
            <Select
              placeholder="Enter username"
              onChange={this.handleSelectChange}
            >
              <Option value="user1">John Doe</Option>
              <Option value="user2">Ovidiu Grigoras</Option>
            </Select>
          </Form.Item>
          <div className={classes.bottomForm}>
            <Form.Item>
              <Switch checkedChildren="Public" unCheckedChildren="Private" defaultChecked />
            </Form.Item>
            <Form.Item>
              <div className={classes.buttonsForm}>
                <Button onClick={this.handleReset}>
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </div>
            </Form.Item>
          </div>

        </Form>
      </div>
    );
  }
}

export default CreateEditCommunity;
