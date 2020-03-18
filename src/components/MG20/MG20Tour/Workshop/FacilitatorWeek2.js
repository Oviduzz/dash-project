import React, {Component} from 'react';
import classes from "./Workshop.module.scss";
import {navigate} from "@reach/router";
import {Button, Icon, Menu, Tabs} from "antd";
import arrowLeft from "../../../../assets/Images/arrowLeft.svg";
import downloadIcon from "../../../../assets/Images/downloadIcon.svg";

import i2_f_4 from "../../../../assets/Images/2_f_4.png";
import i2_f_6 from "../../../../assets/Images/2_f_6.png";
import i2_f_8 from "../../../../assets/Images/2_f_8.png";
import i2_s_1 from "../../../../assets/Images/2_s_1.png";
import i2_s_2 from "../../../../assets/Images/2_s_2.png";
import i2_s_4 from "../../../../assets/Images/2_s_4.png";
import facilitator5 from "../../../../assets/Images/Facilitator5.png";

const {TabPane} = Tabs;

class FacilitatorWeek2 extends Component {
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
              <strong>impACT: Global Priorities Simulation</strong>
              <strong>Deciding Committee Directions</strong>
              <p>You are about to start a two-week simulation that explores the challenges and priorities of local and
                global affairs.
                There are two types of roles in this simulation: stakeholders (people with an interest or concern in the
                outcome of
                an issue) and the Deciding Committee (people who have the power to select the best solution to the
                problem offered
                by the stakeholder groups).</p>
              <p>As a member of the Deciding Committee, you are responsible for moderating and deciding the outcome of
                the simulation.
                That means you need to become so familiar with the topic of the simulation that you have the ability to
                evaluate the
                merit of the solutions being presented to you. Use the impACT Brief selected for this simulation as a
                springboard to
                learn more through research.</p>
              <p>In the end, it's up to you to decide! The stakeholders are here to present their proposals to you in
                the hopes that
                you will choose their solution. Moderating is hard work! Please read this document thoroughly; it will
                prepare you
                for leading and mediating a successful impACT session.</p>
              <p>Good luck!</p>
              <strong>Table of Contents</strong>
              <p><a href="#">Deciding Committee Checklist</a></p>
              <p><a href="#">Step 1: Review the impACT Brief and the simulation format.</a></p>
              <p><a href="#">Step 2: Organize your team.</a></p>
              <p><a href="#">Step 3: Conduct research.</a></p>
              <p><a href="#">Step 4: Prepare to Moderate!</a></p>
              <p><a href="#">Sample Opening Statement</a></p>
              <p><a href="#">Come Up with Questions for Q&amp;A</a></p>
              <p><a href="#">Deciding the Winner</a></p>
              <strong>Deciding Committee Checklist</strong>
              <p>⃞ Review the impACT Brief and the simulation format.</p>
              <p>⃞ Conduct research on the topic.</p>
              <p>⃞ Write an opening statement.</p>
              <p>⃞ Generate a list of questions to ask stakeholders during the Q&amp;A.</p>
              <p>⃞ Review the rubric.</p>
              <strong>Step 1: Review the impACT Brief and the simulation format.</strong>
              <p>The impACT Brief gave you an overview of a global issue and a description of a real-life scenario that
                you will be
                acting out at next week&rsquo;s simulation. Pay close attention to the description of the Deciding
                Committee. As a
                member of the Deciding Committee, you&rsquo;ll need to be clear about what you want to accomplish when
                you listen to
                the stakeholders&rsquo; solutions. Keep this point of view in mind as you research, moderate, and decide
                the outcome
                of the simulation.</p>
              <p>At the end of the impACT Brief you&rsquo;ll find the Simulation Format. This table is there to let you
                know what to
                expect and where your speeches fit in. As the moderator, you&rsquo;ll notice that you have many speaking
                parts!
                During the actual simulation, you will receive a script that you will follow to guide everyone through
                the
                session.</p>
              <strong>Step 2: Organize your team.</strong>
              <p>As a team, decide how best to work together to accomplish your tasks. We suggest sharing the tasks
                among each of your
                team members, then coming together frequently to discuss and strategize. Team members should feel free
                to schedule
                strategizing meetings outside of club time as necessary.</p>
              <h4>1 to 3 Researchers</h4>
              <p>The researchers collect information on the issue to be used as part of the simulation.</p>
              <h4>1 to 2 Writers</h4>
              <p>The writers prepare the opening statement, the list of questions, and the draft of the Committee's
                decision at the
                end of the simulation.</p>
              <h4>1 to 3 Spokespersons</h4>
              <p>The spokespeople deliver the team&rsquo;s statements during the simulation.</p>
              <h4>1 to 2 Timekeepers</h4>
              <p>During next week's simulation, the timekeepers will keep track of time during the stakeholder's
                speeches.</p>
              <p><img title="" src={facilitator5} alt=""/></p>
              <strong>Step 3: Conduct research.</strong>
              <p>You'll need to be informed about the issue in order to decide which proposal is the best solution to
                your problem. A
                big part of your job is anticipating the proposals you might hear from the stakeholders. Come up with a
                list of
                possibilities and go from there. Then, consider the major differences and similarities between the
                stakeholders&rsquo;
                proposals. Consider the economic, political, scientific, environmental, or social motivations each
                stakeholder might
                have. Use the guiding research questions below to help get you started.</p>
              <ul>
                <li>What is the issue?</li>
                <li>Who are the parties affected by this issue?</li>
                <li>What are the solutions the stakeholders may propose?</li>
                <li>What are some of the effects that will result from each solution?</li>
                <li>Are there groups or organizations that will benefit from each solution? Are there groups that will
                  feel negative
                  effects? Examples: businesses, adults, children, or traffic patterns.
                </li>
                <li>Has this solution been implemented in other countries? Was it successful or unsuccessful? Why?</li>
                <li>What are some of the secondary benefits that could result from each solution?</li>
              </ul>
              <ul>
                <li>Economic factors? Example: Does the proposal bring in revenue? Raise taxes?</li>
                <li>Environmental factors? Example: Does the proposal endanger an animal species?</li>
                <li>Social factors? Example: Does the proposal provide you with access to valuable resources and data?
                </li>
              </ul>
              <ul>
                <li>What are the long-term implications of each solution if it&rsquo;s chosen?</li>
              </ul>
              <ul>
                <li>Local implications?</li>
                <li>Global implications?</li>
              </ul>
              <ul>
                <li>What are the long-term implications of not&nbsp;choosing each solution?</li>
              </ul>
              <ul>
                <li>Local implications?</li>
                <li>Global implications?</li>
              </ul>
              <p>Check out our Resources for Online Research&nbsp;for a list of helpful links to get you started on your
                research.</p>
              <p>Research collaboratively!</p>
              <p>Click the &ldquo;Notebook&rdquo; on your dashboard to access our collaborative tool that can help you
                work together
                easily. The Notebook allows people to work on a single document at the same time. You can see and leave
                comments on
                each other&rsquo;s research and make sure that team members&rsquo; efforts are not overlapping.</p>
              <strong>Step 4: Prepare to Moderate!</strong>
              <p>Your speaking tasks and responsibilities will look slightly different from the stakeholders&rsquo; as
                you are hosting
                and moderating the simulation. Your team is responsible for preparing the items listed in the table
                below. Divide up
                the moderator duties: Decide who will speak and when, and select someone for the timekeeper job.</p>
              <p>&nbsp;</p>
              <table>
                <tbody>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>Speaking Tasks</p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>Time Limit</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>Opening Statement</p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>3 minutes</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>Questions for Q&amp;A</p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>5 minutes or 5 questions per Stakeholder</p>
                  </td>
                </tr>
                <tr>
                  <td colSpan="1" rowSpan="1">
                    <p>Decision*</p>
                  </td>
                  <td colSpan="1" rowSpan="1">
                    <p>2 minutes</p>
                  </td>
                </tr>
                </tbody>
              </table>
              <i>*You will have time to draft and present your decision during the simulation.</i>
              <br/>
                <strong>Write Your Opening Statement</strong>
                <p>As the moderator, you get to begin the simulation! You will have up to three minutes for your opening
                  statement. The
                  opening statement should do the following:</p>
                <ul>
                  <li>Welcome all stakeholders and set the tone for a respectful discussion.</li>
                  <li>Provide an overview of the issue and remind the stakeholders about any objectives that you will be
                    looking out
                    for in their proposals (such as more jobs or lower carbon footprint).
                  </li>
                  <li>Explain why this issue is important to the members of your Deciding Committee and how it will
                    affect the people
                    they serve.
                  </li>
                  <li>Share that your team is looking forward to hearing all thoughts on the issue and will take
                    proposals into equal
                    consideration.
                  </li>
                </ul>
              <br/><br/><br/>
                  <strong>Sample Opening Statement</strong>
                  <i>
                    <p>From all of us at the Globeville Municipal Transportation Board, we thank you for being here
                      today to address the
                      future of transportation in our city. Worldwide, city populations are growing rapidly and do not
                      show signs of
                      slowing down anytime soon. According to the UN, two-thirds of the world&rsquo;s population will
                      live in cities
                      by the year 2030.</p>
                    <p>As you know, cities are places of movement. The movement of people, products, cars, trucks,
                      bicycles, scooters,
                      and more. Urban planners and municipal transportation boards, including ours, are faced with the
                      challenge of
                      adapting city infrastructure to support a growing population in a way that improves mobility.
                      Urban mobility is
                      the movement of people and products within urban areas. Improvement in urban mobility is necessary
                      to bring
                      cities into the future. This improvement can be made possible through technological advances and
                      new mobility
                      services.</p>
                    <p>If mobility goes unaddressed, this can have disastrous effects for our city. According to
                      McKinsey &amp; Company,
                      inadequate systems of urban mobility can cost anywhere from two to four percent of a
                      nation&rsquo;s Gross
                      Domestic Product (GDP) by measures such as lost productivity, wasted fuel, and increased business
                      costs.</p>
                    <p>Until now, mobility in Globeville has been manageable. Our population has increased by nearly 20%
                      in the past 10
                      years, making Globeville the current home to 700,000 people. Our city welcomes an additional
                      150,000 people each
                      day for work. While we are proud of Globeville&rsquo;s growth, we can no longer ignore the effects
                      that our
                      growth has had on road safety and the strain it has put on our aging public transportation
                      system.</p>
                    <p>As we expect our population to continue to increase in the coming decades, we must look toward
                      the future and
                      explore the technological advances and new services that will make transportation in and out of
                      our city more
                      efficient. It is important for us to act now! By solving the challenge of urban mobility, we can
                      anticipate
                      great improvements in the quality of life for our citizens.</p>
                    <p>We are calling on you to help develop our vision for urban mobility in Globeville. We are looking
                      for solutions
                      that address the following concerns: the need for increased urban mobility that is sustainable,
                      inclusive for
                      those with disabilities and/or limited mobility, and improves the quality of life for our
                      citizens. We have seen
                      other cities introduce advancements in urban mobility from electric cars to ridesharing services,
                      digitally
                      connected mass transit railways, and more recently, self-driving cars and shuttle buses. We
                      recognize that
                      increased mobility has a number of benefits including increased access to jobs and a greater sense
                      of freedom
                      for citizens. This is an opportunity not only to shape the future of Globeville, but to design it!
                      We look
                      forward to hearing your perspectives on the issue and taking your proposals into
                      consideration.</p>
                  </i>
              <br/>
                    <strong>Come Up with Questions for Q&amp;A</strong>
                    <p>After each stakeholder proposes their solution, you will have the opportunity to ask follow-up
                      questions. You will
                      want to come prepared with a list of questions to ask each team.</p>
                    <p>Review the stakeholders&rsquo; positions, and using your research, come up with a list of 5 to 10
                      questions to ask
                      stakeholders during Q&amp;A time.</p>
                    <p>Here are some questions to get you started:</p>
                    <ul>
                      <li>What are some potential issues we may have with implementing your proposal?</li>
                      <li>Are there any secondary benefits to choosing your proposal?</li>
                      <li>We notice that your proposal does not meet all of our criteria. Why should we still choose
                        you?
                      </li>
                    </ul>
                    <p>Based on what you hear during the actual simulation you may come up with new questions on the
                      spot based on facts,
                      examples, and arguments presented by each stakeholder.</p>
              <br/><br/>
                      <strong>Deciding the Winner</strong>
                      <p>Your job is to judge the proposals from the perspective and agenda of your own role. You will
                        use the impACT Rubric&nbsp;to
                        decide on the outcome and &ldquo;winner&rdquo; of the simulation.&nbsp;<strong>Make sure to review
                          the rubric as a team
                          so you know what criteria to look out for!</strong></p>
                      <p>During the simulation, each member of the Deciding Committee will evaluate each
                        stakeholder&rsquo;s performance by
                        filling out a rubric.</p>
                      <p>After the final stakeholder presents their closing statement, there will be a short break for
                        the Deciding Committee
                        to deliberate. Deliberation is when the Deciding Committee gathers</p>
                      <p>together to carefully consider each proposal and decide on a &ldquo;winner.&rdquo;</p>
                      <p>Using the scores tallied and any notes, collectively choose one stakeholder as the winner.
                        Then, draft a one- to
                        three-sentence statement explaining your decision and giving concrete reasons why you chose the
                        solution presented
                        by this particular stakeholder. You will end the simulation by presenting your decision to the
                        group.</p>
            </div>
            </TabPane>
            <TabPane tab="Session Snapshot & Prep" key="2">
            <div className={classes.longTextClass}>
              <strong>
                impACT Brief
              </strong>
              <strong>
                Seaview: Smart Technology for a Safer and More Sustainable City
              </strong>
              <br/><br/>
                <strong>
                  Introduction: Smart Cities
                </strong>
                <p>
                  The United Nations predicts that 60% of the global population will live in cities by 2030, and one in
                  three people
                  will live in cities with at least half a million inhabitants. It is necessary for cities to
                  adapt&nbsp;and improve
                  their infrastructure&nbsp;to ensure that cities will remain livable for their growing populations.
                  Understanding the
                  improvements that need to be made to urban areas is at the heart of smart city creation. Smart cities
                  use data&nbsp;and
                  smart technology, also called the internet of things&nbsp;(IoT), to make cities more intelligent,
                  efficient, safe,
                  and sustainable.
                </p>
                <p>
                  Collecting data and using it to drive real-time policy decisions is a major focal point&nbsp;of how
                  smart cities
                  work. Smart technology is always evolving to capture new and different types of data such as foot and
                  vehicle
                  traffic, road surface temperatures, noise pollution, pollen levels, fires, crime, weather, and more.
                  Information is
                  gathered through sensors, digital tags, and other forms of data collection technology that attach to
                  city
                  infrastructures, such as traffic lights and parking garages.
                </p>
                <p>
                  Cities have begun to draw on this data to make better decisions and respond to the problems of urban
                  life faster and
                  with more cost-effective solutions. For example,&nbsp;municipalities&nbsp;have been installing garbage
                  cans that
                  alert city officials when they are full and ready for disposal. Municipalities have also been
                  replacing traditional
                  street light poles with intelligent, multipurpose Smart Poles, which can be customized to fit a
                  city&rsquo;s
                  specific needs, such as providing charging stations for electric vehicles and 5G cellular
                  network&nbsp;connectivity.
                </p>
                <strong>
                  Seaview: Smart Technology for a Safer and More Sustainable City
                </strong>
                <p>
                  Seaview, a mid-sized coastal city in the nation of Freedonia, boasts a population of more than 450,000
                  people
                  covering 222 square kilometers. The city has experienced enormous growth over the past 15 years and
                  has been
                  featured in national media as the &ldquo;#1 Fastest Growing City&rdquo; for three years in a row.
                </p>
                <p>
                  Thrilled with the growth and publicity that Seaview has been afforded, city officials have recognized
                  the need to
                  respond to the changing cityscape. This rapid growth and expansion has impacted the city in numerous
                  ways. While
                  city officials have been working to understand changing trends and improve the quality of life with
                  effective,
                  efficient, and sustainable solutions, they lack the means of collecting comprehensive data to make
                  such decisions.
                </p>
                <p>
                  City officials recently secured a research grant from Smart Futures, Inc., a worldwide global
                  innovation firm, to
                  bring smart technology to Seaview, making it the first city in the entire nation of Freedonia to adopt
                  smart
                  technology. The research grant will effectively turn Seaview into an &ldquo;urban
                  laboratory&rdquo; and&nbsp;hub&nbsp;of
                  smart technology and data collection. The data collected will not only have implications&nbsp;for
                  Seaview but will
                  help set standards nationwide for how growing cities will work and be run in the future. The initial
                  grant requires
                  that Seaview follow two guidelines: incorporate smart technology with existing infrastructure, and
                  share all data
                  with Smart Futures, Inc.
                </p>
                <p>
                  In an effort to improve the quality of life of city dwellers and compete with the most livable cities
                  globally, city
                  officials announced that Seaview will begin its transformation into a smart city by outfitting the
                  city&rsquo;s
                  nearly 2,500 street light poles with &ldquo;smart sensors.&rdquo;
                </p>
                <p>
                  And city officials have called for even more smart technologies! They are looking for companies or
                  organizations
                  whose &ldquo;smart sensor&rdquo; products can be added to existing street light poles to turn them
                  into Smart Poles.
                  These technologies will observe the city and capture data that will be used to inform and improve the
                  two most
                  pressing public issues in Seaview: vehicle and pedestrian safety, and sustainability.
                </p>
                <p>
                  &ldquo;The 19th century was a century of empires, the 20th century, a century of nation-states. The
                  21st century
                  will be a century of cities.&rdquo; - Former Denver, CO Mayor W. Webb
                </p>
                <br/>
                  <strong>
                    Stakeholder Position Descriptions
                  </strong>
                  <h4>
                    Deciding Committee | City Officials
                  </h4>
                  <p>
                    You are members of Seaview&rsquo;s municipal government and represent a broad array of interests. It
                    is your job to
                    decide which smart technology Seaview will invest in first. Your group members are especially
                    concerned with
                    ensuring that Seaview takes appropriate measures to address sustainability challenges that are a
                    result of its rapid
                    expansion. In fact, your office has been busy fielding phone calls and responding to emails from
                    concerned
                    constituents who see the increase in traffic congestion and accidents and are calling for the city
                    to take action
                    regarding vehicle and pedestrian safety. You are eager to bring in technologies that will allow you
                    to improve
                    vehicle and pedestrian safety and sustainability across the city. Once all of the stakeholders have
                    presented their
                    solutions, you will choose the solution you feel best fits the needs of Seaview.
                  </p>
                  <h4>
                    Stakeholder #1 | Seaview Electric &amp; Utility
                  </h4>
                  <p>
                    You are the primary electric and utility company in Seaview and have been looking for an opportunity
                    to bring more
                    sustainable power usage options to the city. Data shows that street lighting accounts for nearly 40%
                    of a city&rsquo;s
                    total energy costs. You seek to replace the existing halogen street lights with more
                    energy-efficient and
                    cost-effective smart LED lamps. More importantly, LED lamps will result in a steep decrease in
                    energy usage, making
                    this an enormous step toward long-term sustainability goals and a lowered energy footprint. Energy
                    and monetary
                    savings can be increased even more through the use of embedded&nbsp;motion sensors that can be set
                    to dim or
                    brighten as needed, depending on the time of day and foot traffic. The light-adjusting motion
                    sensors will improve
                    bicycle and pedestrian safety, and representatives from your group have already begun to discuss how
                    these sensors
                    can be used to prevent and/or deter crime.
                  </p>
                  <p>
                    City lighting alone represents 19% of the world&rsquo;s total electricity consumption.
                  </p>
                  <h4>
                    Stakeholder #2 | TrafficSense
                  </h4>
                  <p>
                    You are an emerging tech start-up eager to gain recognition with your first product, a smart sensor
                    and a
                    corresponding mobile app that will solve the problem of city parking and ease traffic congestion.
                    Data shows that
                    upwards of 30% of all traffic congestion in cities is due to drivers looking for parking. Your
                    product uses sensors
                    that will send a signal to indicate available parking spots around the city, which citizens can
                    access via a mobile
                    app. You are certain that your product will result in a dramatic decrease in traffic, lowered CO2
                    emissions, and a
                    decrease in fuel waste due to fewer cars circling the city&rsquo;s streets. Your group is also
                    interested in using
                    the collected data to gain insight into the city&rsquo;s vehicle and foot traffic patterns. This
                    data has the
                    potential to drive economic development in Seaview, such as identifying locations for new
                    restaurants and other
                    businesses, and may be of interest to certain city officials.
                  </p>
                  <h4>
                    Stakeholder #3 | Cloud Net
                  </h4>
                  <p>
                    You are a tech start-up with an interest in public safety. Your product tracks weather patterns and
                    communicates
                    that information within the network of streetlights to adjust the lighting based on weather
                    conditions. These
                    adjustments improve visibility in poor weather conditions, which reduces traffic accidents. In
                    addition to the
                    sensor, your product includes a digital LED panel that attaches to the streetlight and displays
                    up-to-date public
                    safety, travel, and weather information for people driving and walking by. The panels are equipped
                    with speakers
                    that can be used to warn nearby people about storms or other dangers. The displays may provide an
                    additional revenue
                    stream for the city as they can be used for advertising and eliminate the need for paper flyers or
                    brochures.
                  </p>
                  <p>
                    It is estimated that three million people around the world are moving to cities every week.
                  </p>
                  <hr/>
                  <strong>
                    Simulation Format
                  </strong>
                  <table>
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
                    <ol start="1">
                      <li>
                        All club members must remain respectful of one another at all times.
                      </li>
                      <li>
                        All statements should focus on the argument itself and be spoken in a respectful way.
                      </li>
                      <li>
                        Teams should not be interrupted during their turn to speak unless it is the timekeeper
                        announcing that time is
                        up.
                      </li>
                      <li>
                        The Deciding Committee agrees to remain fair and impartial when deciding the winning solution.
                      </li>
                      <li>
                        Club members agree to respect the decision of the Deciding Committee at the end of the
                        simulation.
                      </li>
                    </ol>
                    <p>
                      <img title="" src={facilitator5} alt=""/>
                    </p>


