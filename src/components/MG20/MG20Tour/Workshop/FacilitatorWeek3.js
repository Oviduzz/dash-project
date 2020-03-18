import React, {Component} from 'react';
import classes from "./Workshop.module.scss";
import {navigate} from "@reach/router";
import {Button, Icon, Menu, Tabs} from "antd";
import arrowLeft from "../../../../assets/Images/arrowLeft.svg";
import downloadIcon from "../../../../assets/Images/downloadIcon.svg";
import i3_f_1 from "../../../../assets/Images/3_f_1.png";
import i3_f_2a from "../../../../assets/Images/3_f_2a.png";
import i3_f_2b from "../../../../assets/Images/3_f_2b.png";
import i3_f_3 from "../../../../assets/Images/3_f_3.png";
import i3_s_2a from "../../../../assets/Images/3_s_2a.png";
import i3_s_2b from "../../../../assets/Images/3_s_2b.png";


const {TabPane} = Tabs;

class FacilitatorWeek3 extends Component {
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
         { !this.state.isStudent && <Tabs defaultActiveKey="1" onChange={this.callback}>
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
                  impACT: Global Priorities
                </h4>
                <strong>
                  Simulation Guide
                </strong>

                <br/><br/>
                  <strong>
                    Session Snapshot
                  </strong>
                  <p>
                    It is time for students to step into the roles they have spent the prior week preparing for, and
                    participate in mG20
                    in Action&rsquo;s impACT: Make Your Case for Global Priorities Simulation. As students represent
                    their stakeholders&rsquo;
                    interests, they will deliver a proposal that addresses an issue of real-world significance in front
                    of a group of
                    competing stakeholders and a board of judges called the Deciding Committee. The goal of the
                    stakeholders is to
                    convince the Deciding Committee that their proposal will have the greatest impact and benefit to the
                    community at
                    large. The outcome of the simulation will rest in a team&rsquo;s ability to make a sound and
                    persuasive argument
                    while balancing the agendas of the competing stakeholders with their own.
                  </p>
                  <p>
                    Students will&hellip;
                  </p>
                  <h4>
                    Learn
                  </h4>
                  <ul>
                    <li>
                      Explore different sides of a real-world issue and consider multiple perspectives.
                    </li>
                    <li>
                      Develop and gain confidence in their public speaking, presentation, critical thinking,
                      note-taking, and teamwork
                      skills.
                    </li>
                    <li>
                      Learn to listen to others with an open yet critical mind.
                    </li>
                  </ul>
                  <h4>
                    Reflect
                  </h4>
                  <ul>
                    <li>
                      Participate in the deliberative process and consider the role of decision makers when deciding on
                      a course of
                      action for an issue.
                    </li>
                  </ul>
                  <h4>
                    Make Connections
                  </h4>
                  <ul>
                    <li>
                      Develop an understanding of the challenges and priorities that occur in local and global affairs.
                    </li>
                    <li>
                      Expand critical thinking, problem-solving, and perspective-taking skills, which are key abilities
                      for college
                      and career readiness.
                    </li>
                  </ul>
                  <p>
                  </p>
                <br/>
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
                        computer and a projector
                      </li>
                      <li>
                        pens or pencils
                      </li>
                      <li>
                        access to the internet for research
                      </li>
                      <li>
                        device for conducting online research
                      </li>
                    </ul>
                    <ul>
                      <li>
                        Time Cards
                      </li>
                      <li>
                        Simulation Format and Guidelines&nbsp;handout
                      </li>
                      <li>
                        impACT Moderator Instructions&nbsp;handout
                      </li>
                      <li>
                        impACT Rubric&nbsp;handout
                      </li>
                    </ul>
                    <p>
                      <b>Time:</b> 75 minutes
                    </p>
                    <p>
                      Please take breaks as needed during club meetings.
                    </p>
                <br/>
                      <h4>
                        Before The Meeting
                      </h4>
                      <ol start="1">
                        <li>
                          1. Print copies of the following materials:
                        </li>
                      </ol>
                      <ul>
                        <li style={{paddingLeft: '50px'}}>
                          one copy of Time Cards&nbsp;
                        </li>
                        <li style={{paddingLeft: '50px'}}>
                          Simulation Format and Guidelines&nbsp;handout
                        </li>
                        <li style={{paddingLeft: '50px'}}>
                          one copy of the impACT Moderator Instructions&nbsp;for each member of the Deciding Committee
                        </li>
                        <li style={{paddingLeft: '50px'}}>
                          three copies of the impACT Rubric&nbsp;for each member of the Deciding Committee
                        </li>
                      </ul>
                      <p>
                        We encourage facilitators to read through these documents before beginning the session so they
                        understand the
                        expectations of each group and can answer any questions.
                      </p>
                      <p>
                        <img title="" style={{maxWidth: '500px'}} src={i3_f_1} alt=""/>
                      </p>
                      <ol start="2">
                        <li>
                          2. Set the stage for the simulation to keep everyone excited and in character! Arrange the
                          tables and chairs in
                          the meeting room for the simulation.
                        </li>
                      </ol>
                      <ol start="3">
                        <li>
                          3. Set up a computer and a projector so you can easily share the impACT Simulation
                          Overview&nbsp;with everyone.
                        </li>
                      </ol>

                <br/><br/>
                        <strong>
                          Session Plan
                        </strong>
                        <p>
                          <a href="#">
                            Team Finalization and Practice (10 minutes)
                          </a>
                        </p>
                        <p>
                          <a href="#">
                            impACT: Global Priorities Simulation (60 minutes)
                          </a>
                        </p>
                        <p>
                          <a href="#">
                            impACT Wrap-up (5 minutes)
                          </a>
                        </p>
                        <br/>
                          <strong>
                            Team Finalization and Practice (10 minutes)
                          </strong>
                          <h4>
                            Step 1: Ask club members to sit in their respective stakeholder teams.
                          </h4>
                          <p>
                            Teams will be allowed 15 minutes to finalize their presentations and practice before the
                            simulation begins.
                          </p>
                          <h4>
                            Step 2: Instruct the Deciding Committee members to sit together.
                          </h4>
                          <p>
                            Distribute copies of the impACT Moderator Instructions and the&nbsp;printed Time
                            Cards&nbsp;to the Deciding
                            Committee. Explain that they should review the instructions as a group. Then, the Deciding
                            Committee should plan who
                            will be speaking at different times during the simulation. They should also use this time to
                            ask the facilitator any
                            questions they may have.
                          </p>
                          <h4>
                            Step 3: Provide a two-minute warning before it is time to begin.
                          </h4>
                          <br/><br/>
                            <strong>
                              impACT: Global Priorities Simulation (60 minutes)
                            </strong>
                            <p>
                              In order to run a smooth and successful simulation, everyone needs to know the guidelines
                              and rules of play, so make
                              sure to take the time and go over steps 1 and 2 with the group before beginning the
                              simulation.
                            </p>
                            <h4>
                              Step 1: Project the impACT Simulation Overview&nbsp;onto the wall and read aloud the seven
                              steps, pausing for any
                              questions. A copy of the overview is provided below.
                            </h4>
                            <p>
                            </p>
                            <table>
                              <tbody>
                              <tr>
                                <td colSpan="2" rowSpan="1">
                                  <p>
                                    impACT Simulation Overview
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="2" rowSpan="1">
                                  <p>
                                    The simulation lasts for 60 minutes. The Deciding Committee is responsible for
                                    moderating and being the
                                    timekeepers during the simulation. They will give teams a warning when they have one
                                    minute remaining,
                                    and another when they have 30 seconds remaining.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    1
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    The Deciding Committee starts the simulation with a welcoming opening statement.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    2
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Then, they direct the stakeholders to deliver their opening statements one by one.
                                    Stakeholders deliver
                                    their opening statements uninterrupted for two minutes each.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    3
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    The Deciding Committee then directs the stakeholders to propose their solution.
                                    Stakeholders deliver
                                    their proposals uninterrupted for three minutes each.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    4
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    After each team presents their proposal, they may field follow-up questions from the
                                    Deciding Committee
                                    about their presentation. The Q&amp;A lasts for five minutes or five questions,
                                    whichever comes first.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    5
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    After all stakeholders present their solutions, there is a three-minute time out
                                    period. During this
                                    time, each team comes together to decide if they would like to revise their closing
                                    statement in any
                                    way.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    6
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    The Deciding Committee then directs each stakeholder to deliver their closing
                                    statement. Stakeholders
                                    deliver their closing statements uninterrupted for two minutes each.
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    7
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    After all closing statements are delivered, the Deciding Committee chooses a winning
                                    proposal.
                                  </p>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                            <h4>
                              Step 2: Distribute a copy of the Simulation Format and Guidelines&nbsp;handout to
                              everyone.&nbsp;Explain that this
                              is the order in which everyone will speak, then review the Participant Rules at the bottom
                              of the handout.
                            </h4>
                            <h4>
                              Step 3: Confirm that teams are ready to make their cases, and let the simulation begin!
                            </h4>
                            <p>
                              The Deciding Committee should now deliver their opening statement and adhere to the format
                              and the instructions as
                              presented.
                            </p>
                            <strong>
                              impACT Wrap-up (5 minutes)
                            </strong>
                            <h4>
                              Step 1: Applaud all club members and thank them for all of their hard work!
                            </h4>
                            <p>
                              Have club members sit, preferably in a circle, and read aloud the following questions one
                              at a time. Give everyone
                              time to reflect, then have them discuss:
                            </p>
                            <ul>
                              <li>
                                What were some challenges you experienced when analyzing this issue through the lens of
                                your stakeholder?
                              </li>
                              <li>
                                Are there other possible solutions to this issue? What alternative compromises might be
                                reached?
                              </li>
                              <li>
                                What new insights have you gained regarding this issue overall?
                              </li>
                              <li>
                                How might this role-play correspond to real-life [insert topic here] negotiations?
                              </li>
                              <li>
                                Was there anything you came across in your research on [insert topic here] that you
                              </li>
                            </ul>
                            <p>
                              are interested in learning more about?
                            </p>
                            <ul>
                              <li>
                                Is there anyone in the group who you would like to recognize for their contributions
                              </li>
                            </ul>
                            <p>
                              during this process? This can be any contribution, from being a great team player,
                              researcher, or writer, to helping
                              you calm down when you were frustrated!
                            </p>
                            <p>
                              If you&rsquo;re running out of time, choose only one or two questions to pose to the
                              group.
                            </p>
                            <h4>
                              Step 2: Announce next week&rsquo;s global connections session facilitator.
                            </h4>


              </div>
            </TabPane>
            <TabPane tab="Session Snapshot & Prep" key="2">
             <div className={classes.longTextClass}>
               <strong>
                 Simulation Format
               </strong>
               <p>
               </p>
               <table width="100%">
                 <tbody>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <h4>
                       Speaker
                     </h4>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <h4>
                       Action
                     </h4>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <h4>
                       Time
                     </h4>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Deciding Committee
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Opening Statement
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       3 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #1
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Opening Statement
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       2 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #2
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Opening Statement
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       2 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #3
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Opening Statement
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       2 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #1
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Propose Solution
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       3 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #1
                     </p>
                     <p>
                       &amp; Deciding Committee
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Q&amp;A
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       5 minutes or 5 questions
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #2
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Propose Solution
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       3 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #2
                     </p>
                     <p>
                       &amp; Deciding Committee
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Q&amp;A
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       5 minutes or 5 questions
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #3
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Propose Solution
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       3 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #3
                     </p>
                     <p>
                       &amp; Deciding Committee
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Q&amp;A
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       5 minutes or 5 questions
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Deciding Committee
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Time Out
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       3 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #1
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Closing Statement
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       2 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #2
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Closing Statement
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       2 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Stakeholder #3
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Closing Statement
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       2 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Deciding Committee
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Break for Deliberation
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       8 to 10 minutes
                     </p>
                   </td>
                 </tr>
                 <tr>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Deciding Committee
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       Decision
                     </p>
                   </td>
                   <td colSpan="1" rowSpan="1">
                     <p>
                       2 minutes
                     </p>
                   </td>
                 </tr>
                 </tbody>
               </table>
               <br/><br/>
                 <strong>
                   Participant Rules
                 </strong>
                 <p>
                 </p>
                 <ol start="1">
                   <li>
                     1. All club members must remain respectful of one another at all times.
                   </li>
                   <li>
                     2. All statements should focus on the argument itself and be spoken in a respectful way.
                   </li>
                   <li>
                     3. Teams should not be interrupted during their turn to speak unless it is the timekeeper
                     announcing that time is up.
                   </li>
                   <li>
                     4. The Deciding Committee agrees to remain fair and impartial when deciding the winning solution.
                   </li>
                   <li>
                     5. Club members agree to respect the decision of the Deciding Committee at the end of the
                     simulation.
                   </li>
                 </ol>
                 <p>
                 </p>
                 <p>
                   <img title="" src={i3_f_2a} alt=""/>
                 </p>
                 <strong>
                   impACT Notes
                 </strong>
                 <p>
                 </p>
                 <table width="100%">
                   <tbody>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         Stakeholder #1 Key Arguments
                       </p>
                     </td>
                     <td colSpan="1" rowSpan="4" style={{verticalAlign: 'top'}}>
                       <p>
                         Comments
                       </p>
                     </td>
                   </tr>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         1. <br/><br/>
                       </p>

                     </td>
                   </tr>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         2. <br/><br/>
                       </p>


                     </td>
                   </tr>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         3. <br/><br/>
                       </p>


                     </td>
                   </tr>
                   </tbody>
                 </table>
                 <p>
                 </p>
                 <table width="100%">
                   <tbody>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         Stakeholder #2 Key Arguments
                       </p>
                     </td>
                     <td colSpan="1" rowSpan="4" style={{verticalAlign: 'top'}}>
                       <p>
                         Comments
                       </p>
                     </td>
                   </tr>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         1. <br/><br/>
                       </p>


                     </td>
                   </tr>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         2. <br/><br/>
                       </p>


                     </td>
                   </tr>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         3. <br/><br/>
                       </p>


                     </td>
                   </tr>
                   </tbody>
                 </table>
                 <p>
                 </p>
                 <table width="100%">
                   <tbody>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         Stakeholder #3 Key Arguments
                       </p>
                     </td>
                     <td colSpan="1" rowSpan="4"style={{verticalAlign: 'top'}}>
                       <p>
                         Comments
                       </p>
                     </td>
                   </tr>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         1. <br/><br/>
                       </p>
                     </td>
                   </tr>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         2. <br/><br/>
                       </p>
                     </td>
                   </tr>
                   <tr>
                     <td colSpan="1" rowSpan="1">
                       <p>
                         3. <br/><br/>
                       </p>
                     </td>
                   </tr>
                   </tbody>
                 </table>
                 <p>
                   <img title="" src={i3_f_2b} alt=""/>
                 </p>


             </div>
            </TabPane>
            <TabPane tab="Session Plan" key="3">
             <div className={classes.longTextClass}>
               <strong>
                 impACT Moderator Instructions
               </strong>
               <p>
                 As the Deciding Committee, you are responsible for moderating the simulation. After all, the stakeholders are here
                 to present their position and solutions to you in the hopes that you will choose their solution. Moderating is hard
                 work! Please read this document thoroughly; it outlines your responsibilities as a moderator and contains
                 step-by-step directions for mediating a successful impACT simulation.
               </p>
               <ol start="1">
                 <h4>
                   1. You are responsible for moderating and setting the pace.
                 </h4>
               </ol>
               <p>
                 The stakeholders rely on you to maintain the flow of the simulation and move them on to the next speaking task.
                 Designate one member of the Deciding Committee to be the primary moderator. This person will follow the script
                 below.
               </p>
               <p>
                 More than one member of the Deciding Committee may moderate, but please make sure to communicate with one another so
                 you know when it is your turn to speak!
               </p>
               <ol start="2">
                 <h4>
                   2. You are responsible for timing.
                 </h4>
               </ol>
               <p>
                 The stakeholders rely on you for time signals. Designate one member of the Deciding Committee to be the primary
                 timekeeper.
               </p>
               <ul>
                 <li>
                   Please use a reliable stopwatch or clock. Remember that during each speaking task, you must signal the beginning
                   and end of the allotted time. You are also responsible for alerting speakers when they have one minute remaining
                   and 30 seconds remaining by holding up the signs provided.
                 </li>
                 <li>
                   While stakeholders are presenting, allow them to speak for the full amount of time. Only interrupt if there is
                   an inappropriate comment or behavior, if they go over the time limit, or if the discussion has strayed from the
                   original purpose.
                 </li>
                 <li>
                   If stakeholders continue speaking past their allotted time, you may interrupt by saying, &ldquo;Thank you
                   [Stakeholder name], your time is up.&rdquo;
                 </li>
               </ul>
               <ol start="3">
                 <h4>
                   3. Take notes on a separate impACT rubric for each stakeholder.
                 </h4>
               </ol>
               <p>
                 During the simulation, each member of the Deciding Committee is responsible for taking notes and judging each
                 stakeholder&rsquo;s presentation based on the rubric provided. Take notes and keep score so your decision-making
                 criteria are transparent to all of the stakeholders when you choose the "winning" proposal.
               </p>
               <ol start="4">
                 <h4>
                   4. Judging
                 </h4>
               </ol>
               <p>
                 After the final stakeholder presents their closing statement, announce a short break for deliberation. Deliberation
                 is when the Deciding Committee gathers to carefully consider each proposal and decide on a winner. Take 8 to 10
                 minutes to discuss all of the proposals, and based on your notes and scores on the rubrics, collectively choose one
                 stakeholder as the winner. Then, write one to three sentences explaining your decision and giving concrete reasons
                 why you chose the solution presented by this particular stakeholder. Present your decision to the group.
               </p>
               <p>
                 Follow the structure of the simulation as presented in the script below. Make sure everyone takes a few minutes and
                 reads over the script so they are familiar with the flow of the simulation.
               </p>
               <br/>
                 <strong>
                   impACT Moderator Script
                 </strong>
                 <h4>
                   DECIDING COMMITTEE (3 MINUTES)
                 </h4>
                 <p>
                   [Read Opening Statement]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. We look forward to hearing everyone&rsquo;s opening remarks. I will proceed by recognizing all present
                   Stakeholders, one at a time. [Welcome each Stakeholder by name]. Each group will have two minutes to deliver their
                   opening statement, uninterrupted. One representative per team may speak or several; that&rsquo;s up to you. I will
                   keep time, and to ensure we stay on track, I will interrupt you if you exceed the allotted time. So without further
                   ado, I will begin. Stakeholder #1 is now recognized. You have two minutes to share your opening statement.
                 </p>
                 <h4>
                   STAKEHOLDER #1 (2 MINUTES)
                 </h4>
                 <p>
                   [Read Opening Statement]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. Stakeholder #2 is now recognized. You have two minutes to share your opening statement.
                 </p>
                 <h4>
                   STAKEHOLDER #2 (2 MINUTES)
                 </h4>
                 <p>
                   [Read Opening Statement]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. Stakeholder #3 is now recognized. You have two minutes to share your opening statement.
                 </p>
                 <h4>
                   STAKEHOLDER #3 (2 MINUTES)
                 </h4>
                 <p>
                   [Read Opening Statement]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   We will now open the floor for stakeholders to propose their solutions. As a reminder, your proposals should seek to
                   respond to the issue we have presented to you. Each group will have three minutes to present their proposal to us,
                   uninterrupted. I will keep time, and to ensure we stay on track, I will interrupt you if you exceed the allotted
                   time.
                 </p>
                 <h4>
                   STAKEHOLDER #1: (3 MINUTES)
                 </h4>
                 <p>
                   [Propose Solution]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. We greatly appreciate your unique perspective. We have prepared a few questions to help us better
                   understand your proposal. Listen carefully and take a few moments with your team to decide who will answer and how.
                   We simply ask that you answer to the best of your ability. The Q&amp;A will last for five minutes, or the time it
                   takes for you to answer five of our questions, whichever comes first. Our first question is...
                 </p>
                 <h4>
                   DECIDING COMMITTEE
                 </h4>
                 <p>
                   [Ask Stakeholder #1 questions, take notes, and listen carefully to the answer.]
                 </p>
                 <h4>
                   STAKEHOLDER #1: (5 MINUTES)
                 </h4>
                 <p>
                   [Answer questions]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. Stakeholder #2 is now recognized. You have three minutes to propose your solution.
                 </p>
                 <h4>
                   STAKEHOLDER #2 (3 MINUTES)
                 </h4>
                 <p>
                   [Propose Solution]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. We greatly appreciate your unique perspective. We have prepared a few questions to help us better
                   understand your proposal. Listen carefully and take a few moments with your team to decide who will answer and how.
                   We simply ask that you answer to the best of your ability. The Q&amp;A will last for five minutes or the time it
                   takes for you to answer five of our questions, whichever comes first. Our first question is...
                 </p>
                 <h4>
                   DECIDING COMMITTEE
                 </h4>
                 <p>
                   [Ask Stakeholder #2 questions, take notes, and listen carefully to the answer.]
                 </p>
                 <h4>
                   STAKEHOLDER #2 (5 MINUTES)
                 </h4>
                 <p>
                   [Answer questions]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. Stakeholder #3 is now recognized. You have three minutes to propose your solution.
                 </p>
                 <h4>
                   STAKEHOLDER #3 (3 MINUTES)
                 </h4>
                 <p>
                   [Propose Solution]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. We greatly appreciate your unique perspective. We have prepared a few questions to help us better
                   understand your proposal. Listen carefully and take a few moments with your team to decide who will answer and how.
                   We simply ask that you answer to the best of your ability. The Q&amp;A will last for five minutes or the time it
                   takes for you to answer five of our questions, whichever comes first. Our first question is...
                 </p>
                 <h4>
                   DECIDING COMMITTEE
                 </h4>
                 <p>
                   [Ask Stakeholder #3 questions, take notes, and listen carefully to the answer.]
                 </p>
                 <h4>
                   STAKEHOLDER #3 (5 MINUTES)
                 </h4>
                 <p>
                   [Answer questions]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you, stakeholders. We will pause for a three-minute time out period. During this time, teams should discuss
                   their competitor&rsquo;s solutions and decide if they would like to revise their closing statement in any way.
                 </p>
                 <p>
                   [TIME OUT 3 MINUTES]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Stakeholders, your time is up. Stakeholder #1, please share your closing statement. You have two minutes to share
                   your closing statement.
                 </p>
                 <h4>
                   STAKEHOLDER #1 (2 MINUTES)
                 </h4>
                 <p>
                   [Closing Statement]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. Stakeholder #2 is now recognized. You have two minutes to share your closing statement.
                 </p>
                 <h4>
                   STAKEHOLDER #2 (2 MINUTES)
                 </h4>
                 <p>
                   [Closing Statement]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you. Stakeholder #3 is now recognized. You have two minutes to share your closing statement.
                 </p>
                 <h4>
                   STAKEHOLDER #3 (2 MINUTES)
                 </h4>
                 <p>
                   [Closing Statement]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you for your proposals. You have given us a lot to consider, and we appreciate your efforts. We will now take
                   a short break and allow the Deciding Committee to deliberate and choose a winning proposal. We kindly request that
                   you do not interrupt the Deciding Committee while they are deliberating, and that you return to your seats in eight
                   minutes.
                 </p>
                 <p>
                   [BREAK FOR DELIBERATIONS 8-10 MINUTES]
                 </p>
                 <h4>
                   MODERATOR
                 </h4>
                 <p>
                   Thank you for your patience. If all stakeholders will please take their seats, the Deciding Committee will announce
                   our decision.&nbsp;[Read Decision Statement.]
                 </p>
                 <p>
                   <img title="" src={i3_f_3} alt=""/>
                 </p>


             </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="4">
             <div className={classes.longTextClass}>

               <strong>
                 impACT: Global Priorities Simulation Rubric
               </strong>
               <br/><br/>
                 <b>
                   Stakeholder:</b>
                 <br/>
                   <hr style={{border: '1px solid rgba(0,0,20,0.2)', borderTop: 0}}/>

                     <p>
                       <b>Directions</b> For each category, circle the score that best fits the presentation you saw.
                       Only one value may be circled in each row.&nbsp;The total score for each Stakeholder group is the
                       sum of points circled across all members of the Deciding Committee.
                     </p>
                     <p>
                     </p>
                     <table>
                       <tbody>
                       <tr>
                         <td colSpan="1" rowSpan="2">
                           <h4>
                             Category
                           </h4>
                         </td>
                         <td colSpan="3" rowSpan="1">
                           <h4>
                             Criteria
                           </h4>
                         </td>
                         <td colSpan="1" rowSpan="7" width="20%" style={{verticalAlign: 'top'}}>
                           <h4>
                             Notes
                           </h4>
                         </td>
                       </tr>
                       <tr>
                         <td colSpan="1" rowSpan="1">
                           <h4>
                             3 points
                           </h4>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <h4>
                             2 points
                           </h4>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <h4>
                             1 point
                           </h4>
                         </td>
                       </tr>
                       <tr>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Overall Topic Knowledge and Preparedness
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             The team understands the topic deeply and is well-prepared to present.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             The team mostly understands the topic and is somewhat prepared to present.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             The team does not understand the topic and is unprepared to present.
                           </p>
                         </td>
                       </tr>
                       <tr>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Stakeholder Representation
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             The team consistently represents the perspective of the assigned Stakeholder.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             The team mostly represents the perspective of the assigned Stakeholder.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             The team does not represent the perspective of the assigned Stakeholder.
                           </p>
                         </td>
                       </tr>
                       <tr>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Strength of Proposal
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             The proposal clearly identifies a solution and explains why other solutions are less
                             preferable in an organized and compelling manner.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             The proposal is mostly organized and compelling. It identifies a solution but does not
                             explain why other solutions are less preferable.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             The proposal is not organized, relevant, or compelling, and does not identify a clear
                             solution.
                           </p>
                         </td>
                       </tr>
                       <tr>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Use of Facts and Examples
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             All arguments are supported by facts and examples.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Most arguments are supported by facts and examples.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Arguments are not supported by facts or examples.
                           </p>
                         </td>
                       </tr>
                       <tr>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Performance in
                           </p>
                           <p>
                             Public Speaking
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Team members speak clearly and consistently, and use tone, speed, volume, and body language
                             as tools.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Team members mostly speak clearly, and sometimes use tone, speed, volume, and body language
                             as tools.
                           </p>
                         </td>
                         <td colSpan="1" rowSpan="1">
                           <p>
                             Team members are difficult to hear or understand, and do not use tone, speed, volume, and
                             body language as tools.
                           </p>
                         </td>
                       </tr>
                       </tbody>
                     </table>


             </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="5">
              <div className={classes.longTextClass}>
                <table>
                  <tbody>
                  <tr>
                    <td colSpan="2" rowSpan="1">
                      <h4>
                        impACT Simulation Overview
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" rowSpan="1">
                      <p>
                        The simulation lasts for 60 minutes. The Deciding Committee is responsible for moderating and
                        being the timekeepers during the simulation. They will give teams a warning when they have one
                        minute remaining, and another when they have 30 seconds remaining.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        1
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The Deciding Committee starts the simulation with a welcoming opening statement.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Then, they direct the stakeholders to deliver their opening statements one by one. Stakeholders
                        deliver their opening statements uninterrupted for two minutes each.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        3
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The Deciding Committee then directs the stakeholders to propose their solution. Stakeholders
                        deliver their proposals uninterrupted for three minutes each.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        4
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        After each team presents their proposal, they may field follow-up questions from the Deciding
                        Committee about their presentation. The Q&amp;A lasts for five minutes or five questions,
                        whichever comes first.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        5
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        After all stakeholders present their solutions, there is a three-minute time out period. During
                        this time, each team comes together to decide if they would like to revise their closing
                        statement in any way.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        6
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The Deciding Committee then directs each stakeholder to deliver their closing statement.
                        Stakeholders deliver their closing statements uninterrupted for two minutes each.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        7
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        After all closing statements are delivered, the Deciding Committee chooses a winning proposal.
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </table>


              </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="6">
              <div className={classes.longTextClass}>
                <div style={{textAlign: 'center'}}>
                  <br/><br/><br/>
                    <strong>
                      30 Seconds remaining
                    </strong>

                    <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                      <strong>
                        1 Minute remaining
                      </strong>


                </div>
              </div>
            </TabPane>
          </Tabs>}
          { this.state.isStudent && <Tabs defaultActiveKey="1" onChange={this.callback}>
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

                <strong>
                  impACT: Global Priorities Simulation
                </strong>
                <p>
                </p>
                <table>
                  <tbody>
                  <tr>
                    <td colSpan="2" rowSpan="1">
                      <h4>
                        impACT Simulation Overview
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="2" rowSpan="1">
                      <p>
                        The simulation lasts for 60 minutes. The Deciding Committee is responsible for moderating and
                        being the timekeepers during the simulation. They will give teams a warning when they have one
                        minute remaining, and another when they have 30 seconds remaining.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        1
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The Deciding Committee starts the simulation with a welcoming opening statement.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Then, they direct the stakeholders to deliver their opening statements one by one. Stakeholders
                        deliver their opening statements uninterrupted for two minutes each.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        3
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The Deciding Committee then directs the stakeholders to propose their solution. Stakeholders
                        deliver their proposals uninterrupted for three minutes each.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        4
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        After each team presents their proposal, they may field follow-up questions from the Deciding
                        Committee about their presentation. The Q&amp;A lasts for five minutes or five questions,
                        whichever comes first.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        5
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        After all stakeholders present their solutions, there is a three-minute time out period. During
                        this time, each team comes together to decide if they would like to revise their closing
                        statement in any way.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        6
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The Deciding Committee then directs each stakeholder to deliver their closing statement.
                        Stakeholders deliver their closing statements uninterrupted for two minutes each.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        7
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        After all closing statements are delivered, the Deciding Committee chooses a winning proposal.
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <br/>
                  <h4>
                    Stakeholders
                  </h4>
                  <p>
                    As you represent your stakeholder&rsquo;s interests, you will deliver a proposal that addresses an
                    issue of real-world significance in front of a group of competing stakeholders and a board of judges
                    called the Deciding Committee. Stakeholders, your goal is to convince the Deciding Committee that
                    your proposal will have the greatest impact and benefit to the community at large. The outcome of
                    the simulation will rest in your ability to make a sound and persuasive argument while balancing the
                    agendas of the competing stakeholders with your own.
                  </p>
                  <p>
                    Your club&rsquo;s facilitator will provide you with printed copies of everything you will need for
                    the simulation, bu you can get a sneak peek here:
                  </p>
                  <ul>
                    <li>
                      Format and Guidelines
                    </li>
                    <li>
                      Rubric
                    </li>
                  </ul>
                  <h4>
                    Deciding Committee
                  </h4>
                  <p>
                    Members of the Deciding Committee, you are responsible for moderating and deciding the
                  </p>
                  <p>
                    outcome of the simulation. By now you should be familiar with the topic of the simulation. You will
                    use your knowledge to evaluate the merit of the solutions being presented to you. In the end, it's
                    up to you to decide!
                  </p>
                  <p>
                    Your club&rsquo;s facilitator will provide you with printed copies of everything you will need for
                    the simulation, but you can get a sneak peek here:
                  </p>
                  <ul>
                    <li>
                      Format and Guidelines
                    </li>
                    <li>
                      Moderator Instructions and Script
                    </li>
                    <li>
                      Rubric
                    </li>
                    <li>
                      Time Cards
                    </li>
                  </ul>


              </div>
            </TabPane>
            <TabPane tab="Session Snapshot & Prep" key="2">
              <div className={classes.longTextClass}>

                <strong>
                  Simulation Format
                </strong>
                <p>
                </p>
                <table width="100%">
                  <tbody>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <h4>
                        Speaker
                      </h4>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <h4>
                        Action
                      </h4>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <h4>
                        Time
                      </h4>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Deciding Committee
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Opening Statement
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        3 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #1
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Opening Statement
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #2
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Opening Statement
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #3
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Opening Statement
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #1
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Propose Solution
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        3 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #1
                      </p>
                      <p>
                        &amp; Deciding Committee
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Q&amp;A
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        5 minutes or 5 questions
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #2
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Propose Solution
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        3 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #2
                      </p>
                      <p>
                        &amp; Deciding Committee
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Q&amp;A
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        5 minutes or 5 questions
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #3
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Propose Solution
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        3 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #3
                      </p>
                      <p>
                        &amp; Deciding Committee
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Q&amp;A
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        5 minutes or 5 questions
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Deciding Committee
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Time Out
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        3 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #1
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Closing Statement
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #2
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Closing Statement
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Stakeholder #3
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Closing Statement
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Deciding Committee
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Break for Deliberation
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        8 to 10 minutes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Deciding Committee
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Decision
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2 minutes
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </table>
                <br/>
                  <strong>
                    Participant Rules
                  </strong>
                  <p>
                  </p>
                  <ol start="1">
                    <li>
                      All club members must remain respectful of one another at all times.
                    </li>
                    <li>
                      All statements should focus on the argument itself and be spoken in a respectful way.
                    </li>
                    <li>
                      Teams should not be interrupted during their turn to speak unless it is the timekeeper announcing
                      that time is up.
                    </li>
                    <li>
                      The Deciding Committee agrees to remain fair and impartial when deciding the winning solution.
                    </li>
                    <li>
                      Club members agree to respect the decision of the Deciding Committee at the end of the simulation.
                    </li>
                  </ol>
                  <p>
                  </p>
                  <p>
                    <img title="" src={i3_s_2a} alt=""/>
                  </p>
                  <br/><br/>
                    <strong>
                      impACT Notes
                    </strong>
                    <p>
                    </p>
                    <table width="100%">
                      <tbody>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            Stakeholder #1 Key Arguments
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="4" style={{verticalAlign: 'top'}}>
                          <p>
                            Comments
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            1. <br/><br/>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            2. <br/><br/>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            3. <br/><br/>
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <p>
                    </p>
                    <table width="100%">
                      <tbody>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            Stakeholder #2 Key Arguments
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="4" style={{verticalAlign: 'top'}}>
                          <p>
                            Comments
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            1. <br/><br/>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            2. <br/><br/>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            3. <br/><br/>
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <p>
                    </p>
                    <table width="100%">
                      <tbody>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            Stakeholder #3 Key Arguments
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="4" style={{verticalAlign: 'top'}}>
                          <p>
                            Comments
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            1. <br/><br/>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            2. <br/><br/>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td colSpan="1" rowSpan="1">
                          <p>
                            3. <br/><br/>
                          </p>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <p>
                      <img title="" src={i3_s_2b} alt=""/>
                    </p>


              </div>
            </TabPane>
            <TabPane tab="Session Plan" key="3">
              <div className={classes.longTextClass}>

                <strong>
                  impACT: Global Priorities Simulation Rubric
                </strong>
                <br/>
                  <b>
                    Stakeholder:</b>
                  <br/>
                    <hr style={{border: '1px solid rgba(0,0,20,0.2)', borderTop: 0}} />
                      <p>
                        <b>Directions:</b> For each category, circle the score that best fits the presentation you saw.
                        Only one value may be circled in each row.&nbsp;The total score for each Stakeholder group is
                        the sum of points circled across all members of the Deciding Committee.
                      </p>
                      <table>
                        <tbody>
                        <tr>
                          <td colSpan="1" rowSpan="2">
                            <h4>
                              Category
                            </h4>
                          </td>
                          <td colSpan="3" rowSpan="1">
                            <h4>
                              Criteria
                            </h4>
                          </td>
                          <td colSpan="1" rowSpan="7" width="20%" style={{verticalAlign: 'top'}}>
                            <h4>
                              Notes
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="1" rowSpan="1">
                            <h4>
                              3 points
                            </h4>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <h4>
                              2 points
                            </h4>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <h4>
                              1 point
                            </h4>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Overall Topic Knowledge and Preparedness
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              The team understands the topic deeply and is well-prepared to present.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              The team mostly understands the topic and is somewhat prepared to present.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              The team does not understand the topic and is unprepared to present.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Stakeholder Representation
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              The team consistently represents the perspective of the assigned Stakeholder.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              The team mostly represents the perspective of the assigned Stakeholder.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              The team does not represent the perspective of the assigned Stakeholder.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Strength of Proposal
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              The proposal clearly identifies a solution and explains why other solutions are less
                              preferable in an organized and compelling manner.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              The proposal is mostly organized and compelling. It identifies a solution but does not
                              explain why other solutions are less preferable.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              The proposal is not organized, relevant, or compelling, and does not identify a clear
                              solution.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Use of Facts and Examples
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              All arguments are supported by facts and examples.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Most arguments are supported by facts and examples.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Arguments are not supported by facts or examples.
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Performance in
                            </p>
                            <p>
                              Public Speaking
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Team members speak clearly and consistently, and use tone, speed, volume, and body
                              language as tools.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Team members mostly speak clearly, and sometimes use tone, speed, volume, and body
                              language as tools.
                            </p>
                          </td>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Team members are difficult to hear or understand, and do not use tone, speed, volume, and
                              body language as tools.
                            </p>
                          </td>
                        </tr>
                        </tbody>
                      </table>


              </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="4">
              <div className={classes.longTextClass}>

                <div style={{textAlign: 'center'}}>
                  <br/><br/><br/>
                    <strong>
                      30 Seconds remaining
                    </strong>

                  <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>


                      <strong>
                        1 Minute remaining
                      </strong>


                </div>
              </div>
            </TabPane>
          </Tabs>
            }
        </div>
      </>
    );
  }
}

export default FacilitatorWeek3;
