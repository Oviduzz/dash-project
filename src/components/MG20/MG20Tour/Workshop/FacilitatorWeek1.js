import React, {Component} from 'react';
import classes from "./Workshop.module.scss";
import {navigate} from "@reach/router";
import {Button, Icon, Menu, Tabs} from "antd";
import arrowLeft from "../../../../assets/Images/arrowLeft.svg";
import downloadIcon from "../../../../assets/Images/downloadIcon.svg";
import image3 from "../../../../assets/Images/image3.png";
import image1 from "../../../../assets/Images/image1.png";
import image4 from "../../../../assets/Images/image4.png";
import image2 from "../../../../assets/Images/image2.png";

const {TabPane} = Tabs;

class FacilitatorWeek1 extends Component {
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
      isStudent: false
    };

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
        {!this.state.isStudent && <Tabs defaultActiveKey="1" onChange={this.callback}>
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
                <p>
                  <strong>
                    Session Snapshot
                  </strong>
                </p>
                <p>
                  During the first mG20 in Action workshop, students will learn more about the club and what club
                  members can expect
                  from meetings. They will spend time getting to know one another and learn how to access
                  Knovva&rsquo;s Online
                  Platform and Community Pages where they can interact with young people from club chapters around
                  the world.
                </p>
                <p>
                  <strong>
                    Session Prep
                  </strong>
                </p>
                <p>
                  <strong>
                    Materials needed:
                  </strong>
                </p>
                <ul>
                  <li>
                    <p>
                      ball (a soccer ball or kickball will work best)
                    </p>
                  </li>
                  <li>
                    <p>
                      timekeeping device
                    </p>
                  </li>
                  <li>
                    <p>
                      1 pair of scissors
                    </p>
                  </li>
                  <li>
                    <p>
                      tape
                    </p>
                  </li>
                  <li>
                    <p>
                      pens or pencils
                    </p>
                  </li>
                  <li>
                    <p>
                      whiteboard and dry erase markers
                    </p>
                  </li>
                  <li>
                    <p>

                      mG20 in Action Scavenger Hunt

                      handout
                    </p>
                  </li>
                  <li>
                    <p>

                      About mG20 in Action

                      handout
                    </p>
                  </li>
                </ul>
                <p>
                  <strong>
                    Time:
                  </strong>
                  60 minutes
                </p>
                <p>
                  Please take breaks as needed during club meetings.
                </p>
                <p>
                  <strong>
                    Before The Meeting:
                  </strong>
                </p>

                <ul>
                  <li>
                    <p>
                      Print enough copies of the

                      mG20 In Action Scavenger Hunt and About mG20 in Action

                      handouts for everyone.
                    </p>
                  </li>
                </ul>
                <ol>
                  <li>
                    <p>
                      Print one copy of the

                      discussion ball assembly instructions

                      for the "In My Experience..." activity.
                    </p>
                  </li>
                </ol>


                <p>
                  <strong>
                    Session Plan
                  </strong>
                </p>
                <p>

                  mG20 in Action Scavenger Hunt (10 minutes)

                </p>
                <p>

                  Welcome (10 minutes)

                </p>
                <p>

                  Icebreakers (30 minutes)

                </p>
                <p>

                  Getting Started with mG20 in Action (10 minutes)

                </p>
                <p>

                  Take It Further

                </p>
                <p>

                  What&rsquo;s Important to You? (30 minutes)

                </p>
                <h1>
                  <strong>
                    mG20 in Action Scavenger Hunt (10 minutes)
                  </strong>
                </h1>
                <p>
                  <strong>
                    Step 1: Welcome everyone and instruct them to take a pen or pencil and a copy of the
                  </strong>
                </p>
                <p>

                  <strong>
                    mG20 in Action Scavenger Hunt.
                  </strong>

                </p>
                <p>
                  <strong>
                    Step 2: Begin the Scavenger Hunt.
                  </strong>
                </p>
                <p>
                  Set a timer for eight minutes. Instruct club members to talk with one another and fill in each box
                  on their
                  scavenger hunt sheet with the name of a person who has that quality or has had that experience. If
                  the session
                  leader is a student, they should also participate in the scavenger hunt.
                </p>
                <p>
                  If club members complete this activity before the eight minutes are up, please move on to the next
                  activity.
                </p>
                <p>
                  <strong>
                    Step 3: Once everyone has completed the scavenger hunt, instruct club members to hold on to
                    their scavenger hunt
                    worksheet.
                  </strong>
                </p>
                <p>
                  Ask everyone to find a chair and move the chairs about the room so they form a circle.
                </p>
                <h1>
                  <strong>
                    Welcome (10 minutes)
                  </strong>
                </h1>
                <p>
                  <strong>
                    Step 1: Welcome to [your school name here]&rsquo;s first-ever mG20 in Action club meeting!
                  </strong>
                </p>
                <p>
                  Introduce yourself and share a brief description of the club; see the Session Snapshot for a
                  description!
                </p>
                <p>
                  <strong>
                    Step 2: Invite all club members to introduce themselves to the group.
                  </strong>
                </p>
                <p>
                  Write the following on the board:
                </p>
                <p>
                  Welcome! When it is your turn, please share the following:
                </p>
                <ul>
                  <li>
                    <p>
                      your name
                    </p>
                  </li>
                  <li>
                    <p>
                      your grade or year
                    </p>
                  </li>
                  <li>
                    <p>
                      your reason for joining mG20 in Action
                    </p>
                  </li>
                  <li>
                    <p>
                      a local or global issue that has caught your attention, and why
                    </p>
                  </li>
                  <li>
                    <p>
                      one thing about another club member that you discovered during the scavenger hunt
                    </p>
                  </li>
                </ul>
                <p>
                  Ask for a volunteer to go first. After they share something about another club member, that club
                  member goes next,
                  and so on. The activity ends when everyone has introduced themselves.
                </p>
                <p>
                  <strong>
                    Step 3: Thank everyone for sharing, and briefly reflect on any common interests or themes that
                    emerged during
                    the introductions.
                  </strong>
                </p>
                <h1>
                  <strong>
                    Icebreakers (30 minutes)
                  </strong>
                </h1>
                <p>
                  <strong>
                    Note: If the group is unfamiliar with one another, continue with the icebreakers below. However,
                    if the group
                    has already established a strong rapport, we recommended substituting icebreakers with
                  </strong>
                  <em>

                    <strong>
                      What's Important to You?
                    </strong>

                  </em>
                  <strong>
                    a global issues activity.
                  </strong>
                </p>
                <p>
                  <strong>
                    Step 1: Remain in a circle and explain that the group will play a few icebreaker games to get to
                    know one
                    another better.
                  </strong>
                </p>
                <p>
                  Get everyone interacting, having fun, making eye contact, using each other&rsquo;s names, and
                  feeling comfortable
                  with one another! Some suggested activities include:
                </p>
                <ul>
                  <li>
                    <p>
                      In My Experience&hellip;
                    </p>
                  </li>
                  <li>
                    <p>
                      Show club members the discussion ball. Explain that the ball is covered with different
                      discussion questions.
                      To
                      play the game, club members will gently toss the ball to one another. Whichever panel is
                      facing up will be
                      the
                      discussion question for that round. Club members will have one minute to consider their
                      response to the
                      question. Then, starting with the person holding the ball, go clockwise around the circle so
                      each person can
                      share their response.
                    </p>
                  </li>
                  <li>
                    <p>
                      After everyone has shared, instruct the person holding the ball to call out the name of
                      another club member
                      and
                      gently toss the ball to them.
                    </p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <p>
                      Two Truths and a Lie:
                    </p>
                  </li>
                  <li>
                    <p>
                      Tell everyone to think of two things that are true about themselves and one lie. It&rsquo;s
                      better if the
                      lie
                      seems like it could be true.
                    </p>
                  </li>
                  <li>
                    <p>
                      Go around the room, and have each club member share their three statements. After each person
                      shares,
                      everyone
                      else must try to guess the lie.
                    </p>
                  </li>
                </ul>

                <ul>
                  <li>
                    <p>
                      The Big Wind Blows:
                    </p>
                  </li>
                  <li>
                    <p>
                      Arrange students in a large circle, with empty space in the middle.
                    </p>
                  </li>
                  <li>
                    <p>
                      The facilitator starts the game off by standing in the center of the circle and saying a
                      statement that
                      applies
                      to them, such as: &ldquo;The big wind blows for people who play basketball.&rdquo;
                    </p>
                  </li>
                  <li>
                    <p>
                      If the statement applies to anyone in the circle, they should run to the center and then find
                      a new spot in
                      the
                      circle.
                    </p>
                  </li>
                  <li>
                    <p>
                      If this does not apply, they should remain where they are.
                    </p>
                  </li>
                  <li>
                    <p>
                      Whoever is the last to find a new spot in the outer circle stays in the middle and has to say
                      the next
                      statement.
                    </p>
                  </li>
                </ul>

                <h1>
                  <strong>
                    Getting Started with mG20 in Action (10 minutes)
                  </strong>
                </h1>
                <p>
                  <strong>
                    Step 1: Distribute one copy of Handout #2:
                  </strong>

                  <strong>
                    About mG20 in Action
                  </strong>

                  <strong>
                    to each club member.
                  </strong>
                </p>
                <p>
                  <strong>
                    Step 2: Read aloud together.
                  </strong>
                </p>
                <p>
                  Ask for a volunteer to read the first paragraph aloud. Once they have finished reading, ask for a
                  different
                  volunteer to read the next paragraph. Repeat until you get to the end. Then, ask club members what
                  questions they
                  have about the club, either in person or online.
                </p>
                <p>
                  <strong>
                    Step 3: Provide instructions for club members to make an account at
                  </strong>

                  <strong>
                    www.knovva.com
                  </strong>

                  <strong>
                    .
                  </strong>
                </p>
                <p>
                  If students have access to a device, take a few minutes and have them log on. If club members do
                  not have access to
                  a device, remind them that before the next meeting, they should make an account at

                  www.knovva.com

                  and introduce themselves on the community pages.
                </p>


                <h1>
                  <strong>
                    Take It Further
                  </strong>
                </h1>
                <p>
                  This section includes additional activities so club members can spend more time exploring the
                  concepts and skills in
                  mG20 in Action. These activities can be used if the club meets for additional time, to supplement
                  classroom
                  instruction, or as a substitute for activities in the workshop depending on the club&rsquo;s needs
                  and interests.
                </p>
                <h2>
                  <strong>
                    What&rsquo;s Important to You? (30 minutes)
                  </strong>
                </h2>
                <p>
                  <strong>
                    Materials needed:
                  </strong>
                </p>
                <ul>
                  <li>
                    <p>
                      3 sticky notes per person
                    </p>
                  </li>
                  <li>
                    <p>
                      pens or pencils
                    </p>
                  </li>
                  <li>
                    <p>
                      5 pieces of easel or poster paper
                    </p>
                  </li>
                  <li>
                    <p>
                      4 stickers per person
                    </p>
                  </li>
                  <li>
                    <p>
                      markers
                    </p>
                  </li>
                  <li>
                    <p>
                      tape
                    </p>
                  </li>
                </ul>
                <p>
                  <strong>
                    Activity Setup:
                  </strong>
                </p>
                <p>
                  Write the following headings on a separate piece of easel paper:
                </p>
                <ul>
                  <li>
                    <p>
                      Political
                    </p>
                  </li>
                  <li>
                    <p>
                      Social
                    </p>
                  </li>
                  <li>
                    <p>
                      Environmental
                    </p>
                  </li>
                  <li>
                    <p>
                      Economic
                    </p>
                  </li>
                </ul>
                <p>
                  Next, tape the pieces of paper to each of the four walls of the room. Each wall should have its
                  own paper.
                </p>
                <p>
                  <strong>
                    Step 1: Ask students what is important to them.
                  </strong>
                </p>
                <p>
                  Tell everyone to take a moment to think of issues, causes, or topics that they are really
                  interested in. Examples
                  might include clean drinking water for everyone, or access to education. Ask a few volunteers to
                  share their
                  responses and explain their interest in the particular issue with the larger group.
                </p>
                <p>
                  <strong>
                    Step 2: Get specific.
                  </strong>
                </p>
                <p>
                  Give each person 3 sticky notes and a pen or pencil. Read the following directions aloud:
                </p>
                <p>
                  <em>
                    First, on each sticky note, write down
                  </em>
                  <em>
                    <strong>
                      one
                    </strong>
                  </em>
                  <em>
                    topic or issue that is important to you. The first should be about a
                  </em>
                  <em>
                    <strong>
                      global
                    </strong>
                  </em>
                  <em>
                    issue, the second about a
                  </em>
                  <em>
                    <strong>
                      local
                    </strong>
                  </em>
                  <em>
                    issue, and the third about something that affects you
                  </em>
                  <em>
                    <strong>
                      personally
                    </strong>
                  </em>
                  <em>
                    .
                  </em>
                </p>
                <p>
                  <em>
                    Then, if you look around the room you will see posters with four different categories:
                    Political, Social,
                    Environmental, and Economic. After you finish writing, affix your sticky notes underneath the
                    appropriate
                    category. If two or more of your sticky notes fall under the same category, that is okay!
                  </em>
                </p>
                <p>
                  <strong>
                    Step 3: Let&rsquo;s vote!
                  </strong>
                </p>
                <p>
                  Distribute 4 stickers to each group member. Instruct everyone to walk around the room, reading the
                  ideas on each of
                  the easel papers. Once they have read through the ideas, they should prioritize and vote on the
                  ideas they feel are
                  the most important. To vote, they can place a sticker next to a sticky note that lists an issue
                  they feel is most
                  important to them.
                </p>
                <p>
                  <strong>
                    Step 4: Tally the votes and explore the group&rsquo;s priorities.
                  </strong>
                </p>
                <p>
                  Ask a volunteer to count the number of stickers to find out which issues are most important to the
                  group as a whole.
                  Then, write the most important issues in order from most to least important on the sheet of blank
                  easel paper. Pose
                  the following questions one at a time, and leave time for a group discussion:
                </p>
                <ul>
                  <li>
                    <p>
                      Do you see any patterns or similarities in the topics?
                    </p>
                  </li>
                  <li>
                    <p>
                      What are some concrete things you could do to affect the topics that concern you? Let&rsquo;s
                      make a list.
                    </p>
                  </li>
                  <li>
                    <p>
                      In order to make this a reality, what resources would you need to be successful? What action
                      steps would be
                      needed?
                    </p>
                  </li>
                </ul>
                <p>
                  <strong>
                    Step 5: Take it further.
                  </strong>
                </p>
                <p>
                  If the group discussion does not cover the following ideas, share the following list with the
                  group and encourage
                  them to take action about issues they find important.
                </p>
                <ul>
                  <li>
                    <p>
                      Engage in community service
                    </p>
                  </li>
                  <li>
                    <p>
                      Collect items needed by an organization (for example, diapers or food for homeless shelters)
                    </p>
                  </li>
                  <li>
                    <p>
                      Share your knowledge by presenting your ideas to your class
                    </p>
                  </li>
                  <li>
                    <p>
                      Run for office; student government can organize youth to work toward a common goal
                    </p>
                  </li>
                  <li>
                    <p>
                      Conduct a survey about the issue and share the results
                    </p>
                  </li>
                  <li>
                    <p>
                      Write a letter to a company
                    </p>
                  </li>
                  <li>
                    <p>
                      Participate in awareness campaigns
                    </p>
                  </li>
                </ul>
                <p>
                  Article composed with the online wysiwyg editor. Please subscribe for a membership to remove
                  promotional messages
                  like this one from the edited documents.
                </p>


              </div>
            </TabPane>
            <TabPane tab="Session Snapshot & Prep" key="2">
              <div className={classes.longTextClass}>
                <p><strong>mG20 in Action Scavenger Hunt</strong></p>
                <p><em><strong>Directions: </strong></em><em>Get to know mG20 in Action club members! As you introduce
                  yourself to
                  people around the room, try to find a different person to fit each description below. Try to fill every
                  box. If
                  necessary, you may write a person&rsquo;s name more than once.</em></p>
                <table width="624" cellSpacing="0" cellPadding="7">
                  <tbody>
                  <tr>
                    <td width="110">
                      <p><strong>Has the same</strong></p>
                      <p><strong>favorite food as you</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Can count to 10 in 3 languages</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Has a part-time job</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Is wearing colorful socks</strong></p>

                    </td>
                    <td width="110">
                      <p><strong>Loves listening to K-pop</strong></p>

                    </td>
                  </tr>
                  <tr>
                    <td width="110">
                      <p><strong>Has never broken</strong><br/><strong> a bone</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Rode a bicycle in the last week</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Has visited more than 3 countries</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Can play a musical instrument</strong></p>

                    </td>
                    <td width="110">
                      <p><strong>Is the captain of a sports team </strong></p>

                    </td>
                  </tr>
                  <tr>
                    <td width="110">
                      <p><strong>Has a pet that isn&rsquo;t a dog or cat</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Has been on TV</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Gave a speech in front of more than 25 people</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Loves spicy food</strong></p>

                    </td>
                    <td width="110">
                      <p><strong>Will show you a dance move</strong></p>

                    </td>
                  </tr>
                  </tbody>
                </table>
                <p><strong>mG20 in Action Scavenger Hunt</strong></p>
                <p><em><strong>Directions:</strong></em><em> Get to know mG20 in Action club members! As you introduce
                  yourself to
                  people around the room, try to find a different person to fit each description below. Try to fill every
                  box. If
                  necessary, you may write a person&rsquo;s name more than once.</em></p>
                <table width="624" cellSpacing="0" cellPadding="7">
                  <tbody>
                  <tr>
                    <td width="110">
                      <p><strong>Has the same</strong></p>
                      <p><strong>favorite food as you</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Can count to 10 in 3 languages</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Has a part-time job</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Is wearing colorful socks</strong></p>

                    </td>
                    <td width="110">
                      <p><strong>Loves listening to K-pop</strong></p>

                    </td>
                  </tr>
                  <tr>
                    <td width="110">
                      <p><strong>Has never broken</strong><br/><strong> a bone</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Rode a bicycle in the last week</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Has visited more than 3 countries</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Can play a musical instrument</strong></p>

                    </td>
                    <td width="110">
                      <p><strong>Is the captain of a sports team</strong></p>

                    </td>
                  </tr>
                  <tr>
                    <td width="110">
                      <p><strong>Has a pet that isn&rsquo;t a dog or cat</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Has been on TV</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Gave a speech in front of more than 25 people</strong></p>

                    </td>
                    <td width="111">
                      <p><strong>Loves spicy food</strong></p>

                    </td>
                    <td width="110">
                      <p><strong>Will show you a dance move</strong></p>

                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </TabPane>
            <TabPane tab="Session Plan" key="3">
              <div className={classes.longTextClass}>
                <strong>About mG20 in Action</strong>
                <p>Our world is growing increasingly interdependent and interconnected each day. The need for people to be able to
                  empathize with others, value diverse perspectives and cultures, understand how events around the world are
                  interconnected, and solve problems that transcend borders has never been greater.</p>
                <p>The mission of mG20 in Action is to elevate your awareness of global issues and understanding of the world&rsquo;s
                  economy, politics, social structures, and the environment. This will help you make the best decisions about how to
                  engage with the world after high school and beyond.</p>
                <p>Using your voice and creativity, combined with our tools and resources, you can have a real impact on the future. Our
                  goal is to use creativity, collaboration, critical thinking, and communication to make our world a better place to
                  live.</p>
                <strong>How does mG20 in Action work?</strong>
                <p>Club members participate in two ways: in person and online.</p>
                <p>In Person</p>
                <p>The club runs on a flexible four-week repeating sequence so that in a given month, you will have the opportunity to
                  do something different each week.</p>
                <h4>Week 1: Workshops</h4>

                <li>Participate in fun, interactive activities that develop 21st century skills and global understanding.</li>

                <h4>Weeks 2 and 3: impACT Global Priorities Simulation</h4>

                <li>During the impACT simulation, you will build on skills gained in the workshops by considering an issue of local or
                  global significance.
                </li>
                <li>In this simulation, you will take on the persona of a stakeholder such as a member of the city council,
                  businessperson, homeowner, or anyone else who will be affected by the issue.
                </li>
                <li>In the simulation, you will research and propose solutions to global challenges by writing and delivering a
                  persuasive argument. Your goal is to convince a &ldquo;Deciding Committee&rdquo; that your proposal has the greatest
                  impact and benefit to the community at large.
                </li>

                <h4>Week 4: Global Connections</h4>

                <li>Learn about and discuss current events in the world and in your community. Practice your skills of communication and
                  perspective-taking, including how to respect varying points of view and support your opinions with facts.
                </li>

                <h4>Online</h4>
                <p>Thanks to you, we have the power to create the most globally connected generation ever. Together, we can create a
                  supportive community of globally minded young people, dedicated to voicing concerns, finding connections and
                  support, and inspiring one another.</p>
                <p>You will gain access to mG20 in Action Online and its Community Forums where you will be able to explore current
                  events by posting your thoughts and connecting with club members around the world who are doing the same. Here you
                  can ask questions, share your opinions, and see what life is like for high school students in other parts of the
                  world.</p>
                <p>mG20 in Action club members are doing amazing things in their schools and communities! Use our community as a
                  platform for collaboration and friendship, and as a way to spark conversations about global issues with youth from
                  around the world.</p>
                <p>Your club&rsquo;s faculty advisor will give you more information about making an account at <a
                  href="https://knovva.com">www.knovva.com</a>.</p>
                <h4>Gain Leadership Experience</h4>
                <p>mG20 in Action is all about empowering you to become a better leader! Sign up to bring in a current event for
                  discussion during Global Connections week. Ask your faculty advisor for more information.</p>
                <h4>Hear From mG20 in Action Club Members</h4>
                <p>&ldquo;For our school, mG20 in Action is a lot more than just another student club; it&rsquo;s a global team united
                  to work towards a common passion by inspiring each other and collaborating to understand the challenges that our
                  world faces today. We&rsquo;re acquiring new skills, confidence, and new global perspectives.&rdquo;</p>
                <p>Agustina F., Northlands School</p>
                <p>&ldquo;With collaborative activities, games, and workshops, club members get a taste of what summits are like. Club
                  members learn to become global citizens, build fundamental leadership skills, explore the realm of foreign
                  relations, and build new perspectives. My goal is to bring a group of students to future summits so that they
                  experience the unique and unforgettable nature of Model G20 and interact with motivated teenagers who want to
                  promote change in our society; I want them to be inspired to take action.&rdquo;</p>
                <p>Kiara O., Dominican Academy</p>

              </div>
            </TabPane>
            <TabPane tab="Instructions for Students" key="4">
              <div className={classes.longTextClass}>
                <strong>How To Assemble Your Discussion Ball</strong>
                <h4>Materials</h4>

                <li>12 discussion questions</li>
                <li>1 pair of scissors</li>
                <li>tape</li>
                <li>ball (a soccer ball or kickball will work best)</li>

                <h4>Directions</h4>
                <p>1. Print out the discussion questions on pages 2 and 3.</p>
                <p>2. Following the lines, cut out the shapes containing discussion questions.</p>
                <p>3. Tape the discussion questions onto the ball. Try not to have the questions overlap.</p>


                <table style={{width:'100%'}}>
                  <td style={{width:'50%'}}>
                    If you are using a soccer ball:
                    <img title="" className={classes.soccerball} src={image3} alt=""/>
                  </td>
                  <td style={{width:'50%', float:'right'}}>
                    If you are using something
                    other than a soccer ball:
                    <img title="" className={classes.soccerball} src={image1} alt=""/>
                  </td>
                </table>


                <ol start="1">
                  <li>1. Share a time when you witnessed bullying or unkindness.
                    Did you step in? If so, what did you do? If not, what prevented you?
                  </li>
                </ol>
                <ol start="2">
                  <li>2. Choose one and explain your choice:
                    Robots, dinosaurs, or aliens.
                  </li>
                </ol>
                <ol start="3">

                  <li>3. What stories did you grow up reading/listening to?
                    Could you identify with the characters in these stories? Why or why not? Did these stories contribute to
                    your idea of the world?
                  </li>
                </ol>
                <ol start="4">
                  <li>4. What is something that you wish more people knew about you?</li>
                </ol>
                <ol start="5">
                  <li>5. Share something about your culture that you wish more people knew.</li>
                </ol>
                <ol start="6">
                  <li>6. Every name tells a story. Tell the group about your name (first, middle, last, nickname) and its origin. You
                    can share about all of them or pick just one.
                  </li>
                </ol>
                <ol start="7">
                  <li>7. What issues do you care about? Why?</li>
                </ol>
                <ol start="8">
                  <li>8. What does being a global citizen mean to you? Do you think it is important? Why or why not?</li>
                </ol>
                <ol start="9">
                  <li>9. Describe something beautiful or amazing that you experienced while out in nature.</li>
                </ol>
                <ol start="10">
                  <li>10. Describe a time when your perspective on a topic or event changed. How and why did your perspective change?
                    What did you learn from the experience?
                  </li>
                </ol>
                <ol start="11">
                  <li>11. Describe a time when you faced a challenge, setback, or failure. How did it affect you? What did you
                    learn from the experience?
                  </li>
                </ol>
                <ol start="12">
                  <li>12. Fill in the blanks. The wisest thing anyone ever told me was _____ and it helped me to _____.</li>
                </ol>
                <p><img title="" src={image4} alt=""/><img title="" src={image2} alt=""/></p>

              </div>
            </TabPane>
          </Tabs>}
          {this.state.isStudent && <Tabs defaultActiveKey="1" onChange={this.callback}>
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
                <strong>Welcome to mG20 in Action!</strong>
                <p>During the first mG20 in Action workshop, you will learn more about the club and what you can expect from club
                  meetings. You will also spend time getting to know one another, and learn how to access Knovva&rsquo;s Online
                  Platform and Community Pages where you can interact with young people from club chapters around the world.</p>
              </div>
            </TabPane>
          </Tabs>}
        </div>
      </>
    );
  }
}

export default FacilitatorWeek1;
