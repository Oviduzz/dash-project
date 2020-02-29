import React, {Component} from 'react';
import classes from './MG20LandingPage.module.scss';
import FullButton from "../Utils/FullButton";
import landingImage from '../../assets/Images/MG20LandingImage.svg';
import landingImageBottom from '../../assets/Images/MG20LandingBottom.svg';
import BorderedButton from "../Utils/BorderedButton";
import {Input, Modal} from "antd";
import {navigate} from "@reach/router";

class Mg20LandingPage extends Component {
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
      <>
        <div className={classes.containerWrapper}>
          <div className={classes.twoColumnsLanding}>
            <div className={classes.contentTopLanding}>
              <h1>MG20 In Action.</h1>
              <p>Discover workshops, simulations, global challenges, and more.</p>
              <div className={classes.buttonWrapper}>
                <FullButton text='I Have a Code' openModal={(e) => {
                  e.stopPropagation();
                  this.setState({showModal: true});
                }}/>
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
                  <button onClick={(e) => {
                    navigate('/mg20Tour')
                  }}>Join</button>
                </Modal>
                <BorderedButton text='Request a Code'/>
              </div>
            </div>
            <div>
              <img src={landingImage} alt=""/>
            </div>
          </div>
        </div>
        <div className={classes.contentBottomWrapper}>
          <div className={classes.twoColumnsLanding}>
            <img src={landingImageBottom} alt=""/>
            <div className={classes.bottomContent}>
              <h2>About MG20 In Action</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla gravida sem ac enim sagittis faucibus in
                ac mi. Integer lacus enim, auctor sed finibus eu, ullamcorper condimentum nisi. Praesent imperdiet
                porttitor nisl vitae volutpat. </p>
              <p>
                Phasellus at vulputate lectus, non tempus metus. Ut sed augue et mi feugiat pulvinar. Mauris convallis
                magna non mi faucibus dignissim.</p>
              <p>
                Ut eget pretium turpis. Vestibulum ut enim et urna dictum hendrerit a vitae tortor. Nullam accumsan leo
                non purus ultrices tempor. Mauris et pharetra augue. Phasellus volutpat viverra ex eget tempor.
                Curabitur non eleifend augue. Maecenas a lacinia libero, ac ornare dui.</p>
              <p>
                Donec sit amet massa vel purus ultricies posuere. Cras vel lorem fermentum orci elementum consectetur.
                Proin gravida egestas velit ut ultricies.
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Mg20LandingPage;
