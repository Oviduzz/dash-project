import React from "react";
import {Router} from "@reach/router";
import {Layout} from "antd";
import Header from '../Header/Header'
import Menu from '../Menu/Menu'
import Dashboard from "../../Dashboard/Dashboard";
import Events from "../../Events/Events";
import Course from "../../Courses/Course";
import Mg20LandingPage from "../../MG20/Mg20LandingPage";
import Mg20Tour from "../../MG20/MG20Tour/MG20Tour";
import Workshop from "../../MG20/MG20Tour/Workshop/Workshop";
import WorkshopSection from "../../MG20/MG20Tour/Workshop/WorkshopSection";
import Community from "../../Community/Community";
import JourneyRoad from "../../Community/CommunityPosts/JourneyRoad";
import OtherPosts from "../../Community/CommunityPosts/OtherPosts";
import CreateEditCommunity from "../../Community/CreateEditCommunity/CreateEditCommunity";
import EditCommunity from "../../Community/CreateEditCommunity/EditCommunity";
import DynamicCommunityComponent from "../../Community/CommunityPosts/DynamicCommunityComponent";

const {Content, Footer} = Layout;

const CustomLayout = () => {
  return (
    <Layout style={{minHeight: "100vh", letterSpacing: '0.5px'}}>

        <Layout>
          <Header/>

          <Menu/>
          <Content>
            <Router primary={false}>
              <Dashboard path='/dashboard'/>
              <Events path='/events'/>
              <Course path='/courses'/>
              <Mg20LandingPage path='/mg20'/>
              <Mg20Tour path='/mg20Tour'/>
              <Workshop path='/mg20Tour/workshop'/>
              <WorkshopSection path='/mg20Tour/workshop-section'/>
              <Community path='/community'>
                <JourneyRoad path='/journey'/>
                <OtherPosts path='/general'/>
                <CreateEditCommunity path='/create-community'/>
                <EditCommunity path='/edit-community'/>
                <DynamicCommunityComponent path='/:route'/>
              </Community>
            </Router>
          </Content>


          <Footer/>
        </Layout>
    </Layout>
  );
};

export default CustomLayout;