            </div>
            </TabPane>
            <TabPane tab="Session Plan" key="3">
             <div className={classes.longTextClass}>

               <br/><strong>
               Resources for Online Research
             </strong>
               <p>
                 Internet research is an important tool for any student, whether writing a paper or crafting a strong argument for an impACT simulation. Strong research is about both finding a wide range of sources and verifying the content as reliable. The guide below will help you understand the process of finding sources and evaluating them. Have questions? Check with your club&rsquo;s faculty advisor!
               </p>
               <strong>
                 Finding Sources
               </strong>
               <br/><h4>
               Use Common Internet Sources
             </h4>
               <p>
                 There is nothing wrong with starting your search for information on major search engines or publicly editable encyclopedias, but those should be your starting points, not your destinations. For example, Wikipedia has a lot of curated information, but it is still an encyclopedia, and would never be accepted in an academic setting. Instead, use the References section on any Wikipedia article as a starting point for your bibliography.
               </p>
               <br/><h4>
               Know Where You Are in the Process
             </h4>
               <p>
                 The complexity of information on websites can vary, so it&rsquo;s important that you look for information that suits your current level of understanding.
               </p>
               <p>
                 Are you just starting? Then you likely want to start with encyclopedia entries or news articles. These will not be very helpful for analysis or citations, but they will allow you to penetrate denser articles later on.
               </p>
               <p>
                 Are you knowledgeable about the topic? Then you likely want to look at scholarly articles, academic journals, or opinion pieces. These will give you professional opinions and analyses that you can evaluate and relate to your thesis.
               </p>
               <br/><h4>
               Skim, Don&rsquo;t Read
             </h4>
               <p>
                 Most websites will have a lot of information that&rsquo;s irrelevant to what you are trying to argue or understand. Don&rsquo;t be discouraged by long, wide-ranging articles. Once you understand your topic, you should be looking for the most relevant information from your sources. Skim the site, and find sections or headings that seem more relevant than others. If you only use a site for a single fact, that&rsquo;s perfectly valid!
               </p>
               <h4>
                 Start your research!
               </h4>
               <p>
                 In order to bring you a list of the best online resources for research purposes, we conducted our own extensive resource search and examined for quality and reliability. Explore the links below for a list of mG20 in Action-approved resources, and don&rsquo;t forget to bookmark them for future research!
               </p>
               <h4>
                 Learn about what is happening across the world with these news resources!
               </h4>
               <p>
                 Reuters
                 <a href="https://www.reuters.com/">
                   https://www.reuters.com/
                 </a>
               </p>
               <p>
                 Associated Press
                 <a href="https://www.apnews.com/">
                   https://www.apnews.com/
                 </a>
               </p>
               <p>
                 National Public Radio - NPR
                 <a href="https://www.npr.org/">
                   https://www.npr.org/
                 </a>
               </p>
               <p>
                 The New York Times
                 <a href="https://www.nytimes.com/">
                   https://www.nytimes.com/
                 </a>
               </p>
               <p>
                 The Economist
                 <a href="https://www.economist.com/">
                   https://www.economist.com
                 </a>
               </p>
               <p>
                 The Wall Street Journal
                 <a href="https://www.wsj.com/">
                   https://www.wsj.com/
                 </a>
               </p>
               <p>
                 All Sides
                 <a href="https://www.allsides.com/unbiased-balanced-news">
                   https://www.allsides.com/unbiased-balanced-news
                 </a>
               </p>
               <p>
                 BBC
                 <a href="http://www.bbc.com/">
                   http://www.bbc.com/
                 </a>
               </p>
               <p>
                 CNN
                 <a href="http://www.cnn.com/">
                   http://www.cnn.com/
                 </a>
               </p>
               <p>
                 Al-Jazeera
                 <a href="https://www.aljazeera.com/">
                   https://www.aljazeera.com/
                 </a>
               </p>
               <p>
                 Pew Research Center
                 <a href="http://www.pewresearch.org/">
                   http://www.pewresearch.org/
                 </a>
               </p>
               <p>
                 Newspaper Source Plus
                 <a href="https://www.ebsco.com/products/research-databases/newspaper-source-plus">
                   https://www.ebsco.com/products/research-databases/newspaper-source-plus
                 </a>
               </p>
               <h4>
                 Check out these academic search engines!
               </h4>
               <p>
                 Microsoft Academic:
                 <a href="https://academic.microsoft.com/">
                   https://academic.microsoft.com/
                 </a>
                 &nbsp;
               </p>
               <p>
                 Google Scholar:
                 <a href="https://scholar.google.com/">
                   https://scholar.google.com/
                 </a>
               </p>
               <p>
                 Baidu Scholar:
                 <a href="http://xueshu.baidu.com/">
                   http://xueshu.baidu.com/
                 </a>
               </p>
               <h4>
                 Explore scholarly journals and databases!
               </h4>
               <p>
                 JSTOR
                 <a href="https://www.jstor.org/">
                   https://www.jstor.org/
                 </a>
               </p>
               <p>
                 World Bank - Open Data
                 <a href="https://data.worldbank.org/">
                   https://data.worldbank.org/
                 </a>
                 &nbsp;
               </p>
               <p>
                 World Economic Forum
                 <a href="https://www.weforum.org/">
                   https://www.weforum.org/
                 </a>
                 &nbsp;
               </p>
               <p>
                 Brookings Institute
                 <a href="https://www.brookings.edu/">
                   https://www.brookings.edu/
                 </a>
                 &nbsp;
               </p>
               <p>
                 The World Factbook -
                 <a href="https://www.cia.gov/library/publications/the-world-factbook/">
                   https://www.cia.gov/library/publications/the-world-factbook/
                 </a>
               </p>
               <p>
                 US Library of Congress archives
                 <a href="https://www.loc.gov/">
                   https://www.loc.gov/
                 </a>
               </p>
               <p>
                 CKNI
                 <a href="http://www.cnki.net/">
                   http://www.cnki.net/
                 </a>
               </p>
               <p>
                 Journal of Politics
                 <a href="http://www.journals.uchicago.edu/toc/jop/current">
                   http://www.journals.uchicago.edu/toc/jop/current
                 </a>
               </p>
               <p>
                 Brazilian Political Science Review
                 <a href="http://www.bpsr.org.br/index.php/bpsr">
                   http://www.bpsr.org.br/index.php/bpsr
                 </a>
               </p>
               <p>
                 Journal of Current Chinese Affairs
                 <a href="http://journals.sub.uni-hamburg.de/giga/jcca/">
                   http://journals.sub.uni-hamburg.de/giga/jcca/
                 </a>
               </p>
               <p>
                 Harvard Political Review
                 <a href="http://harvardpolitics.com/">
                   http://harvardpolitics.com/
                 </a>
               </p>
               <p>
                 Yale Journal of International Affairs
                 <a href="http://yalejournal.org/">
                   http://yalejournal.org/
                 </a>
               </p>
               <p>
                 Ensure accuracy with fact-checking websites!
               </p>
               <p>
                 Politifact
                 <a href="http://www.politifact.com/">
                   http://www.politifact.com/
                 </a>
               </p>
               <p>
                 FactCheck.org
                 <a href="https://www.factcheck.org/">
                   https://www.factcheck.org/
                 </a>
               </p>
               <p>
                 ProPublica
                 <a href="https://www.propublica.org/">
                   https://www.propublica.org/
                 </a>
               </p>
               <p>
                 Snopes
                 <a href="https://www.snopes.com/">
                   https://www.snopes.com/
                 </a>
               </p>



