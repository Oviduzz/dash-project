import React, {Component} from 'react';
import classes from "../Community.module.scss";
import {Badge, Button, Form, Icon, Input, Select} from "antd";
import heartGreyIcon from "../../../assets/Images/heartGreyIcon.svg";
import messageGreyIcon from "../../../assets/Images/messageGreyIcon.svg";
import eyeGreyIcon from "../../../assets/Images/eyeGreyIcon.svg";
import modalImage from "../../../assets/Images/modalImage.png";
import arrowSelect from "../../../assets/Images/arrowSelect.svg";
import commentsIcon from "../../../assets/Images/commentsIcon.svg";
import commentsBlueIcon from "../../../assets/Images/commentsBlueIcon.svg";
import reportGreyIcon from "../../../assets/Images/reportGreyIcon.svg";

const InputGroup = Input.Group;
const {Option} = Select;
const { TextArea } = Input;

class ModalBody extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showText: false
    }
  }

  showTextArea = () => {
    this.setState({showText: !this.state.showText})
  }

  render() {
    const {title, academyName, postDate, favorites, postImage, text, comments} = this.props;

    return (
      <>
        <div className={classes.modalContentWrapper}>
          <div className={classes.modalBodyTop}>
            <h3>{title}</h3>
            <p><span>{academyName}</span> posted on {postDate} </p>
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
          </div>
          <div className={classes.modalImageContainer}>
            <img src={postImage} alt=""/>
          </div>
          <div className={classes.modalText}>
            <p>{text.first}</p>
            <p>{text.second}</p>
            <p>{text.third}</p>
          </div>
        </div>
        <div className={classes.modalDiscussion}>
          <h3>Discussion</h3>
          <div className={classes.modalBarDiscussion}>
            <div className={classes.modalDiscussionTop}>
              <div className={classes.leftPart}>
                <InputGroup compact>
                  <Input placeholder='Search' style={{width: "200px"}} prefix={<Icon type="search"/>}/>
                  <Select defaultValue="everything" className='selectTop'
                          suffixIcon={<Icon component={() => (<img alt='bell icon' src={arrowSelect}/>)}/>}>
                    <Option value="everything">This Thread</Option>
                    <Option value="newValue">Something</Option>
                  </Select>

                </InputGroup>
              </div>
            </div>
            <div className={classes.rightPartTopModal}>
              <div className='sortByContainer'>
                <span>Sort by</span>
                <Select defaultValue="everything" className='rightTopModal'
                        suffixIcon={<Icon component={() => (<img alt='bell icon' src={arrowSelect}/>)}/>}>
                  <Option value="everything">Featured</Option>
                  <Option value="newValue">Something</Option>
                </Select>
              </div>
            </div>
          </div>
          {comments.map(com => (
            <div className={classes.commentsWrapper}>

              <div className={classes.commentsUserDetail}>
                <div>B</div>
                <Icon component={() => (<img alt='bell icon' src={commentsIcon}/>)}/>
                <div>
                </div>
              </div>
              <div className={classes.commentsText}>
                <h3>{com.author}</h3>
                <p>{com.content}</p>
                <div className={classes.iconWrapper}>

                  <div>
                    <Icon component={() => (<img alt='bell icon' src={heartGreyIcon}/>)}/>
                    <span className={classes.numberOfVotes}>{com.favorites.likes}</span>
                  </div>
                  <div>
                    <Icon component={() => (<img alt='bell icon' src={reportGreyIcon}/>)}/>
                    <span className={classes.numberOfVotes}>Report</span>
                  </div>
                  <div>
                    <Icon component={() => (<img alt='bell icon' src={commentsBlueIcon}/>)} onClick={this.showTextArea}/>
                    <span className={classes.numberOfVotes}>{com.favorites.comments}</span>
                  </div>

                </div>
                {this.state.showText && <div className={classes.commentArea}>
                  <h3>Your Reply</h3>
                  <TextArea placeholder='Write your life’s work here' rows={5}/>
                  <div className={classes.buttonsForm}>
                    <Button >
                      Cancel
                    </Button>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </div>
                </div>}
              </div>
              <div className={classes.commentsPostedOn}>
                <span>{com.postedOn} days ago</span>
              </div>

            </div>
          ))}


        </div>
      </>
    );
  }
}

export default ModalBody;
