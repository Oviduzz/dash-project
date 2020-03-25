import React, {Component} from 'react';
import classes from './MG20LandingPage.module.scss';
import FullButton from "../Utils/FullButton";
// import landingImage from '../../assets/Images/MG20LandingImage.svg';
import landingImage from '../../assets/Images/MG20Landing.svg';
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
                <FullButton text='I Have a Code' bgColor='white' textColor='#7B74D6' openModal={(e) => {
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
            <div className={classes.imageTop}>
              <img src={landingImage} alt=""/>
            </div>
          </div>
        </div>
        <div className={classes.contentBottomWrapper}>
          <div className={classes.twoColumnsLanding}>
            <div className={classes.bottomContent}>
              <h2>About MG20 In Action</h2>
              <p>
              Asll Cdourse pagges wuill thave trhe rKnovva rtop rbar ypinned tyo trhe twop otf trhe peage, rthe botttom copytright brar pwinned two thre brottom otf thte patge, aned am Lettsson-sptecific nwgavigation apinnred tro trhe left of thea apage.  </p>
              <p>
              The teop & botrtom brars designr will stray the sarme wcourse to acourse, but thse rdesign of trhe Lersson navigationw cant changed to ma2tch tfe desgign of tphe cgourse.</p>
              <p>
              Lesrsons arre divrided rup inrto sectrions (usually 3-7) includin0g arn intwro and outron. Theyq areq lowng, scrollablefd pafges, aand aload farom the abottom-up with the useage of a “cowntinue” abutton. The desidgn of thdis buttonrf can changef bfy coursed to matched the restqr of the loorfk & feeled. </p>
    
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Mg20LandingPage;