             </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="4">
             <div className={classes.longTextClass}>
               <strong>impACT: Global Priorities Simulation</strong>
               <strong>Stakeholders' Directions</strong>
               <p>You are about to start a two-week simulation that explores the challenges and priorities of local and
                 global affairs.
                 There are two types of roles in this simulation: stakeholders (people with an interest or concern in
                 the outcome of
                 an issue) and the Deciding Committee (people who have the power to select the best solution to the
                 problem offered
                 by the stakeholder groups).</p>
               <p>As a key stakeholder, your goal is to persuade the Deciding Committee that your team has the best
                 solution to the
                 problem. That means you need to become familiar with the topic of the simulation so you have the
                 ability to advocate
                 on behalf of your solution. Use the impACT Brief selected for this simulation as a springboard to learn
                 more through
                 research.</p>
               <p>You will need to be creative, persuasive, and convincing! The outcome of the simulation will rest in
                 your ability to
                 make a sound and compelling argument.</p>
               <p>Please read this document thoroughly; it will prepare you for presenting a successful solution in next
                 week&rsquo;s
                 simulation.</p>
               <p>Good luck!</p>

               <br/><br/>
                 <strong>Table of Contents</strong>
                 <p><a href="#"> Stakeholders&rsquo; Checklist </a></p>
                 <p><a href="#"> Step 1: Review the impACT Brief and simulation format. </a></p>
                 <p><a href="#"> Step 2: Organize your team. </a></p>
                 <p><a href="#"> Step 3: Conduct research. </a></p>
                 <p><a href="#"> Step 4: Prepare to make your case! </a></p>
                 <p><a href="#"> Sample Statements </a></p>
                 <br/><br/>
                   <strong>Stakeholders&rsquo; Checklist</strong>
                   <p>⃞ Review the impACT Brief and the simulation format.</p>
                   <p>⃞ Conduct research.</p>
                   <p>⃞ Write an opening statement.</p>
                   <p>⃞ Write a proposal for your solution.</p>
                   <p>⃞ Write a closing statement.</p>
                   <p>⃞ Practice delivering your statements.</p>
                   <br/>
                     <strong>Step 1: Review the&nbsp;impACT Brief&nbsp;and simulation format.</strong>
                     <p>The impACT Brief gave you an overview of a global issue and a description of a real-life
                       scenario that you will be
                       acting out at next week&rsquo;s simulation. Pay close attention to the description of your
                       assigned stakeholder as
                       it will outline your goals and what you want to accomplish for this simulation. Keep this point
                       of view in mind as
                       you research and write arguments and statements to present in front of the Deciding
                       Committee.</p>
                     <p>At the end of the impACT Brief you&rsquo;ll find the Simulation Format. This table is there to
                       let you know what to
                       expect and where your speeches fit in.</p>

                     <strong>Step 2: Organize your team.</strong>
                     <p>As a team, decide how best to work together to accomplish your tasks. We suggest sharing the
                       tasks among each of your
                       team members, then coming together frequently to discuss and strategize. Team members should feel
                       free to schedule
                       strategizing meetings outside of club time as necessary.</p>
                     <h4>1 to 3 Researchers</h4>
                     <p>Researchers collect information on the issue to be used as part of the simulation.</p>
                     <h4>1 to 2 Writers</h4>
                     <p>Writers help construct arguments and prepare the opening statement, proposal, and closing
                       statement. Writers also
                       take notes during the simulation to be used for future discussion.</p>
                     <h4>1 to 3 Spokespersons</h4>
                     <p>The spokespeople deliver the team&rsquo;s statements during the simulation.</p>
                     <p><img title="" src={i2_f_4} alt=""/></p>
                     <strong>Step 3: Conduct research.</strong>
                     <p>In order to present a thorough solution that will impress the Deciding Committee, you need to be
                       fully informed about
                       the issue. When you can use facts and figures from your research to support the solution you are
                       proposing, your
                       argument becomes much more persuasive. Facts and figures will more likely convince the Deciding
                       Committee to select
                       your proposal as the winner. In order to find relevant facts about your issue, use the guiding
                       questions below to
                       help gather compelling information.</p>
                     <ul>
                       <li>Who are the parties affected by this issue?</li>
                       <li>How will your solution help achieve a positive outcome?</li>
                       <li>Are there any challenges to implementing your solution?</li>
                       <li>Has your solution been implemented in other countries? Was it successful or unsuccessful?
                         Why?
                       </li>
                       <li>What are some of the secondary benefits that could result from your solution?</li>
                     </ul>
                     <ul>
                       <li style={{paddingLeft: '60px'}}>- Economic factors? Example: Does your proposal bring in revenue?
                         Raise taxes?
                       </li>
                       <li style={{paddingLeft: '60px'}}>- Environmental factors? Example: Does your proposal endanger an
                         animal species?
                       </li>
                       <li style={{paddingLeft: '60px'}}>- Social factors? Example: Does your proposal provide you or
                         others with access to
                         valuable resources and data?
                       </li>
                     </ul>
                     <ul>
                       <li>What are the long-term implications if your proposal is chosen?</li>
                     </ul>
                     <ul>
                       <li style={{paddingLeft: '60px'}}>- Local implications?</li>
                       <li style={{paddingLeft: '60px'}}>- Global implications?</li>
                     </ul>
                     <ul>
                       <li>What are the long-term implications if your proposal is not&nbsp;chosen?</li>
                     </ul>
                     <ul>
                       <li style={{paddingLeft: '60px'}}>- Local implications?</li>
                       <li style={{paddingLeft: '60px'}}>- Global implications?</li>
                     </ul>
                     <p>Check out our Resources for Online Research&nbsp;for a list of helpful links to get you started
                       on your research.</p>
                     <br/>
                       <h4>Research Your Competition</h4>
                       <p>Find out what solutions other stakeholder groups might suggest during the simulation. What
                         does your competition
                         think? What are the major differences between the solution they are proposing and yours? Are
                         there any similarities?
                         Consider the economic, political, scientific, environmental, or social motivations they might
                         have. It&rsquo;s
                         important to understand the issue from their viewpoint in order to anticipate how they may
                         respond or react to your
                         solution. This will also help your team come up with a rebuttal when you have time to respond
                         to other teams during
                         the simulation. Understanding what other stakeholders bring to the table can help you present
                         your own agenda
                         strategically and effectively.</p>
                       <h4>Research collaboratively!</h4>
                       <p>Click the &ldquo;Notebook&rdquo; on your dashboard to access our collaborative tool that can
                         help you work together
                         easily. The Notebook allows people to work on a single document at the same time. You can see
                         and leave comments on
                         each other&rsquo;s research and make sure that team members&rsquo; efforts are not
                         overlapping.</p>
                       <strong>Step 4: Prepare to make your case!</strong>
                       <p>Each team needs to write three speeches in order to be ready for the simulation. Your team is
                         responsible for
                         preparing the items listed in the table below. Guidelines for each speech and a Sample Opening
                         Statement, a Sample
                         Proposal&nbsp;and a Sample Closing Statement&nbsp;are available on pages 6 and 7.</p>
                       <p>&nbsp;</p>
                       <table>
                         <tbody>
                         <tr>
                           <td colSpan="1" rowSpan="1">
                             <p>Speaking Tasks</p>
                           </td>
                           <td colSpan="1" rowSpan="1">
                             <p>Time Limit</p>
                           </td>
                         </tr>
                         <tr>
                           <td colSpan="1" rowSpan="1">
                             <p>Opening Statement</p>
                           </td>
                           <td colSpan="1" rowSpan="1">
                             <p>2 minutes</p>
                           </td>
                         </tr>
                         <tr>
                           <td colSpan="1" rowSpan="1">
                             <p>Proposal*</p>
                           </td>
                           <td colSpan="1" rowSpan="1">
                             <p>3 minutes</p>
                           </td>
                         </tr>
                         <tr>
                           <td colSpan="1" rowSpan="1">
                             <p>Closing Statement</p>
                           </td>
                           <td colSpan="1" rowSpan="1">
                             <p>2 minutes</p>
                           </td>
                         </tr>
                         </tbody>
                       </table>
                       <i>*In addition to the speaking tasks, teams will also field questions from the Deciding
                         Committee after presenting
                         their proposal.</i>
                       <p>Use the impACT Speech Writing Organizer&nbsp;to help you organize your research and write your
                         speeches.</p>
                       <br/>
                         <h4>Opening Statement (2 minutes)</h4>
                         <p>The opening statement should address the following:</p>
                         <ul>
                           <li>Briefly describe the issue.</li>
                           <li>Include facts and examples that help explain why this issue is important. For example,
                             clarify who is affected
                             by the issue and how they are impacted.
                           </li>
                           <li>Highlight how your perspective and expertise is necessary to address these challenges
                             successfully.
                           </li>
                         </ul>
                         <br/>
                           <h4>Propose Your Solution (3 minutes)</h4>
                           <p>The proposal should include the following:</p>
                           <ul>
                             <li>Address how your solution meets the criteria set forth by the Deciding Committee in
                               their call for proposals.
                             </li>
                             <li>Explain how your solution will improve or advance progress toward any greater goals.
                             </li>
                             <li>Give at least three clearly and thoroughly explained arguments, or reasons your
                               solution is the best option.
                               Include facts, statistics, and/or examples from your research to support your proposal.
                             </li>
                           </ul>
                           <br/>
                             <h4>Closing Statement (2 minutes)</h4>
                             <p>The closing statement should include the following:</p>
                             <ul>
                               <li>Summarize your idea and reiterate the most important points.</li>
                               <li>You may choose to include a thought-provoking question or a prediction that implies
                                 what the Deciding Committee
                                 stands to lose if another solution is chosen over yours. Be creative, persuasive, and
                                 convincing.
                               </li>
                               <li>Thank the other stakeholders for participating and the Deciding Committee for
                                 considering your proposal.
                               </li>
                             </ul>
                             <p>Practice, Practice, Practice! Even the most talented speakers practice their speeches
                               beforehand. Rehearse your
                               speech out loud and make changes as needed. Rehearsing also allows you to practice your
                               timing. To make sure that
                               you don't run over your allotted time, we encourage you to use an online script timer
                               such as Edge Studio&rsquo;s
                               words-to-time calculator: <a
                                 href="https://www.google.com/url?q=https://www.edgestudio.com/production/words-to-time-cal-culator&amp;sa=D&amp;ust=1584101761223000">
                                 https://www.edgestudio.com/production/words-to-time-cal-culator </a> . Knovva Academy
                               does not endorse this
                               website, but it is free, easy to use, and does not require registration.</p>
                             <br/><br/>
                               <strong>Sample Statements</strong>

