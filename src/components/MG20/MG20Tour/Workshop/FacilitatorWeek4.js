import React, {Component} from 'react';
import classes from "./Workshop.module.scss";
import {navigate} from "@reach/router";
import {Button, Icon, Menu, Tabs} from "antd";
import arrowLeft from "../../../../assets/Images/arrowLeft.svg";

import downloadIcon from "../../../../assets/Images/downloadIcon.svg";
import i4_f_1a from "../../../../assets/Images/4_f_1a.png";
import i4_f_1b from "../../../../assets/Images/4_f_1b.png";
import i4_f_2 from "../../../../assets/Images/4_f_2.png";
import i4_s_1a from "../../../../assets/Images/4_s_1a.png";
import i4_s_1b from "../../../../assets/Images/4_s_1b.png";
import i4_s_2a from "../../../../assets/Images/4_s_2a.png";
import i4_s_2b from "../../../../assets/Images/4_s_2b.png";


const {TabPane} = Tabs;

class FacilitatorWeek4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      section: [{
        title: 'Session Snapshot',
        description: 'Over the next 60 minutes, students will be presented with an issue of real-world significance that has many possible solutions. The goal of the impACT Preparation session is for students to research and develop strong, relevant, and convincing arguments that answer this pressing issue.\n' +
          '\n' +
          'All students will learn about key Stakeholders (people or organizations with an interest and investment in the issue) and then they will be assigned the role of one of these Stakeholders to represent in the simulation. During next week’s impACT Simulation, students will deliver their arguments and ideas for a solution in front of a board of judges called the Deciding Committee.',
        learn: [{
          text: 'How to build an argument that supports a solution to a problem. '
        }, {
          text: 'Understand the role of a stakeholder by exploring the different voices and positions that exist in local and global affairs.'
        },],
        reflect: [{
          text: 'Consider how to best represent their stakeholder’s interests and present a convincing argument for their position.',
        }, {
          text: 'Practice anticipating and responding to arguments from different perspectives than their own.',
        }]
      }],
      item: props.location.state,
      current: 'mail',
    }
  }

  callback = (key) => {

  }
  changeView = () => {
    // handle views from student to teacher
    this.setState({isStudent: !this.state.isStudent})
  };
  render() {
    return (
      <>
        <div style={{cursor: 'pointer', position: 'absolute', top: '12%', left: '28%'}} onClick={() => this.changeView()}>
          <Icon type='swap'/></div>
        <div className={classes.sectionTopContainer}>
          <div className={classes.sectionTopWrapper}>
            <div className={classes.goB} onClick={() => navigate('/mg20Tour/workshop', {state: this.state.item})}>
              <Icon component={() => (<img alt='bell icon' src={arrowLeft}/>)}/>
              <span>Go Back</span>
            </div>
            <div className={classes.sectionTopContent}>
              <img src={this.state.item.image} alt=""/>
              <div className={classes.sectionText}>
                <h3>{this.state.item.item.title}</h3>
                <p>Preparation Guide</p>
              </div>
            </div>
          </div>
        </div>
        <div className={classes.sectionDetailed}>
         { !this.state.isStudent &&  <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="impACT Brief" key="1">
              <div className={classes.buttonWrapper}>
                <Button>Download as pdf
                  <Icon component={() => (<img alt='delete icon' src={downloadIcon}/>)}/>
                </Button>
                <Button className={classes.buttonFull}>Continue
                  <Icon type='arrow-right'/>
                </Button>
              </div>
              <div className={classes.longTextClass}>

                <h4>
                  Global Connections
                </h4>

                <strong>
                  Session Snapshot
                </strong>
                <br/>
                <h4>
                  Students will...
                </h4>
                <h4>
                  Learn
                </h4>
                <ul>
                  <li>
                    Learn about current events going on in the world and in their communities.
                  </li>
                  <li>
                    Practice skills of communication and perspective-taking, including how to respect varying points of
                    view and support opinions with facts.
                  </li>
                </ul>
                <h4>
                  Reflect
                </h4>
                <ul>
                  <li>
                    Express opinions and engage in thoughtful and respectful discourse with their peers.
                  </li>
                  <li>
                    Consider the impact and importance of current events and issues on a global scale.
                  </li>
                </ul>
                <h4>
                  Make Connections
                </h4>
                <ul>
                  <li>
                    Apply their understanding of current events and global issues to their own lives and communities.
                  </li>
                </ul>
                  <br/><br/>
                  <strong>
                    Session Prep
                  </strong>
                  <p>
                    Materials needed:
                  </p>
                  <ul>
                    <li>
                      timekeeping device
                    </li>
                    <li>
                      pens or pencils
                    </li>
                    <li>
                      computer with internet access and projector (optional)
                    </li>
                    <li>
                      copies of a current news article or piece of media
                    </li>
                    <li>
                      loose-leaf paper
                    </li>
                    <li>
                      club schedule
                    </li>
                    <li>
                      table and chairs for the group (we recommend sitting around a large table or setting up the chairs
                      in a circle)
                    </li>
                    <li>
                      Global Connections Discussion Questions
                    </li>
                  </ul>
                  <p>
                    <b>Time:</b> 60 minutes
                  </p>
                  <p>
                    Please take breaks as needed during club meetings.
                  </p>
                  <br/><br/>
                  <strong>
                    Choosing a Current Event
                  </strong>
                  <p>
                    You are responsible for finding and bringing in a current event, such as an article, podcast, video,
                    or documentary, to engage and lead the group in a moderated discussion. Try to find an event that
                    highlights the topic from the previous week&rsquo;s simulation in a local or timely context. The
                    faculty advisor should work with the week's session facilitator to choose a current event and
                    prepare to lead the discussion following the steps outlined below.
                  </p>
                  <ol start="1">
                    <li>
                      1. Take a look at the impACT Brief from the most recent simulation and identify the global issue.
                    </li>
                  </ol>
                  <ol start="2">
                    <li>
                      2. Conduct research to find out what is currently happening with that issue in local, national, or
                      international communities.
                    </li>
                  </ol>
                  <ol start="3">
                    <li>
                      3. From the research findings, choose a current event to share with the club for discussion.
                      Materials for discussion may come from a wide variety of sources, including:
                    </li>
                  </ol>
                  <ul>
                    <li style={{paddingLeft: '50px'}}>
                      articles from news outlets, such as local newspapers, MSNBC, CCTV, BBC, Reuters
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      podcasts, such as NPR, The Guardian, Stanford Social Innovation Review
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      journal articles or research/policy briefs, such as G20, McKinsey &amp; Co.
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      games that focus on global issues
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      documentaries
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      video clips such as TED Talks
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      blog posts
                    </li>
                  </ul>
                  <p>
                    Feel free to share more than one example, such as two short articles, an article and a video, or an
                    article and a podcast, but be mindful of the club's meeting time. For example, if you choose to
                    screen a two-hour documentary, but the club only meets for an hour each week, ensure that you will
                    be able to finish the film the following week.
                  </p>
                  <ol start="4">
                    <li>
                      4. Review the current event and write down any thoughts or questions that come to mind. While we
                      have prepared a list of suggested discussion questions, we encourage you to come up with
                      additional questions specific to the current event you choose.
                    </li>
                  </ol>
                  <ol start="5">
                    <li>
                      5. Gather any materials needed. For example, if you&rsquo;re showing a documentary or listening to
                      a podcast, make sure that a computer and a projector with speakers are available. If you&rsquo;re
                      sharing an article, provide printed or digital copies for everyone.
                    </li>
                  </ol>
                  <ol start="6">
                    <li>
                      6. Post the link to your current event on the mG20 in Action Community Forum and extend the
                      discussion from your club to the global community! In a few sentences, explain why it caught your
                      interest, and include any questions, thoughts, or ideas you have on the topic. Then, invite club
                      members to post their reactions and thoughts to get a global perspective on the issue.
                    </li>
                  </ol>
                  <br/>

                  <strong>
                    Session Plan
                  </strong>
                  <p>
                    <a href="#">
                      Introduction (20 minutes)
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Discussion (35 minutes)
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Wrap-Up (5 minutes)
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Additional Activities
                    </a>
                  </p>
                  <br/>
                  <strong>
                    Introduction (20 minutes)
                  </strong>
                  <h4>
                    Step 1: Introduce the current event.
                  </h4>
                  <p>
                    Explain why it caught your interest and what made you want to share it for further discussion.
                    Include any questions it brought up for you that you would like to explore with the group.
                  </p>
                  <h4>
                    Step 2: Hand out copies of the current event, if applicable. Hand out pens and loose-leaf paper.
                  </h4>
                  <p>
                    Explain that everyone will take time to read/view/listen to the current event first, and then
                    discuss it as a group. Encourage club members to write down questions or comments as they go.
                  </p>
                  <h4>
                    Step 3: Allow club members time to engage with the current event.
                  </h4>
                  <p>
                    Keep the personalities in the group in mind, and adjust accordingly. If the current event is
                    text-based, decide if reading aloud, individually, or in pairs will work best for the group.
                  </p>
                  <p>
                    Depending on the topic, and the length of the current event, the discussion may run longer or
                    shorter than expected. Always be aware of the time during the meeting, and make sure to end the
                    discussion with a few minutes left for club members to debrief.
                  </p>
                  <p>
                    On the other hand, if the discussion runs much shorter than expected, check out the Additional
                    Activities&nbsp;for some quick and easy strategies to get the discussion flowing again!
                  </p>
                  <br/>
                  <strong>
                    Discussion (35 minutes)
                  </strong>
                  <h4>
                    Step 1: Share the goals and guidelines for the discussion.
                  </h4>
                  <p>
                    Explain that the goal of the discussion is to help club members become aware of and discuss
                    contemporary issues, challenge their assumptions, and broaden their perspectives. Remind the group
                    that they may be exposed to viewpoints, values, and opinions that differ from their own. All club
                    members should feel comfortable expressing their opinions; each one of them brings a different and
                    valuable perspective to the community and to the discussion.
                  </p>
                  <p>
                    Take a short amount of time to talk about these guidelines for a good group discussion:
                  </p>
                  <ul>
                    <li>
                      Give each speaker your full attention.
                    </li>
                    <li>
                      Make sure everyone in the group is heard. If you feel you have been speaking a lot, see if someone
                      else would like to. If you haven&rsquo;t spoken up yet, try to share your perspective with the
                      group.
                    </li>
                    <li>
                      If you don&rsquo;t understand something someone said, or find it confusing, ask clarifying
                      questions. For example, &ldquo;Can you provide an example so I can understand better?&rdquo;
                    </li>
                    <li>
                      When sharing personal opinions, it&rsquo;s most effective to support your statements with evidence
                      and sources. Remember, if you disagree, disagree with the statement, not the person.
                    </li>
                  </ul>
                  <h4>
                    Step 2: Moderate a group discussion.
                  </h4>
                  <p>
                    Make sure everyone is sitting in a circle and has a copy of the Global Connections Discussion
                    Questions. For the first three questions, go around the group in a circle and allow everyone to
                    respond. After the first three questions, allow the group to respond directly to one another, pose
                    questions from the handout to the group, or come up with their own.
                  </p>
                  <h4>
                    Tips for Moderating Great Group Discussion
                  </h4>
                  <ul>
                    <li>
                      If students start talking at the same time, try saying "Let's have [Student 1] and then [Student
                      2] right after." This acknowledges that both will get their time to speak.
                    </li>
                    <li>
                      Encourage reflection. If someone shares that they liked the article, probe further and ask them to
                      clarify what they liked about it.
                    </li>
                    <li>
                      Look for opportunities to engage everyone. If someone has not spoken much, try asking them to
                      share their opinion or comment on something another group member said.
                    </li>
                    <li>
                      Show patience with the process. It takes some time to develop a group dynamic where everyone feels
                      at ease.
                    </li>
                  </ul>
                  <br/>
                  <strong>
                    Wrap-Up (5 minutes)
                  </strong>
                  <h4>
                    Step 1: Thank all members for participating in the discussion. Reflect on the session with the
                    following questions:
                  </h4>
                  <ul>
                    <li>
                      How did the group do? Was the discussion productive, interesting, informative, and/or respectful?
                    </li>
                    <li>
                      What new ideas do you have about the issue that you didn&rsquo;t have before?
                    </li>
                  </ul>
                  <h4>
                    Step 2: Go Global! Remind club members to visit the mG20 in Action Community Forum and exchange
                    their perspective on current events posted by other club chapters around the world. They can also
                    read and respond to what members from other clubs have to say about today's topic.
                  </h4>
                  <p>
                    <img title="" src={i4_f_1a} alt="" style={{maxHeight: '300px'}}/>
                    <img title="" src={i4_f_1b} alt="" style={{maxHeight: '300px'}}/>
                  </p>

                  <br/><br/>
                  <strong>
                    Additional Activities
                  </strong>
                  <h4>
                    Scavenger Hunt
                  </h4>
                  <p>
                    Conduct a current events scavenger hunt! To conduct a scavenger hunt, pose a question whose answer
                    can be found by going back to the current event. Questions could include: &ldquo;Who is the
                    author?&rdquo; or &ldquo;Find a sentence directly from the current event that most clearly
                    summarizes the issues presented.&rdquo;
                  </p>
                  <p>
                    The activity can be performed individually, but it is often more fun and interactive when done in
                    pairs or small groups. You can even create a friendly competition in which the group that gives the
                    correct answer the fastest wins that round. You can also ask club members to create scavenger hunt
                    questions and trade them with each other.
                  </p>
                  <h4>
                    Concentric Circles
                  </h4>
                  <p>
                    Divide members into two groups and arrange them into two circles: one inside circle and one outside
                    circle. Each person on the outside is paired with a person from the inside; they should stand facing
                    each other. Take a look at the questions below (or come up with some of your own) and select one to
                    call out to the whole group. Each pair shares their thoughts with one another. After two minutes,
                    tell the groups to rotate. The people on the outside circle move over one place to the right so they
                    are standing in front of a different person. Now ask a new question, and repeat the process.
                  </p>
                  <h4>
                    Concentric Circles Questions
                  </h4>
                  <ul>
                    <li>
                      When are you at your best? When are you most creative? What&rsquo;s the difference between a fact
                      and an opinion?
                    </li>
                    <li>
                      What has had the biggest influence on you in your life?
                    </li>
                    <li>
                      What&rsquo;s possible for you in your life? What is your biggest dream? What is the best way to
                      research something?
                    </li>
                    <li>
                      What&rsquo;s the difference between research and using Wikipedia?
                    </li>
                    <li>
                      What would your superpower be and why?
                    </li>
                    <li>
                      As a child, what did you want to be when you grew up?
                    </li>
                    <li>
                      What is your favorite time of the day and why?
                    </li>
                    <li>
                      What is your favorite TV show?
                    </li>
                    <li>
                      Do you think you could live without your smartphone (or other technology items) for 24 hours? Why
                      or why not?
                    </li>
                  </ul>


              </div>
            </TabPane>
            <TabPane tab="Session Snapshot & Prep" key="2">
              <div className={classes.longTextClass}>

                <strong>
                  Global Connections Discussion Questions
                </strong>
                <h4>
                  Fact-Finding Questions
                </h4>
                <ul>
                  <li>
                    Where is the issue occurring?
                  </li>
                  <li>
                    Who is this issue primarily affecting? Why is this issue significant?
                  </li>
                  <li>
                    What is the evidence presented? Who are the stakeholders?
                  </li>
                  <li>
                    Which stakeholder perspective is the current event highlighting?
                  </li>
                </ul>
                <img title="" src={i4_f_2} alt="" style={{display: 'inline', width: '300px'}} />

                <h4>
                  Issue-In-Context Questions
                </h4>
                <ul>
                  <li>
                    Which issues and trends are local? Which are global?

                  </li>
                  <li>
                    What effect does/will this issue have on local, national, and international communities?
                  </li>
                  <li>
                    Does this issue affect your life directly? If so, how?
                  </li>
                  <li>
                    Does this issue affect anyone you know, such as your parents, teachers, relatives, or community members? If so, how?
                  </li>
                </ul>
                <h4>
                  Perspective-Taking Questions
                </h4>
                <ul>
                  <li>
                    Does this current event contain any bias? Why or why not?
                  </li>
                  <li>
                    Consider this current event from a different stakeholder&rsquo;s viewpoint. How might the tone or information change?
                  </li>
                </ul>
                <h4>
                  Reflection Questions
                </h4>
                <ul>
                  <li>
                    Are there any quotes/passages/images that you feel strongly about?
                  </li>
                  <li>
                    What is your opinion on this issue? Why?
                  </li>
                  <li>
                    Has your opinion on this issue changed in any way as a result of the simulation we just finished?
                  </li>
                  <li>
                    Does this current event challenge any views you have on this issue?
                  </li>
                  <li>
                    Now I am wondering __________________________________.
                  </li>
                  <li>
                    What are your recommendations to solve or deal with the issue?
                  </li>
                </ul>

              </div>
            </TabPane>
          </Tabs>}
          { this.state.isStudent &&  <Tabs defaultActiveKey="1" onChange={this.callback}>
            <TabPane tab="impACT Brief" key="1">
              <div className={classes.buttonWrapper}>
                <Button>Download as pdf
                  <Icon component={() => (<img alt='delete icon' src={downloadIcon}/>)}/>
                </Button>
                <Button className={classes.buttonFull}>Continue
                  <Icon type='arrow-right'/>
                </Button>
              </div>
             <div className={classes.longTextClass}>

               <h4>
                 Global Connections
               </h4>
               <strong>
                 Choosing a Current Event
               </strong>
               <p>
                 The session facilitator is responsible for finding and bringing in a current event, such as an article, podcast, video, or documentary, to engage and lead the group in a moderated discussion. Try to find an event that highlights the topic from the previous week&rsquo;s simulation in a local or timely context. The faculty advisor should work with the week's session facilitator to choose a current event and prepare to lead the discussion following the steps outlined below.
               </p>
               <ol start="1">
                 <li>
                   1. Take a look at the impACT Brief from the most recent simulation and identify the global issue.
                 </li>
               </ol>
               <ol start="2">
                 <li>
                   2. Conduct research to find out what is currently happening with that issue in local, national, or international communities.
                 </li>
               </ol>
               <ol start="3">
                 <li>
                   3. From the research findings, choose a current event to share with the club for discussion. Materials for discussion may come from a wide variety of sources, including:
                 </li>
               </ol>
               <ul>
                 <li style={{paddingLeft: '50px'}}>
                   articles from news outlets, such as local newspapers, MSNBC, CCTV, BBC, Reuters
                 </li>
                 <li style={{paddingLeft: '50px'}}>
                   podcasts, such as NPR, The Guardian, Stanford Social Innovation Review
                 </li>
                 <li style={{paddingLeft: '50px'}}>
                   journal articles or research/policy briefs, such as G20, McKinsey &amp; Co.
                 </li>
                 <li style={{paddingLeft: '50px'}}>
                   games that focus on global issues
                 </li>
                 <li style={{paddingLeft: '50px'}}>
                   documentaries
                 </li>
                 <li style={{paddingLeft: '50px'}}>
                   video clips such as TED Talks
                 </li>
                 <li style={{paddingLeft: '50px'}}>
                   blog posts
                 </li>
               </ul>
               <p>
                 Feel free to share more than one example, such as two short articles, an article and a video, or an article and a podcast, but be mindful of the club's meeting time. For example, if you choose to screen a two-hour documentary, but the club only meets for an hour each week, ensure that you will be able to finish the film the following week.
               </p>
               <ol start="4">
                 <li>
                   4. Review the current event and write down any thoughts or questions that come to mind. While we have prepared a list of suggested discussion questions, we encourage you to come up with additional questions specific to the current event you choose.
                 </li>
               </ol>
               <ol start="5">
                 <li>
                   5. Gather any materials needed. For example, if you&rsquo;re showing a documentary or listening to a podcast, make sure that a computer and a projector with speakers are available. If you&rsquo;re sharing an article, provide printed or digital copies for everyone.
                 </li>
               </ol>
               <ol start="6">
                 <li>
                   6. Post the link to your current event on the mG20 in Action Community Forum and extend the discussion from your club to the global community! In a few sentences, explain why it caught your interest, and include any questions, thoughts, or ideas you have on the topic. Then, invite club members to post their reactions and thoughts to get a global perspective on the issue.
                 </li>
               </ol>
               <p>

                 <img title="" src={i4_s_1b} alt="" style={{height: '300px'}}  />
                 <img title="" src={i4_s_1a} alt="" style={{height: '300px'}} />
               </p>


             </div>
            </TabPane>
            <TabPane tab="Session Snapshot & Prep" key="2">
              <div className={classes.longTextClass}>

                <strong>
                  Global Connections
                </strong>
                <p>
                  During Global Connections sessions, you will explore and discuss current events going on in the world
                  and in your community. You will practice skills of communication and perspective-taking, including how
                  to respect different points of view, support your opinions with facts, and engage in thoughtful and
                  respectful discussion about today's pressing issues.
                </p>
                <p>
                </p>
                <table width="100%">
                  <tbody>
                  <tr>
                    <td colSpan="2" rowSpan="1">
                      <h4>
                        Is it your week to choose a current event for discussion?
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="2">
                      <h4>
                        Yes
                      </h4>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <h4>
                        No
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Get a global perspective.
                      </p>
                      <p>
                        Post your reactions and thoughts
                      </p>
                      <p>
                        on a variety of issues.
                      </p>
                      <p>
                        Visit Community Pages
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <br/>
                  <strong>
                    Choosing a Current Event
                  </strong>
                  <p>
                    If it&rsquo;s your week to lead the group in a current events discussion, use this guide to help you
                    choose your current event and prepare!
                  </p>
                  <p>
                    As the session facilitator, you are responsible for finding and bringing in a current event, such as
                    an article, podcast, video, or documentary, to engage and lead the group in a moderated discussion.
                    Try to find an event that highlights the topic from the previous week&rsquo;s simulation in a local
                    or timely context. The faculty advisor should work with the week's session facilitator to choose a
                    current event and prepare to lead the discussion following the steps outlined below.
                  </p>
                  <ol start="1">
                    <li>
                      1. Take a look at the impACT Brief from the most recent simulation and identify the global issue.
                    </li>
                  </ol>
                  <ol start="2">
                    <li>
                      2. Conduct research to find out what is currently happening with that issue in local, national, or
                      international communities.
                    </li>
                  </ol>
                  <ol start="3">
                    <li>
                      3. From the research findings, choose a current event to share with the club for discussion.
                      Materials for discussion may come from a wide variety of sources, including:
                    </li>
                  </ol>
                  <ul>
                    <li style={{paddingLeft: '50px'}}>
                      articles from news outlets, such as local newspapers, MSNBC, CCTV, BBC, Reuters
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      podcasts, such as NPR, The Guardian, Stanford Social Innovation Review
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      journal articles or research/policy briefs, such as G20, McKinsey &amp; Co.
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      games that focus on global issues
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      documentaries
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      video clips such as TED Talks
                    </li>
                    <li style={{paddingLeft: '50px'}}>
                      blog posts
                    </li>
                  </ul>
                  <p>
                    Feel free to share more than one example, such as two short articles, an article and a video, or an
                    article and a podcast, but be mindful of the club's meeting time. For example, if you choose to
                    screen a two-hour documentary, but the club only meets for an hour each week, ensure that you will
                    be able to finish the film the following week.
                  </p>
                  <ol start="4">
                    <li>
                      4. Review the current event and write down any thoughts or questions that come to mind. While we
                      have prepared a list of suggested discussion questions, we encourage you to come up with
                      additional questions specific to the current event you choose.
                    </li>
                  </ol>
                  <ol start="5">
                    <li>
                      5. Gather any materials needed. For example, if you&rsquo;re showing a documentary or listening to
                      a podcast, make sure that a computer and a projector with speakers are available. If you&rsquo;re
                      sharing an article, provide printed or digital copies for everyone.
                    </li>
                  </ol>
                  <ol start="6">
                    <li>
                      6. Post the link to your current event on the mG20 in Action Community Forum and extend the
                      discussion from your club to the global community! In a few sentences, explain why it caught your
                      interest, and include any questions, thoughts, or ideas you have on the topic. Then, invite club
                      members to post their reactions and thoughts to get a global perspective on the issue.
                    </li>
                  </ol>
                  <p>
                    <img title="" src={i4_s_2a} alt="" style={{height: '300px'}}/>
                    <img title="" src={i4_s_2b} alt="" style={{height: '300px'}}/>
                  </p>


              </div>
            </TabPane>
          </Tabs>}
        </div>
      </>
  );
  }
  }

  export default FacilitatorWeek4;