                               <h4>Sample Opening Statement</h4>
                               <i>Welcome, members of the Deciding Committee and fellow stakeholders. We are here today
                                 to design the future of
                                 Globeville and improve mobility for its citizens. Globeville is facing an urgent
                                 challenge that is essential to city
                                 living: getting around.</i>
                               <i>As we all know, the UN has projected that two-thirds of the world&rsquo;s population
                                 will live in cities by the year
                                 2030. In response to its growing population, cities and surrounding areas should expect
                                 to see an increase in
                                 automobiles on the roads. McKinsey &amp; Company reports that auto sales are expected
                                 to increase from $70 million a
                                 year to $125 million by 2025, with more than half bought in cities.</i>
                               <i>However, most urban infrastructure is not equipped to handle such a dramatic increase
                                 in population and automobiles.
                                 This version of the future is neither sustainable nor inclusive. Let us present our
                                 vision for the future of
                                 Globeville.</i>
                               <h4>Sample Solution</h4>
                               <i>
                                 <p>Transportation has greatly improved since the first gasoline-powered automobile was
                                   built, only a little over a
                                   century ago. The future appears to be automated. We are here today to present our
                                   answer to improved urban
                                   mobility in Globeville: a ridesharing service called Ride-Happy that uses robo-taxis,
                                   which are a fleet of
                                   electric self-driving cars. Electric robo-taxis are the future of transportation and
                                   the answer to reduced
                                   traffic congestion, sustainability, and increased citizen freedom and mobility.</p>
                                 <p>Our solution will improve the flow of traffic and reduce the total number of cars on
                                   the road as it will
                                   drastically reduce overall car ownership. This reduction will result in better use of
                                   existing road capacity and
                                   reduce the need for cities and surrounding areas to invest in construction projects
                                   that build or widen roads.
                                   Additionally, research from McKinsey &amp; Company indicates that widespread urban
                                   adoption of self-driving cars
                                   &mdash; and robo-taxis specifically &mdash; could result in a 60% drop in the number
                                   of cars on city streets and
                                   up to 90% fewer road accidents. With fewer vehicles on city streets, space will be
                                   freed up for alternative
                                   uses, such as bicycle or walking lanes. Existing parking lots or parking garages may
                                   even be repurposed into
                                   green spaces, improving the quality of life for citizens and making our city a more
                                   vibrant place to live and
                                   work.</p>
                                 <p>Our fleet of robo-taxis are plug-in electric vehicles, making them a sustainable
                                   transportation solution. As
                                   reported by the US Environmental Protection Agency (EPA), in the United States alone,
                                   transportation contributes
                                   to nearly one-third of US carbon emissions. Electric cars produce zero tailpipe
                                   emissions, paving the way toward
                                   a sustainable future for Globeville. Ask us about our plans for installing charging
                                   stations around the
                                   city.</p>
                                 <p>Robo-taxis will improve mobility and provide an economical solution for all
                                   citizens. We encourage and
                                   incentivize ridesharing, which allows individuals to carpool to similar destinations
                                   and split the cost, saving
                                   money, time, and energy.</p>
                                 <p>With your support, we will provide transportation access to those with limited
                                   mobility, such as seniors,
                                   children, pregnant mothers, people with disabilities, and more. The most promising
                                   advantages include personal
                                   independence, increased sociability, and access to vital services. Adequate
                                   transportation access improves our
                                   economy as those that were unable to participate due to lack of transportation are
                                   now connected. With our
                                   solution, Globeville can be a national example of inclusivity and efficiency.</p></i>
                               <h4>Sample Closing Statement</h4>
                               <i>
                                 <p>We at RideHappy know that ridesharing and self-driving vehicles are the future of
                                   transportation. We strongly
                                   believe that our proposal, a fleet of zero-emission self-driving taxis known as
                                   robo-taxis, is the answer to
                                   improving urban mobility in Globeville. Cities benefit from being inclusive and
                                   accessible. Robo-taxis will
                                   allow all citizens the access and opportunity to participate in Globeville&rsquo;s
                                   economy.</p>
                                 <p>Robo-taxis are a long-term sustainable solution. With ridesharing, owning a car will
                                   no longer be a necessity,
                                   which means fewer cars on the roads and city streets. As a result, we can expect
                                   Globeville&rsquo;s carbon
                                   footprint to dramatically decrease. Our electric robo-taxis will do their part for
                                   the environment by producing
                                   zero tailpipe emissions. Investing in robo-taxis will also help Globeville cut costs
                                   citywide. City funding that
                                   has been set aside for parking-related infrastructure may be reinvested into new city
                                   projects. Land may be
                                   repurposed into walking or bicycle paths, or green community spaces. The real
                                   question is: Can Globeville afford
                                   not to make this change?</p>
                                 <p>We want to thank the Deciding Committee and the other stakeholders for taking the
                                   time to listen to us today, and
                                   we look forward to improving urban mobility for all.</p></i>
             </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="5">
              <div className={classes.longTextClass}>
                <h4>
                  impACT: Global Priorities
                </h4>
                <strong>
                  Preparation Guide
                </strong>

                <br/>

                  <strong>
                    Session Snapshot
                  </strong>
                  <p>
                    Over the next 60 minutes, students will be presented with an issue of real-world significance that
                    has many possible
                    solutions. The goal of the impACT Preparation session is for students to research and develop
                    strong, relevant, and
                    convincing arguments that answer this pressing issue. All students will learn about key stakeholders
                    (people or
                    organizations with an interest and investment in the issue) and then they will be assigned the role
                    of one of these
                    stakeholders to represent in the simulation. During next week&rsquo;s impACT Simulation, students
                    will deliver their
                    arguments and ideas for a solution in front of a board of judges called the Deciding Committee.
                  </p>
                  <strong>
                    Students will...
                  </strong>
                  <h4>
                    Learn
                  </h4>
                  <ul>
                    <li>
                      Build an argument that supports a solution to a problem.
                    </li>
                    <li>
                      Understand the role of a stakeholder by exploring the different voices and positions that exist in
                      local and
                      global affairs.
                    </li>
                  </ul>
                  <h4>
                    Reflect
                  </h4>
                  <ul>
                    <li>
                      Consider how to best represent their stakeholder&rsquo;s interests and present a convincing
                      argument for their
                      position.
                    </li>
                    <li>
                      Practice anticipating and responding to arguments from different perspectives than their own.
                    </li>
                  </ul>
                  <h4>
                    Make Connections
                  </h4>
                  <ul>
                    <li>
                      Practice their negotiating skills by understanding what other groups may think or believe and
                      learn to
                      anticipate counterarguments to their points.
                    </li>
                    <li>
                      Understand that issues of real-world significance often have many stakeholders and possible
                      solutions.
                    </li>
                  </ul>
                  <br/><br/>
                    <strong>
                      Session Prep
                    </strong>
                    <h4>
                      Materials needed:
                    </h4>
                    <ul>
                      <li>
                        timekeeping device
                      </li>
                      <li>
                        impACT Brief
                      </li>
                      <li>
                        Choose Your Stakeholder page
                      </li>
                      <li>
                        Deciding Committee Directions&nbsp;and Stakeholders&rsquo; Directions
                      </li>
                      <li>
                        tables/settings for teams of 3 to 5 students
                      </li>
                      <li>
                        device for conducting online research
                      </li>
                    </ul>
                    <p>
                      <strong>Time:</strong> 60 minutes
                    </p>
                    <p>
                      Please take breaks as needed during club meetings.
                    </p>
                    <br/><br/>
                      <strong>
                        Before The Meeting
                      </strong>
                      <ol start="1">
                        <li>
                          Remind club members to bring a device to this meeting as they will need to follow along online
                          to read the
                          necessary information for the simulation.
                        </li>
                        <li>
                          Print one copy of the Choose Your Stakeholder&nbsp;page so you can easily assign roles to
                          students.
                        </li>
                      </ol>
                      <p>
                        Holding impACT simulations takes time and practice! Teams might find they need more time to
                        prepare, particularly
                        during the first few simulations while everyone is still learning the rules. Feel free to be
                        flexible and spend more
                        than the suggested time preparing for impACT so club members feel invested in and excited about
                        the work they are
                        doing.
                      </p>
                      <br/>
                        <strong>
                          Session Plan
                        </strong>
                        <p>
                          <a href="#">
                            Topic Introduction and Group Selection (10 minutes)
                          </a>
                        </p>
                        <p>
                          <a href="#">
                            Team Research and Planning (45 minutes)
                          </a>
                        </p>
                        <p>
                          <a href="#">
                            Wrap Up (5 minutes)
                          </a>
                        </p>
                        <br/><br/>
                          <strong>
                            Topic Introduction and Group Selection (10 minutes)
                          </strong>
                          <h4>
                            Step 1: Direct club members to the online platform so everyone can review the week's impACT
                            Brief.&nbsp;
                          </h4>
                          <p>
                            Decide whether to read through the brief as a group, individually, or in pairs. Allow time
                            for questions about the
                            topic, the introduction, the scenario, or the stakeholders involved.
                          </p>
                          <h4>
                            Step 2: Assign roles.
                          </h4>
                          <p>
                            The facilitator should use the prepared Choose Your Stakeholder&nbsp;page to easily assign
                            the stakeholder roles to
                            club members. In addition, use the guidelines below.
                          </p>
                          <h4>
                            Rules for Assigning Roles
                          </h4>
                          <ul>
                            <li>
                              All stakeholders must be represented.
                            </li>
                            <li>
                              We suggest a minimum of three club members per stakeholder team, but teams may be larger
                              or smaller depending on
                              the size of your club.
                            </li>
                            <li>
                              Explain to students that their goal is to play the role to the best of their ability, even
                              if they don&rsquo;t
                              agree with it in reality.&nbsp;The challenge in this exercise is for students to fully
                              embody their role and
                              attempt to sway others with a well-reasoned and supported argument.
                            </li>
                            <li>
                              After receiving their roles, club members should move to sit in their respective teams.
                            </li>
                          </ul>
                          <br/><br/>
                            <strong>
                              Team Research and Planning (45 minutes)
                            </strong>
                            <h4>
                              Step 1: Direct club members to find the appropriate impACT guide online.
                            </h4>
                            <p>
                              There is one guide for the Stakeholders and one for the Deciding Committee. These are
                              step-by-step guides that will
                              prepare teams for the simulation.
                            </p>
                            <h4>
                              Step 2: Review the steps.
                            </h4>
                            <p>
                              Below is a list of the tasks each group needs to complete before the simulation. Take a
                              few minutes to read through
                              the checklist with the group.
                            </p>
                            <p>
                            </p>
                            <table>
                              <tbody>
                              <tr>
                                <td colSpan="3" rowSpan="1">
                                  <p>
                                    Stakeholder Teams and Deciding Committee Tasks
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Stakeholder Teams
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Deciding Committee
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Read the impACT Brief thoroughly.
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Organize your team.
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Conduct research on the topic.
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Write an opening statement.
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Write a statement that explains your solution to the problem.
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    -
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Write a closing statement.
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    -
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Practice presenting your statements.
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Review the rubric to understand how the Deciding Committee members will determine a
                                    winner at the end of
                                    the simulation.
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                              </tr>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    Write a decision statement explaining which Stakeholder team had the best solution
                                    and why.
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    -
                                  </p>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <p>
                                    ✔
                                  </p>
                                </td>
                              </tr>
                              </tbody>
                            </table>
                            <h4>
                              Step 3: Give club members time to research, write, and practice to prepare for next week's
                              simulation.
                            </h4>
                            <p>
                              Teams should read their guides thoroughly and let the facilitator know if they have any
                              questions.
                            </p>
                <br/>
                              <strong>
                                Wrap-Up (5 minutes)
                              </strong>
                              <h4>
                                Teams should evaluate their progress and plan ahead.
                              </h4>
                              <p>
                                Encourage club members to make a plan with their team to complete the remaining tasks.
                                It is strongly recommended
                                that each team schedules a time to meet or check in during the week to finish preparing.
                              </p>
                              <p>
                                At the beginning of next week's session, teams will be allowed 10 minutes to finalize
                                and practice before the
                                simulation begins. Remind club members that they may want to bring their devices again
                                next week to finalize and
                                practice their preparations.
                              </p>
              </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="6">
              <div className={classes.longTextClass}>
                <strong>
                  impACT Speechwriting Organizer
                </strong>
                <p>
                  Issue: <br/>
                  <hr style={{border: ' 1px solid rgba(0,0,20,0.2)', borderTop: '0px'}}/>
                </p>
                <p>
                  Your Stakeholder&rsquo;s Name and Solution: <br/>
                  <hr style={{border: ' 1px solid rgba(0,0,20,0.2)', borderTop: '0px'}}/>
                </p>
                <p>
                  Define Any Unknown Words: <br/>
                  <hr style={{border: ' 1px solid rgba(0,0,20,0.2)', borderTop: '0px'}}/>
                </p>

                <br/>
                  <strong>
                    Opening Statement
                  </strong>
                  <p>
                    Description of the Issue
                    <hr style={{border: ' 1px solid rgba(0,0,20,0.2)', borderTop: '0px'}}/>
                      <br/>
                        <hr style={{border: ' 1px solid rgba(0,0,20,0.2)', borderTop: '0px'}}/>
                          <br/>
                            <hr style={{border: ' 1px solid rgba(0,0,20,0.2)', borderTop: '0px'}}/>
                              <br/>
                                <hr style={{border: ' 1px solid rgba(0,0,20,0.2)', borderTop: '0px'}}/>
                  </p>
                  <p>
                  </p>
                  <table>
                    <tbody>
                    <tr>
                    </tr>
                    </tbody>
                  </table>
                <br/>
                    <strong>
                      Proposal Statement
                    </strong>
                    <p>
                      Outline Your Three Key Arguments
                    </p>
                    <p>
                    </p>
                    <table>
                      <tbody>
                      <tr>
                        <td colSpan="1" rowSpan="1" width="20%">
                          <p>
                            First Argument
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1" width="50%">
                          <p>
                            Evidence that supports your argument

                            (details, facts, and/or examples):
                          </p>
                          <br/><br/><br/>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <p>
                    </p>
                    <table>
                      <tbody>
                      <tr>
                        <td colSpan="1" rowSpan="1" width="20%">
                          <p>
                            Second Argument
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1" width="50%">
                          <p>
                            Evidence that supports your argument

                            (details, facts, and/or examples):
                          </p>
                          <br/><br/><br/>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                    <p>
                    </p>
                    <table>
                      <tbody>
                      <tr>
                        <td colSpan="1" rowSpan="1" width="20%">
                          <p>
                            Third Argument
                          </p>
                        </td>
                        <td colSpan="1" rowSpan="1" width="50%">
                          <p>
                            Evidence that supports your argument

                            (details, facts, and/or examples):
                          </p>
                          <br/><br/><br/>
                        </td>
                      </tr>
                      </tbody>
                    </table>
                <br/><br/>
                      <strong>
                        Closing Statement
                      </strong>
                      <p>
                      </p>
                      <table>
                        <tbody>
                        <tr>
                          <td colSpan="1" rowSpan="1" width="50%">
                            <p>
                              Restate solution:
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Summarize three key arguments:
                            </p>
                            <p>
                            </p>
                            <p>
                            </p>
                            <p>
                            </p>
                            <p>
                            </p>
                          </td>
                        </tr>
                        <tr>
                          <td colSpan="1" rowSpan="1">
                            <p>
                              Call to action:
                            </p>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <p>
                        <img title="" src={i2_f_6} alt=""/>
                      </p>


              </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="7">
              <div className={classes.longTextClass}>


                <strong>
                  impACT: Global Priorities Simulation Rubric
                </strong>
                <p>
                  <strong>Stakeholder:</strong><br/>
                  <hr style={{border: ' 1px solid rgba(0,0,20,0.2)', borderTop: '0px'}}/>
                </p>
                <p>
                  <strong>Directions:</strong> For each category, circle the score that best fits the presentation you saw. Only
                  one value may be circled in each row.&nbsp;The total score for each Stakeholder group is the sum of
                  points circled across all members of the Deciding Committee.
                </p>
                <p>
                </p>
                <table>
                  <tbody>
                  <tr>
                    <td colSpan="1" rowSpan="2">
                      <p>
                        Category
                      </p>
                    </td>
                    <td colSpan="3" rowSpan="1">
                      <p>
                        Criteria
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="7" width="20%" style={{verticalAlign: 'top'}}>
                      <p>
                        Notes
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        3 points
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        2 points
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        1 point
                      </p>
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
                        The proposal clearly identifies a solution and explains why other solutions are less preferable
                        in an organized and compelling manner.
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The proposal is mostly organized and compelling. It identifies a solution but does not explain
                        why other solutions are less preferable.
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The proposal is not organized, relevant, or compelling, and does not identify a clear solution.
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
                        Team members speak clearly and consistently, and use tone, speed, volume, and body language as
                        tools.
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Team members mostly speak clearly, and sometimes use tone, speed, volume, and body language as
                        tools.
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Team members are difficult to hear or understand, and do not use tone, speed, volume, and body
                        language as tools.
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </table>


              </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="8">
              <div className={classes.longTextClass}>
                <strong>
                  Choose Your Stakeholder
                </strong>
                <ul>
                  <li>
                    All stakeholders must be represented.
                  </li>
                  <li>
                    We suggest a minimum of three club members per stakeholder team, but teams may be larger or smaller
                    depending on the size of your club.
                  </li>
                  <li>
                    Play your role to the best of your ability, even if you don&rsquo;t agree with it in reality. Your
                    challenge in this exercise is to fully embody your role as well as attempt to sway others with a
                    well-reasoned and supported argument.
                  </li>
                </ul>
                <br/>
                  <p>
                    Roles are assigned at random. To assign roles, cut along the lines provided so that the name of each
                    stakeholder is on a small, separate slip of paper. Place the slips of paper word-side down on a
                    table. Invite club members, one to three at a time, to choose a slip of paper. The name on the slip
                    of paper will be their assigned stakeholder role for the simulation.
                  </p>
                  <p>
                  </p>
                  <table width="100%">
                    <tbody>
                    <tr>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          City Official
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          City Official
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          City Official
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          City Official
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          City Official
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          City Official
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Seaview Electric
                        </p>
                        <p>
                          &amp; Utility
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Seaview Electric
                        </p>
                        <p>
                          &amp; Utility
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          <br/>
                          Seaview Electric
                        </p>
                        <p>
                          &amp; Utility
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Seaview Electric
                        </p>
                        <p>
                          &amp; Utility
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Seaview Electric
                        </p>
                        <p>
                          &amp; Utility
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Seaview Electric
                        </p>
                        <p>
                          &amp; Utility
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          TrafficSense
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          TrafficSense
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          TrafficSense
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          TrafficSense
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          TrafficSense
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          TrafficSense
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Cloud Net
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Cloud Net
                        </p>
                      </td>
                    </tr>
                    <tr>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Cloud Net
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Cloud Net
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Cloud Net
                        </p>
                      </td>
                      <td colSpan="1" rowSpan="1">
                        <p>
                          Cloud Net
                        </p>
                      </td>
                    </tr>
                    </tbody>
                  </table>
                  <p>
                    <img title="" src={i2_f_8} alt=""/>
                  </p>


              </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="9">
              <div className={classes.longTextClass}>


                <table>
                  <tbody>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Word and Pronunciation
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Part of Speech
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Definition
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Inhabitant
                      </p>
                      <p>
                        &nbsp;\ in-ˈha-bə-tənt \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        noun
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        A person or animal that lives in a particular place
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Adapt
                      </p>
                      <p>
                        \ ə-ˈdapt \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        verb
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        To change something so that it functions better or is better suited to a situation
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Infrastructure
                      </p>
                      <p>
                        \ ˈin-frə-ˌstrək-chər \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        noun
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The basic physical and organizational structures and facilities (e.g. buildings, roads, power
                        supplies) needed for the operation of a country, society, or enterprise
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Data
                      </p>
                      <p>
                        \ ˈdā-tə \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        noun
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Facts or information used usually to calculate, analyze, or plan something
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Internet of Things (IoT)
                      </p>
                      <p>
                        \ ˈin-tər-ˌnet əv \ ˈthiŋs \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        phrase
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The networking capability that allows information to be sent to and received from objects and
                        devices, such as phones, kitchen appliances, and cars, using the Internet
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Sustainable
                      </p>
                      <p>
                        &nbsp;\ sə-ˈstā-nə-bəl \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        adjective
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Involving methods of using resources that are able to last for a long time and do not result in
                        the permanent damage or depletion of natural resources
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Focal point
                      </p>
                      <p>
                        &nbsp;\ ˈfō-kəl pȯint \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        phrase
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        A center of interest, attention or activity
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Sensor
                      </p>
                      <p>
                        \ ˈsen-ˌsȯr \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        noun
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        A device that detects or senses heat, light, sound, motion, etc., and reacts to it in a
                        particular way such as transmitting data
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Municipalities
                      </p>
                      <p>
                        \ myu̇-ˌni-sə-ˈpa-lə-tēs \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        noun
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        A city or town that has its own government to deal with local problems
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Multipurpose
                      </p>
                      <p>
                        \ ˌməl-tē-ˈpər-pəs \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        adjective
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Having more than one use or purpose
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        5G cellular network
                      </p>
                      <p>
                        \ ˈfīv - ˈjē ˈsel-yə-lə ˈnet-ˌwərk \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        phrase
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        5G refers to the fifth generation of digital mobile technology, engineered to greatly increase
                        the speed and responsiveness of wireless networks. Unlike 4G, which requires large, high-power
                        cell towers to radiate signals over longer distances, 5G wireless signals are transmitted via
                        large numbers of small cell stations located in places like light poles or building roofs.
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Hub
                      </p>
                      <p>
                        \ ˈhəb \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        noun
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        A center of activity
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Implication
                      </p>
                      <p>
                        \ ˌim-plə-ˈkā-shən \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        noun
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        A possible future effect or result
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Emissions
                      </p>
                      <p>
                        \ ē-ˈmi-shəns \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        noun
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Something sent out or given off such as energy or gas
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Energy footprint
                      </p>
                      <p>
                        \ ˈe-nər-jē ˈfu̇t-ˌprint \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        phrase
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        The assessment of the energy consumption related to a defined product, organization, or
                        territory, within a specific space or boundary
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Embedded
                      </p>
                      <p>
                        &nbsp;\ im-ˈbe-dəd \
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        adjective
                      </p>
                    </td>
                    <td colSpan="1" rowSpan="1">
                      <p>
                        Placed or set firmly into something
                      </p>
                    </td>
                  </tr>
                  </tbody>
                </table>


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

                <h4>
                  impACT: Global Priorities Simulation
                </h4>
                <strong>
                  Deciding Committee Directions
                </strong>
                <p>
                  You are about to start a two-week simulation that explores the challenges and priorities of local and
                  global affairs. There are two types of roles in this simulation: Stakeholders (people with an interest
                  or concern in the outcome of an issue) and the Deciding Committee (people who have
                </p>
                <p>
                  select the best solution to the problem offered by the stakeholder groups).
                </p>
                <p>
                  As a member of the Deciding Committee, you are responsible for moderating and deciding the outcome of
                  the simulation. That means you need to become so familiar with the topic of the simulation that you
                  have the ability to evaluate the merit of the solutions being presented to you. Use the impACT Brief
                  selected for this simulation as a springboard to learn more through research.
                </p>
                <p>
                  In the end, it's up to you to decide! The Stakeholders are here to present their proposals to you in
                  the hopes that you will choose their solution. Moderating is hard work! Please read this document
                  thoroughly; it will prepare you for leading and mediating a successful impACT session.
                </p>
                <p>
                  Good luck!
                </p>

                <br/><br/>
                  <strong>
                    Table of Contents
                  </strong>
                  <p>
                    <a href="#">
                      Deciding Committee Checklist
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Step 1: Review the impACT Brief and the simulation format.
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Step 2: Organize your team.
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Step 3: Conduct research.
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Step 4: Prepare to Moderate!
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Sample Opening Statement
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Come Up with Questions for Q&amp;A
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Deciding the Winner
                    </a>
                  </p>
                  <br/><br/>
                    <strong>
                      Deciding Committee Checklist
                    </strong>
                    <p>
                      ⃞ Review the impACT Brief and the simulation format.
                    </p>
                    <p>
                      ⃞ Conduct research on the topic.
                    </p>
                    <p>
                      ⃞ Write an opening statement.
                    </p>
                    <p>
                      ⃞ Generate a list of questions to ask Stakeholders during the Q&amp;A.
                    </p>
                    <p>
                      ⃞ Review the rubric.
                    </p>
                    <br/><br/>

                      <h4>
                        Step 1: Review the impACT Brief and the simulation format.
                      </h4>
                      <p>
                        The impACT Brief gave you an overview of a global issue and a description of a real-life
                        scenario that you will be acting out at next week&rsquo;s simulation. Pay close attention to the
                        description of the Deciding Committee. As a member of the Deciding Committee, you&rsquo;ll need
                        to be clear about what you want to accomplish when you listen to the
                        Stakeholders&rsquo; solutions. Keep this point of view in mind as you research, moderate, and
                        decide the outcome of the simulation.
                      </p>
                      <p>
                        At the end of the impACT Brief you&rsquo;ll find the Simulation Format. This table is there to
                        let you know what to expect and where your speeches fit in. As the moderator, you&rsquo;ll
                        notice that you have many speaking parts! During the actual simulation, you will receive a
                        script that you will follow to guide everyone through the session.
                      </p>
                      <h4>
                        Step 2: Organize your team.
                      </h4>
                      <p>
                        As a team, decide how best to work together to accomplish your tasks. We suggest sharing the
                        different tasks among each of your team members, then coming together frequently to discuss and
                        strategize. Team members should feel free to schedule strategizing meetings outside of club time
                        as necessary.
                      </p>
                      <h4>
                        1 to 3 Researchers
                      </h4>
                      <p>
                        Researchers collect information on the issue to be used as part of the simulation.
                      </p>
                      <h4>
                        1 to 2 Writers
                      </h4>
                      <p>
                        Writers prepare the opening statement, list of questions, and the draft of the Committee's
                        decision at the end of the simulation.
                      </p>
                      <h4>
                        1 to 3 Spokespersons
                      </h4>
                      <p>
                        The spokesperson(s) delivers the team&rsquo;s statements during the simulation.
                      </p>
                      <h4>
                        1 to 2 Timekeepers
                      </h4>
                      <p>
                        During next week's simulation, the timekeeper(s) will keep track of time during the
                        Stakeholder's speeches.
                      </p>
                      <p>
                        <img title="" src={i2_s_1} alt=""/>
                      </p>
                      <h4>
                        Step 3: Conduct research.
                      </h4>
                      <p>
                        You'll need to be informed about the issue in order to decide which proposal is the best
                        solution to your problem. A big part of your job is anticipating the proposals you might hear
                        from the Stakeholders. Come up with a list of possibilities and go from there. Then, consider
                        what the major differences and similarities are between the different Stakeholders and their
                        proposals. Consider the economic, political, scientific, environmental, or social motivations
                        each Stakeholder might have. Use the guiding research questions below to help get you started.
                      </p>
                      <ul>
                        <li>
                          What is the issue?
                        </li>
                        <li>
                          Who are the parties affected by this issue?
                        </li>
                        <li>
                          What are the solutions the Stakeholders may propose?
                        </li>
                        <li>
                          What are some of the effects that will result from each solution?
                        </li>
                        <li>
                          Are there groups or organizations that will benefit from each solution? Are there groups that
                          will feel negative effects? Examples: businesses, adults, children, traffic patterns
                        </li>
                        <li>
                          Has this solution been implemented in other countries? Was it successful or unsuccessful? Why?
                        </li>
                        <li>
                          What are some of the secondary (extra) benefits that could result from each solution?
                        </li>
                      </ul>
                      <ul>
                        <li style={{paddingLeft: '50px'}}>
                          Economic factors? Example: Does the proposal bring in revenue? Raise taxes?
                        </li>
                        <li style={{paddingLeft: '50px'}}>
                          Environmental factors? Example: Does the proposal endanger an animal species?
                        </li>
                        <li style={{paddingLeft: '50px'}}>
                          Social factors? Example: Does the proposal provide you with access to valuable resources and
                          data?
                        </li>
                      </ul>
                      <ul>
                        <li>
                          What are the long-term implications of each solution, if it&rsquo;s chosen?
                        </li>
                      </ul>
                      <ul>
                        <li style={{paddingLeft: '50px'}}>
                          Local implications?
                        </li>
                        <li style={{paddingLeft: '50px'}}>
                          Global implications?
                        </li>
                      </ul>
                      <ul>
                        <li>
                          What are the long-term implications of each solution, if it is not chosen?
                        </li>
                      </ul>
                      <ul>
                        <li style={{paddingLeft: '50px'}}>
                          Local implications?
                        </li>
                        <li style={{paddingLeft: '50px'}}>
                          Global implications?
                        </li>
                      </ul>
                      <br/><br/>
                        <p>
                          Check out our Resources for Online Research&nbsp;for a list of helpful links to get you
                          started on your research.
                        </p>
                        <h4>
                          Research collaboratively!
                        </h4>
                        <p>
                          Click the &ldquo;Notebook&rdquo; on your dashboard to access our collaborative tool that can
                          help you work easily together. The Notebook allows people to work on a single document at the
                          same time. You can see and leave comments on each other&rsquo;s research and make sure that
                          team members&rsquo; efforts are not overlapping.
                        </p>
                        <strong>
                          Step 4: Prepare to Moderate!
                        </strong>
                        <p>
                          Your speaking tasks and responsibilities will look slightly different than the Stakeholders as
                          you are hosting and moderating the simulation. Your team is responsible for preparing the
                          items listed in the table below. Divide up the moderator duties: decide who will speak and
                          when, and select someone for the timekeeper job.
                        </p>
                        <p>
                        </p>
                        <table>
                          <tbody>
                          <tr>
                            <td colSpan="1" rowSpan="1">
                              <h4>
                                Speaking Tasks
                              </h4>
                            </td>
                            <td colSpan="1" rowSpan="1">
                              <h4>
                                Time Limit
                              </h4>
                            </td>
                          </tr>
                          <tr>
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
                                Questions for Q&amp;A
                              </p>
                            </td>
                            <td colSpan="1" rowSpan="1">
                              <p>
                                5 minutes or 5 questions per stakeholder
                              </p>
                            </td>
                          </tr>
                          <tr>
                            <td colSpan="1" rowSpan="1">
                              <p>
                                Decision*
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
                        <p>
                          *You will have time to draft and present your decision during the simulation.
                        </p>
                        <p>
                          Write Your Opening Statement
                        </p>
                        <p>
                          As the moderator you get to begin the simulation! You will have up to three minutes for your
                          opening statement. The opening statement should include and/or address the following:
                        </p>
                        <ul>
                          <li>
                            Welcome all Stakeholders and set the tone for a respectful discussion.
                          </li>
                          <li>
                            Provide an overview of the issue and remind the Stakeholders about any objectives that you
                            will be looking out for in their proposals (such as more jobs or lower carbon footprint).
                          </li>
                          <li>
                            Explain why this issue is important to the members of your Deciding Committee and how it
                            will affect the people they serve.
                          </li>
                          <li>
                            Share that your team is looking forward to hearing all thoughts on the issue and will take
                            proposals into equal consideration.
                          </li>
                        </ul>
                        <br/><br/>
                          <strong>
                            Sample Opening Statement
                          </strong>
                          <i>
                            <p>
                              From all of us at the Globeville Municipal Transportation Board, we thank you for being
                              here today to address the future of transportation in our city. Worldwide, city
                              populations are growing rapidly and do not show signs of slowing down anytime soon.
                              According to the UN, two-thirds of the world&rsquo;s population will live in cities by the
                              year 2030.
                            </p>
                            <p>
                              As you know, cities are places of movement. The movement of people, products, cars,
                              trucks, bicycles, scooters, and more. Urban planners and municipal transportation boards,
                              including ours, are faced with the challenge of adapting city infrastructure to support a
                              growing population in a way that improves mobility. Urban mobility is the movement of
                              people and products within urban areas. Improvement in urban mobility is necessary to
                              bring cities into the future. This improvement can be made possible through technological
                              advances and new mobility services.
                            </p>
                            <p>
                              If mobility goes unaddressed, this can have disastrous effects for our city. According to
                              McKinsey &amp; Company, inadequate systems of urban mobility can cost anywhere from 2 to 4
                              percent of a nation&rsquo;s Gross Domestic Product (GDP) by measures such as lost
                              productivity, wasted fuel, and increased business costs.
                            </p>
                            <p>
                              Until now, mobility in Globeville has been manageable. Our population has increased by
                              nearly 20 percent in the past 10 years, making Globeville the current home to 700,000
                              people. Our city welcomes an additional 150,000 people each day for work. While we are
                              proud of Globeville&rsquo;s growth, we can no longer ignore the effects that our growth
                              has had on road safety and the strain it has put on our aging public transportation
                              system.
                            </p>
                            <p>
                              As we expect our population to continue to increase in the coming decades, we must look
                              toward the future and explore the technological advances and new services that will make
                              transportation in and out of our city more efficient. It is important for us to act now!
                              By solving the challenge of urban mobility, we can anticipate great improvements in the
                              quality of life for our citizens.
                            </p>
                            <p>
                              We are calling on you to help develop our vision for urban mobility in Globeville. We are
                              looking for solutions that address the following concerns: the need for increased urban
                              mobility that is sustainable, inclusive for those with disabilities and/or limited
                              mobility, and improves the quality of life for our citizens. We have seen other cities
                              introduce advancements in urban mobility from electric cars to ridesharing services,
                              digitally connected mass transit railways, and more recently, self-driving cars and
                              shuttle buses. We recognize that increased mobility has a number of benefits including
                              increased access to jobs and a greater sense of freedom for citizens. This is an
                              opportunity not only to shape the future of Globeville but to design it! We look forward
                              to hearing your perspectives on the issue and taking your proposals into consideration.
                            </p>
                          </i>
                          <br/>
                            <strong>
                              Come Up with Questions for Q&amp;A
                            </strong>
                            <p>
                              After each Stakeholder proposes their solution, you will have the opportunity to ask
                              follow-up and/or clarifying questions. You will want to come prepared with a list of
                              questions to ask each team.
                            </p>
                            <p>
                              Review the Stakeholders&rsquo; positions and using your research, come up with a list of 5
                              to 10 questions to ask Stakeholders during Q&amp;A time.
                            </p>
                            <p>
                              Here are some questions to get you started:
                            </p>
                            <ul>
                              <li>
                                What are some potential issues we may have with implementing your proposal?
                              </li>
                              <li>
                                Are there any secondary benefits to choosing your proposal?
                              </li>
                              <li>
                                We notice that your proposal does not meet all of our criteria. Why should we still
                                choose you?
                              </li>
                            </ul>
                            <p>
                              Note: Based on what you hear during the actual simulation you may come up with new
                              questions on the spot based on facts, examples, and arguments presented by each
                              Stakeholder.
                            </p>
                            <br/>
                              <strong>
                                Deciding the Winner
                              </strong>
                              <p>
                                Your job is to judge the proposals from the perspective and agenda of your own role. You
                                will use the impACT Rubric&nbsp;to decide on the outcome and &ldquo;winner&rdquo; of the
                                simulation.&nbsp;Make sure to review the rubric as a team so you know what criteria to
                                look out for!
                              </p>
                              <p>
                                During the simulation, each member of the Deciding Committee will evaluate each
                                Stakeholder&rsquo;s performance by filling out a rubric.
                              </p>
                              <p>
                                After the final Stakeholder presents their closing statement, there will be a short
                                break for the Deciding Committee to deliberate. Deliberation is when the Deciding
                                Committee gathers
                              </p>
                              <p>
                                together to carefully consider each proposal and decide on a &ldquo;winner.&rdquo;
                              </p>
                              <p>
                                Using the scores tallied and any notes, collectively choose one stakeholder as the
                                winner. Then, draft a 1- to 3-sentence statement explaining your decision and giving
                                concrete reasons why you chose the solution presented by this particular stakeholder.
                                You will end the simulation by presenting your decision to the group.
                              </p>


              </div>
            </TabPane>
            <TabPane tab="Session Snapshot & Prep" key="2">
              <div className={classes.longTextClass}>

                <h4>
                  impACT Brief
                </h4>
                <strong>
                  Seaview: Smart Technology for a Safer and More Sustainable City
                </strong>
                <br/>
                  <strong>
                    Introduction: Smart Cities
                  </strong>
                  <p>
                    The United Nations predicts that 60 percent of the global population will live in cities by 2030 and
                    one in three people will live in cities with at least half a million inhabitants. It is necessary
                    for cities to adapt&nbsp;and improve their infrastructure&nbsp;to ensure that cities will remain
                    livable for their growing populations. Understanding the improvements that need to be made to urban
                    areas is at the heart of smart city creation. Smart cities use data&nbsp;and smart technology, also
                    called the internet of things&nbsp;(IoT), to make cities more intelligent, efficient, safer, and
                    more sustainable.
                  </p>
                  <p>
                    Collecting data and using it to drive real-time policy decisions is a major focal point&nbsp;of how
                    smart cities work. Smart technology is ever-evolving to capture new and different types of data such
                    as foot and vehicle traffic, road surface temperatures, noise pollution, pollen levels, fires,
                    crime, weather, and more. Information is gathered through sensors, digital tags, and other forms of
                    data collection technology that attach to city infrastructures, such as traffic lights and parking
                    garages.
                  </p>
                  <p>
                    Cities have begun to draw on this data to make better decisions and respond to the problems of urban
                    life faster and with more cost-effective solutions. For example, municipalities&nbsp;have been
                    installing garbage cans that alert city officials when they are full and ready for disposal.
                    Municipalities have also been replacing traditional street light poles with intelligent,
                    multipurpose&nbsp;Smart Poles, which can be customized to fit a city&rsquo;s specific needs, such as
                    providing charging stations for electric vehicles and 5G cellular network&nbsp;connectivity.
                  </p>
                  <br/>
                    <strong>
                      Seaview: Smart Technology for a Safer and More Sustainable City
                    </strong>
                    <p>
                      Seaview, a mid-sized coastal city in the nation of Freedonia, boasts a population of more than
                      450,000 people covering 222 square kilometers. The city has experienced enormous growth over the
                      past fifteen years and has been featured in national media as the &ldquo;#1 Fastest Growing
                      City&rdquo; for three years in a row.
                    </p>
                    <p>
                      Thrilled with the growth and publicity that Seaview has been afforded, city officials have
                      recognized the need to respond to the changing cityscape. This rapid growth and expansion has
                      impacted the city in numerous ways. While city officials have been working to understand changing
                      trends and improve the quality of life with effective, efficient, and sustainable solutions, they
                      lack the means of collecting comprehensive data to make such decisions.
                    </p>
                    <p>
                      City officials recently secured a research grant from Smart Futures, Inc., a worldwide global
                      innovation firm, to bring smart technology to Seaview, making it the first city in the entire
                      nation of Freedonia to adopt smart technology. The research grant will effectively turn Seaview
                      into an &ldquo;urban laboratory&rdquo; and hub&nbsp;of smart technology and data collection. The
                      data collected will not only have implications&nbsp;for Seaview but will help set standards
                      nationwide for how growing cities will work and be run in the future. The initial grant requires
                      that Seaview follow two guidelines: incorporate smart technology with existing infrastructure and
                      share all data with Smart Futures, Inc.
                    </p>
                    <p>
                      In an effort to improve the quality of life of city dwellers and compete with the most livable
                      cities globally, city officials announced that Seaview will begin its transformation into a smart
                      city by outfitting the city&rsquo;s nearly 2,500 street light poles with &ldquo;smart sensors."
                    </p>
                    <p>
                      And city officials have called for even more smart technologies! They are looking for companies or
                      organizations whose &ldquo;smart sensor&rdquo; products can be added to existing street light
                      poles to turn them into Smart Poles. These technologies will observe the city and capture data
                      that will be used to inform and improve the two most pressing public issues in Seaview: vehicle
                      and pedestrian safety as well as sustainability.
                    </p>
                    <p>
                      &ldquo;The 19th century was a century of empires, the 20th century, a century of nation-states.
                      The 21st century will be a century of cities.&rdquo; - Former Denver, CO Mayor W. Webb
                    </p>
                    <br/><br/>
                      <strong>
                        Stakeholder Position Descriptions
                      </strong>
                      <h4>
                        Deciding Committee | City Officials
                      </h4>
                      <p>
                        You are members of Seaview&rsquo;s municipal government and represent a broad array of
                        interests. It is your job to decide which smart technology Seaview will invest in first. Your
                        group members are especially concerned with ensuring that Seaview takes appropriate measures to
                        address sustainability challenges that are a result of its rapid expansion. In fact, your office
                        has been busy fielding phone calls and responding to emails from concerned constituents who see
                        the increase in traffic congestion and accidents and are calling for the city to take action
                        regarding vehicle and pedestrian safety. You are eager to bring in technologies that will allow
                        you to improve vehicle and pedestrian safety and sustainability across the city. Once all of the
                        stakeholders have presented their solutions, you will choose the solution you feel best fits the
                        needs of Seaview.
                      </p>
                      <h4>
                        Stakeholder #1 | Seaview Electric &amp; Utility
                      </h4>
                      <p>
                        You are the primary electric and utility company in Seaview and have been looking for an
                        opportunity to bring more sustainable power usage options to the city. Data shows that street
                        lighting accounts for nearly 40% of a city&rsquo;s total energy costs. You seek to replace the
                        existing halogen street lights with energy-efficient smart LED lamps for a more cost-effective
                        option. More importantly, LED lamps will result in a steep decrease in energy usage, making this
                        an enormous step toward long-term sustainability goals and a lowered energy footprint. Energy
                        and monetary savings can be increased even more through the use of embedded&nbsp;motion sensors
                        that can be set to dim or brighten as needed, depending on the time of day and foot traffic. The
                        light-adjusting motion sensors will improve bicycle and pedestrian safety and representatives
                        from your group have already begun to discuss how these sensors can be used to prevent and/or
                        deter crime.
                      </p>
                      <p>
                        City lighting alone represents 19% of the world&rsquo;s total electricity consumption.
                      </p>
                      <h4>
                        Stakeholder #2 | TrafficSense
                      </h4>
                      <p>
                        You are an emerging tech start-up eager to gain recognition with your first product, a smart
                        sensor and a corresponding mobile app that will solve the problem of city parking and ease
                        traffic congestion. Data shows that upwards of 30% of all traffic congestion in cities is due to
                        drivers looking for parking. Your product uses sensors that will send a signal to indicate
                        available parking spots around the city, which citizens can access via a mobile app. You are
                        certain that your product will result in a dramatic decrease in traffic, lowered CO2 emissions,
                        and a decrease in fuel waste due to fewer cars circling the city&rsquo;s streets. Your group is
                        also interested in using the collected data to gain insight into the city&rsquo;s vehicle and
                        foot traffic patterns. This data has the potential to drive economic development in Seaview,
                        such as identifying locations for new restaurants and other businesses and may be of interest to
                        certain city officials.
                      </p>
                      <h4>
                        Stakeholder #3 | Cloud Net
                      </h4>
                      <p>
                        You are a tech start-up with an interest in public safety. Your product tracks weather patterns
                        and communicates that information within the network of streetlights to adjust the lighting
                        based on weather conditions. These adjustments improve visibility in poor weather conditions,
                        which reduces traffic accidents. In addition to the sensor, your product includes a digital LED
                        panel that attaches to the streetlight and displays up-to-date public safety, travel, and
                        weather information for people driving and walking by. The panels are equipped with speakers
                        that can be used to warn people who are close-by about storms or other dangers. The displays may
                        provide an additional revenue stream for the city as they can be used for advertising and
                        eliminate the need for paper flyers or brochures.
                      </p>
                      <p>
                        It is estimated that three million people around the world are moving to cities every week.
                      </p>
                      <br/><br/>
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
                              All club members must remain respectful of one another at all times.
                            </li>
                            <li>
                              All statements should focus on the argument itself and should be spoken about in a
                              respectful way.
                            </li>
                            <li>
                              Teams should not be interrupted by another team during their turn to speak unless it is
                              the time-keeper announcing that time is up.
                            </li>
                            <li>
                              The Deciding Committee agrees to remain fair and impartial when deciding the winning
                              solution.
                            </li>
                            <li>
                              Club members agree to respect the decision of the Deciding Committee at the end of the
                              simulation.
                            </li>
                          </ol>
                          <p>
                          </p>
                          <p>
                            <img title="" src={i2_s_2} alt=""/>
                          </p>


              </div>
            </TabPane>
            <TabPane tab="Session Plan" key="3">
              <div className={classes.longTextClass}>

                <strong>
                  Resources for Online Research
                </strong>
                <p>
                  Internet research is an important tool for any student, whether writing a paper or crafting a strong argument for impACT simulation. Strong research is about both finding a wide-range of sources and verifying the content as reliable. The guide below will help you understand the process of finding sources and evaluating them. Have questions? Check with your club&rsquo;s faculty advisor!
                </p>
                <br/>
                  <strong>
                    Finding Sources
                  </strong>
                  <h4>
                    Using common internet sources.
                  </h4>
                  <p>
                    There is nothing wrong with starting your search for information on Google, or Wikipedia, but those should be your starting points, not your destinations. Wikipedia, for example, has a lot of curated information, but is still an encyclopedia, and would never be accepted in an academic setting. INSTEAD, use the Works Cited and References section at the bottom of any Wikipedia article to get an immediate working bibliography to draw on.
                  </p>
                  <b>
                    Know where you are in the research process.
                  </b>
                  <p>
                    Websites and their information can be all over the place &ndash; so it&rsquo;s important that you look for information that matches your understanding of the topic.
                  </p>
                  <ul>
                    <li>
                      Are you new to the topic? Start with encyclopedia entries like Wikipedia, news or magazine articles or summaries. While these will not be very helpful for deep analysis, or citations, they will allow you to gain a basic understanding of the topic so you can dive deeper into the research later on.
                    </li>
                    <li>
                      Are you well-versed in the topic? Take a look at scholarly articles, academic journals or opinion pieces. These will give you professional opinions and analysis that you can evaluate and relate to your argument.
                    </li>
                  </ul>
                  <br/>
                    <h4>
                      Skim, Don&rsquo;t Read!
                    </h4>
                    <p>
                      Many websites may contain a lot of information that will not be exactly relevant to what you are trying to argue/understand. Don&rsquo;t get discouraged! Once you understand your topic, you should be looking to find the most relevant information from your sources. Skim the site, and find sections or headings that seem more relevant than others. If you only use a site for a single fact, that&rsquo;s perfectly valid!
                    </p>
                    <strong>
                      Start your research!
                    </strong>
                    <p>
                      In order to bring you a list of the best online resources for research purposes, we conducted our own extensive resource search and examined for quality and reliability. Explore the links below for a list of mG20 In Action-approved resources and don&rsquo;t forget to bookmark them for future research!
                    </p>
                    <b>
                      Learn about what is happening across the world with these news resources!
                    </b>
                    <p>
                      Reuters
                      <a href="https://www.reuters.com/">
                        https://www.reuters.com/
                      </a>
                    </p>
                    <p>
                      Associated Press
                      <a href="https://www.apnews.com/">
                        https://www.apnews.com/
                      </a>
                    </p>
                    <p>
                      National Public Radio - NPR
                      <a href="https://www.npr.org/">
                        https://www.npr.org/
                      </a>
                    </p>
                    <p>
                      The New York Times
                      <a href="https://www.nytimes.com/">
                        https://www.nytimes.com/
                      </a>
                    </p>
                    <p>
                      The Economist
                      <a href="https://www.economist.com/">
                        https://www.economist.com
                      </a>
                    </p>
                    <p>
                      The Wall Street Journal
                      <a href="https://www.wsj.com/">
                        https://www.wsj.com/
                      </a>
                    </p>
                    <p>
                      All Sides
                      <a href="https://www.allsides.com/unbiased-balanced-news">
                        https://www.allsides.com/unbiased-balanced-news
                      </a>
                    </p>
                    <p>
                      BBC
                      <a href="http://www.bbc.com/">
                        http://www.bbc.com/
                      </a>
                    </p>
                    <p>
                      CNN
                      <a href="http://www.cnn.com/">
                        http://www.cnn.com/
                      </a>
                    </p>
                    <p>
                      Al-Jazeera
                      <a href="https://www.aljazeera.com/">
                        https://www.aljazeera.com/
                      </a>
                    </p>
                    <p>
                      Pew Research Center
                      <a href="http://www.pewresearch.org">
                        http://www.pewresearch.org/
                      </a>
                    </p>
                    <p>
                      Newspaper Source Plus
                      <a href="https://www.ebsco.com/products/research-databases/newspaper-source-plus">
                        https://www.ebsco.com/products/research-databases/newspaper-source-plus
                      </a>
                    </p>
                    <h4>
                      Check out these academic search engines!
                    </h4>
                    <p>
                      Microsoft Academic:
                      <a href="https://academic.microsoft.com">
                        https://academic.microsoft.com/
                      </a>
                      &nbsp;
                    </p>
                    <p>
                      Google Scholar:
                      <a href="https://scholar.google.com/">
                        https://scholar.google.com/
                      </a>
                    </p>
                    <p>
                      Baidu Scholar:
                      <a href="http://xueshu.baidu.com/">
                        http://xueshu.baidu.com/
                      </a>
                    </p>
                    <h4>
                      Explore scholarly journals and databases!
                    </h4>
                    <p>
                      JSTOR
                      <a href="https://www.jstor.org/">
                        https://www.jstor.org/
                      </a>
                    </p>
                    <p>
                      World Bank - Open Data
                      <a href="https://data.worldbank.org">
                        https://data.worldbank.org/
                      </a>
                      &nbsp;
                    </p>
                    <p>
                      World Economic Forum
                      <a href="https://www.weforum.org/">
                        https://www.weforum.org/
                      </a>
                      &nbsp;
                    </p>
                    <p>
                      Brookings Institute
                      <a href="https://www.brookings.edu/">
                        https://www.brookings.edu/
                      </a>
                      &nbsp;
                    </p>
                    <p>
                      The World Factbook -
                      <a href="https://www.cia.gov/library/publications/the-world-factbook/">
                        https://www.cia.gov/library/publications/the-world-factbook/
                      </a>
                    </p>
                    <p>
                      US Library of Congress archives
                      <a href="https://www.loc.gov/">
                        https://www.loc.gov/
                      </a>
                    </p>
                    <p>
                      CKNI
                      <a href="http://www.cnki.net/">
                        http://www.cnki.net/
                      </a>
                    </p>
                    <p>
                      Journal of Politics
                      <a href="http://www.journals.uchicago.edu/toc/jop/current">
                        http://www.journals.uchicago.edu/toc/jop/current
                      </a>
                    </p>
                    <p>
                      Brazilian Political Science Review
                      <a href="http://www.bpsr.org.br/index.php/bpsr">
                        http://www.bpsr.org.br/index.php/bpsr
                      </a>
                    </p>
                    <p>
                      Journal of Current Chinese Affairs
                      <a href="http://journals.sub.uni-hamburg.de/giga/jcca/">
                        http://journals.sub.uni-hamburg.de/giga/jcca/
                      </a>
                    </p>
                    <p>
                      Harvard Political Review
                      <a href="http://harvardpolitics.com/">
                        http://harvardpolitics.com/
                      </a>
                    </p>
                    <p>
                      Yale Journal of International Affairs
                      <a href="http://yalejournal.org/">
                        http://yalejournal.org/
                      </a>
                    </p>
                    <h4>
                      Ensure accuracy with fact-checking websites!
                    </h4>
                    <p>
                      Politifact
                      <a href="http://www.politifact.com/">
                        http://www.politifact.com/
                      </a>
                    </p>
                    <p>
                      FactCheck.org
                      <a href="https://www.factcheck.org/">
                        https://www.factcheck.org/
                      </a>
                    </p>
                    <p>
                      ProPublica
                      <a href="https://www.propublica.org/">
                        https://www.propublica.org/
                      </a>
                    </p>
                    <p>
                      Snopes
                      <a href="https://www.snopes.com/">
                        https://www.snopes.com/
                      </a>
                    </p>


              </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="4">
              <div className={classes.longTextClass}>

                <h4>
                  impACT: Global Priorities Simulation
                </h4>
                <strong>
                  Stakeholders' Directions
                </strong>
                <p>
                  You are about to start a two-week simulation that explores the challenges and priorities of local and
                  global affairs. There are two types of roles in this simulation: Stakeholders (people with an interest
                  or concern in the outcome of an issue) and the Deciding Committee (people who have the power to select
                  the best solution to the problem offered by the stakeholder groups).
                </p>
                <p>
                  As a key Stakeholder, your goal is to persuade the Deciding Committee that your team has the best
                  solution to the problem. That means you need to become familiar with the topic of the simulation so
                  you have the ability to advocate on behalf of your solution. Use the impACT Brief selected for this
                  simulation as a springboard to learn more through research.
                </p>
                <p>
                  You will need to be creative, persuasive, and convincing! The outcome of the simulation will rest in
                  your ability to make a sound and compelling argument.
                </p>
                <p>
                  Please read this document thoroughly; it will prepare you for presenting a successful solution in next
                  week&rsquo;s simulation.
                </p>
                <p>
                  Good luck!
                </p>
                <br/><br/>
                  <strong>
                    Table of Contents
                  </strong>
                  <p>
                    <a href="#">
                      Stakeholders&rsquo; Checklist
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Step 1: Review the impACT Brief and simulation format.
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Step 2: Organize your team.
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Step 3: Conduct research.
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Step 4: Prepare to make your case!
                    </a>
                  </p>
                  <p>
                    <a href="#">
                      Sample Statements
                    </a>
                  </p>
                  <br/>
                    <strong>
                      Stakeholders&rsquo; Checklist
                    </strong>
                    <p>
                      ⃞ Review the impACT Brief and the simulation format.
                    </p>
                    <p>
                      ⃞ Conduct research.
                    </p>
                    <p>
                      ⃞ Write an opening statement.
                    </p>
                    <p>
                      ⃞ Write a proposal for your solution.
                    </p>
                    <p>
                      ⃞ Write a closing statement.
                    </p>
                    <p>
                      ⃞ Practice delivering your statements.
                    </p>
                    <br/>
                      <strong>
                        Step 1: Review the&nbsp;impACT Brief&nbsp;and simulation format.
                      </strong>
                      <p>
                        The impACT Brief gave you an overview of a global issue and a description of a real-life
                        scenario that you will be acting out at next week&rsquo;s simulation. Pay close attention to the
                        description of your assigned Stakeholder as it will outline your goals and what you want to
                        accomplish for this simulation. Keep this point of view in mind as you research and write
                        arguments and statements to present in front of the Deciding Committee.
                      </p>
                      <p>
                        At the end of the impACT Brief you&rsquo;ll find the Simulation Format. This table is there to
                        let you know what to expect and where your speeches fit in.
                      </p>
                      <br/>
                        <strong>
                          Step 2: Organize your team.
                        </strong>
                        <p>
                          As a team, decide how best to work together to accomplish your tasks. We suggest sharing the
                          different tasks among each of your team members, then coming together frequently to discuss
                          and strategize. Team members should feel free to schedule strategizing meetings outside of
                          club time as necessary.
                        </p>
                        <h4>
                          1 to 3 Researchers
                        </h4>
                        <p>
                          Researchers collect information on the issue to be used as part of the simulation.
                        </p>
                        <h4>
                          1 to 2 Writers
                        </h4>
                        <p>
                          Writers help construct arguments and prepare the opening statement, proposal, and closing
                          statement. Writers also take notes during the simulation to be used for future discussion.
                        </p>
                        <h4>
                          1 to 3 Spokespersons
                        </h4>
                        <p>
                          The spokesperson(s) delivers the team&rsquo;s statements during the simulation.
                        </p>
                        <p>
                          <img title="" src={i2_s_4} alt=""/>
                        </p>
                        <br/>
                          <strong>
                            Step 3: Conduct research.
                          </strong>
                          <p>
                            In order to present a thorough solution that will impress the Deciding Committee, you need
                            to be fully informed about the issue. When you can use facts and figures from your research
                            to support the solution you are proposing, your argument becomes much more persuasive. Facts
                            and figures will more likely convince the Deciding Committee to select your proposal as the
                            winner. In order to find relevant facts about your issue, use the guiding questions below to
                            help gather compelling information.
                          </p>
                          <ul>
                            <li>
                              Who are the parties affected by this issue?
                            </li>
                            <li>
                              How will your solution help achieve a positive outcome?
                            </li>
                            <li>
                              Are there any challenges to implementing your solution?
                            </li>
                            <li>
                              Has your solution been implemented in other countries? Was it successful or unsuccessful?
                              Why?
                            </li>
                            <li>
                              What are some of the secondary (extra) benefits that could result from your solution?
                            </li>
                          </ul>
                          <ul>
                            <li style={{paddingLeft: '50px'}}>
                              Economic factors? Example: Does your proposal bring in revenue? Raise taxes?
                            </li>
                            <li style={{paddingLeft: '50px'}}>
                              Environmental factors? Example: Does your proposal endanger an animal species?
                            </li>
                            <li style={{paddingLeft: '50px'}}>
                              Social factors? Example: Does your proposal provide you, or others, with access to
                              valuable resources and data?
                            </li>
                          </ul>
                          <ul>
                            <li>
                              What are the long-term implications if your proposal is chosen?
                            </li>
                          </ul>
                          <ul>
                            <li style={{paddingLeft: '50px'}}>
                              Local implications?
                            </li>
                            <li style={{paddingLeft: '50px'}}>
                              Global implications?
                            </li>
                          </ul>
                          <ul>
                            <li>
                              What are the long-term implications if your proposal is not chosen?
                            </li>
                          </ul>
                          <ul>
                            <li style={{paddingLeft: '50px'}}>
                              Local implications?
                            </li>
                            <li style={{paddingLeft: '50px'}}>
                              Global implications?
                            </li>
                          </ul>
                          <p>
                            Check out our Resources for Online Research&nbsp;for a list of helpful links to get you
                            started on your research.
                          </p>
                          <br/>
                            <h4>
                              Research Your Competition
                            </h4>
                            <p>
                              Find out what solutions other Stakeholder groups might suggest during the simulation. What
                              does your competition think? What are the major differences between the solution they are
                              proposing and yours? Are there any similarities? Consider the economic, political,
                              scientific, environmental, or social motivations they might have. It&rsquo;s important to
                              understand the issue from their viewpoint in order to anticipate how they may respond or
                              react to your solution. This will also help your team come up with a rebuttal when you
                              have time to respond to other teams during the simulation. Understanding what other
                              Stakeholders bring to the table can help you present your own agenda strategically and
                              effectively.
                            </p>
                            <h4>
                              Research collaboratively!
                            </h4>
                            <p>
                              Click the &ldquo;Notebook&rdquo; on your dashboard to access our collaborative tool that
                              can help you work easily together. The Notebook allows people to work on a single document
                              at the same time. You can see and leave comments on each other&rsquo;s research and make
                              sure that team members&rsquo; efforts are not overlapping.
                            </p>
                            <strong>
                              Step 4: Prepare to make your case!
                            </strong>
                            <p>
                              Each team needs to write three speeches in order to be ready for the simulation. Your team
                              is responsible for preparing the items listed in the table below. Guidelines for each
                              speech and a Sample Opening Statement, a Sample Proposal&nbsp;and a Sample Closing
                              Statement&nbsp;are available on pages 6 and 7.
                            </p>
                            <p>
                            </p>
                            <table width="100%;">
                              <tbody>
                              <tr>
                                <td colSpan="1" rowSpan="1">
                                  <h4>
                                    Speaking Tasks
                                  </h4>
                                </td>
                                <td colSpan="1" rowSpan="1">
                                  <h4>
                                    Time Limit
                                  </h4>
                                </td>
                              </tr>
                              <tr>
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
                                    Proposal*
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
                                    Closing Statement
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
                            <p>
                              *In addition to the speaking tasks, teams will also field questions from the Deciding
                              Committee after presenting their proposal.
                            </p>
                            <p>
                              Use the impACT Speech Writing Organizer&nbsp;to help you organize your research and write
                              your speeches.
                            </p>
                            <br/>
                              <h4>
                                Opening Statement (2 minutes)
                              </h4>
                              <p>
                                The opening statement should address the following:
                              </p>
                              <ul>
                                <li>
                                  Briefly describe the issue.
                                </li>
                                <li>
                                  Include facts and examples that help explain why this issue is important. For example,
                                  clarify who is affected by the issue and how they are impacted.
                                </li>
                                <li>
                                  Highlight how your perspective and expertise is necessary to address these challenges
                                  successfully.
                                </li>
                              </ul>
                              <br/>
                                <h4>
                                  Propose Your Solution (3 minutes)
                                </h4>
                                <p>
                                  The proposal should address the following:
                                </p>
                                <ul>
                                  <li>
                                    Address how your solution meets the criteria set forth by the Deciding Committee in
                                    their call for proposals.
                                  </li>
                                  <li>
                                    Explain how your solution will improve or advance progress toward any greater goals.
                                  </li>
                                  <li>
                                    Give at least three clearly and thoroughly explained arguments, or reasons why your
                                    solution is the best option. Include facts, statistics, and/or examples from your
                                    research to support your proposal.
                                  </li>
                                </ul>
                                <br/>
                                  <h4>
                                    Closing Statement (2 minutes)
                                  </h4>
                                  <p>
                                    The closing statement should address the following:
                                  </p>
                                  <ul>
                                    <li>
                                      Summarize your idea and reiterate the most important points.
                                    </li>
                                    <li>
                                      You may choose to include a thought-provoking question or a prediction that
                                      implies what the Deciding Committee stands to lose if another solution is chosen
                                      over yours. Be creative, persuasive, and convincing.
                                    </li>
                                    <li>
                                      Thank the other Stakeholders for participating and the Deciding Committee for
                                      considering your proposal.
                                    </li>
                                  </ul>
                                  <p>
                                    Practice, Practice, Practice! Even the most talented speakers practice their
                                    speeches beforehand. Rehearse your speech out loud and make changes as needed.
                                    Rehearsing also allows you to practice your timing. To make sure that you don't run
                                    over your allotted time, we encourage you to use an online script timer such as Edge
                                    Studio&rsquo;s words-to-time calculator:
                                    <a
                                      href="https://www.google.com/url?q=https://www.edgestudio.com/production/words-to-time-cal-culator&amp;sa=D&amp;ust=1584108444036000">
                                      https://www.edgestudio.com/production/words-to-time-cal-culator
                                    </a>
                                    . Knovva Academy does not endorse this website but it is easy to use, free, and does
                                    not require registration.
                                  </p>
                                  <br/>
                                    <strong>
                                      Sample Statements
                                    </strong>
                                    <h4>
                                      Sample Opening Statement
                                    </h4>
                                    <p>
                                      Welcome members of the Deciding Committee and fellow Stakeholders. We are here
                                      today to design the future of Globeville and improve mobility for its citizens.
                                      Globeville is facing an urgent challenge that is essential to city living: getting
                                      around.
                                    </p>
                                    <p>
                                      As we all know, the UN has projected that two-thirds of the world&rsquo;s
                                      population will live in cities by the year 2030. In response to its growing
                                      population, cities and surrounding areas should expect to see an increase in
                                      automobiles on the roads. McKinsey &amp; Company reports that auto sales are
                                      expected to increase from 70 million a year to 125 million by 2025, with more than
                                      half bought in cities.
                                    </p>
                                    <p>
                                      However, most urban infrastructure is not equipped to handle such a dramatic
                                      increase in population and automobiles. This version of the future is neither
                                      sustainable nor inclusive. Let us present our vision for the future of Globeville.
                                    </p>
                                    <h4>
                                      Sample Solution
                                    </h4>
                                    <p>
                                      Transportation has greatly improved since the first gasoline-powered automobile
                                      was built, only a little over a century ago. The future appears to be automated.
                                      We are here today to present our answer to improved urban mobility in Globeville:
                                      a ridesharing service called Ride-Happy that uses robo-taxis, which are a fleet of
                                      electric self-driving cars. Electric robo-taxis are the future of transportation
                                      and the answer to reduced traffic congestion, sustainability, and increased
                                      citizen freedom and mobility.
                                    </p>
                                    <p>
                                      Our solution will improve the flow of traffic and reduce the total number of cars
                                      on the road as overall car ownership would drastically reduce. This reduction will
                                      result in better use of existing road capacity and reduce the need for cities and
                                      surrounding areas to invest in construction projects that build or widen roads.
                                      Additionally, research from McKinsey &amp; Company indicates that widespread urban
                                      adoption of self-driving cars &mdash; and robo-taxis specifically &mdash; could
                                      result in a 60% drop in the number of cars on city streets and up to 90% fewer
                                      road accidents. With fewer vehicles on city streets, space will free up for
                                      alternative uses, such as bicycle or walking lanes. Existing parking lots or
                                      parking garages may even be repurposed into green spaces, improving the quality of
                                      life for citizens and making our city a more vibrant place to live and work.
                                    </p>
                                    <p>
                                      Our fleet of robo-taxis are plug-in electric vehicles, making them a sustainable
                                      transportation solution. As reported by the US Environmental Protection Agency
                                      (EPA), in the United States alone, transportation contributes to nearly one-third
                                      of US carbon emissions. Electric cars produce zero tailpipe emissions, paving the
                                      way toward a sustainable future for Globeville. Ask us about our plans for
                                      installing charging stations around the city.
                                    </p>
                                    <p>
                                      Robo-taxis will improve mobility and provide an economical solution for all
                                      citizens. We encourage and incentivize ridesharing which allows individuals to
                                      carpool to similar destinations and split the cost, saving money as well as time
                                      and energy.
                                    </p>
                                    <p>
                                      With your support, we will provide transportation access to those with limited
                                      mobility, such as older people, children, pregnant mothers, people with
                                      disabilities, and more. The most promising advantages include personal
                                      independence, increased sociability, and access to vital services. Adequate
                                      transportation access improves our economy as those that were unable to
                                      participate due to lack of transportation are now connected. With our solution,
                                      Globeville can be a national example of inclusivity and efficiency.
                                    </p>
                                    <h4>
                                      Sample Closing Statement
                                    </h4>
                                    <p>
                                      We at RideHappy know that ridesharing and self-driving vehicles are the future of
                                      transportation. We strongly believe that our proposal, a fleet of zero-emission
                                      self-driving taxis known as robo-taxis, is the answer to improving urban mobility
                                      in Globeville. Cities benefit from being inclusive and accessible. Robo-taxis will
                                      allow all citizens the access and opportunity to participate in Globeville&rsquo;s
                                      economy.
                                    </p>
                                    <p>
                                      Robo-taxis are a long-term sustainable solution. With ridesharing, owning a car
                                      will no longer be a necessity, which means fewer cars on the roads and city
                                      streets. As a result, we can expect Globeville&rsquo;s carbon footprint to
                                      dramatically decrease. Our electric robo-taxis will do their part for the
                                      environment by producing zero tailpipe emissions. Investing in robo-taxis will
                                      also help Globeville cut costs city-wide. City funding that has been set aside for
                                      parking-related infrastructure may be reinvested into new city projects. Land may
                                      be repurposed into walking or bicycle paths, or green community spaces. The real
                                      question is: Can Globeville afford not to make this change?
                                    </p>
                                    <p>
                                      We want to thank the Deciding Committee and the other Stakeholders for taking the
                                      time to listen to us today and we look forward to improving urban mobility for
                                      all.
                                    </p>


              </div>
            </TabPane>
          </Tabs>}
        </div>
      </>
    );
  }
}

export default FacilitatorWeek2;
