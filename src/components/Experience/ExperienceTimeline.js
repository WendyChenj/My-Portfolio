import React from 'react';
import { Typography } from "@material-ui/core";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@material-ui/lab';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolIcon from '@material-ui/icons/School';
import "./Experience.css";

const ExperienceTimeline = () => {
  return (
    <Timeline align={window.innerWidth > 960 ? "alternate" : "left"}>
      <TimelineItem style={{ minHeight: "100px", padding: "8px 0 8px 0" }} className="TimelineItem">
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BusinessIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-content-right">
          <Typography variant="h6">
            March 2021 - Present
          </Typography>
          <Typography variant="h6">
            Front End Developer
          </Typography>
          <Typography className="location-name" color="secondary">
            Cerebri AI, Toronto, ON
          </Typography>
          <Typography>
            • Implementing and maintaining an AI powered enterprise web application on Typescript/Angular/D3 stack <br />
            • Designing and developing an in-house rebuild platform including UI and database to help users create data visualization dashboards <br />
            • Promoting multilingual feature and multiple theme system support to rich customer experience
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem style={{ minHeight: "100px", padding: "8px 0 8px 0" }} className="TimelineItem">
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BusinessIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-content-right">
          <Typography variant="h6">
            Dec 2020 - Dec 2021
          </Typography>
          <Typography variant="h6">
            Front End Developer
          </Typography>
          <Typography className="location-name" color="secondary">
            DigLit, Toronto, ON
          </Typography>
          <Typography>
            • Collaborated with 20+ team members in agile environment to deliver an application for volunteer drivers <br />
            • Achieved high-quality code contribution by performing peer review and write unit test in Jest <br />
            • Built the UI to manage drivers information and improve search engine optimization by adopting NextJS
           </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem style={{ minHeight: "100px", padding: "8px 0 8px 0" }} className="TimelineItem">
        <TimelineSeparator>
          <TimelineDot color="primary">
            <BusinessIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-content-right">
          <Typography variant="h6">
            Jan 2021 - March 2021
          </Typography>
          <Typography variant="h6">
            Front End Developer
          </Typography>
          <Typography className="location-name" color="secondary">
            The Lookbook
          </Typography>
          <Typography>
            • Built responsive single page application (SPA) using React and Redux and followed standard design protocols <br />
            • Performed queries and mutations to enable members to upload looks and submit feedbacks in GraphQL </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem style={{minHeight: "100px", padding: "8px 0 8px 0"}} className="TimelineItem">
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <BusinessIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-content-left">
          <Typography variant="h6">
            Nov 2020 - Feb 2021
          </Typography>
          <Typography variant="h6">
            Software Developer
          </Typography>
          <Typography className="location-name" color="secondary">
            KataniTech Inc, Ottawa, ON
          </Typography>           
          <Typography> 
            • Volunteering of a humanitarian project to support over 2407 local businesses across Canada by sharing “pop-up” deals both in-store and online <br />
            • Maintaining, optimizing, troubleshooting, and improving the performance of the website and mobile applications <br />
            • Working closely with other team members on the development team</Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem style={{minHeight: "100px", padding: "8px -32px 8px 0"}} className="TimelineItem">
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline-content-right">
          <Typography variant="h6">
            Jan 2018 - Oct 2020
          </Typography>
          <Typography variant="h6">
            Master of Science of Systems Science
          </Typography>
          <Typography className="location-name" color="secondary">
            University of Ottawa, Ottawa, ON
          </Typography>           
          <Typography>GPA: 9.6 / 10</Typography>
          <Typography>
            Related Courses: Modelling and Simulation (A+); Systems Engineering (A+); System Optimization and Management (A+); 
            Applied Probability (A+); Advanced Database System (A); Data Structures and Algorithms
          </Typography>
        </TimelineContent>   
      </TimelineItem>
      <TimelineItem style={{minHeight: "100px"}} className="TimelineItem">
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined">
            <SchoolIcon fontSize="large" />
          </TimelineDot>
          <TimelineConnector/>
        </TimelineSeparator>
        
        <TimelineContent className="timeline-content-left">
          <Typography variant="h6">
            Apr 2020 - June 2020
          </Typography>
          <Typography variant="h6">
            React in Web Development Certification
          </Typography>
          <Typography className="location-name" color="secondary">
            Udemy E-learning
          </Typography>           
          <Typography>
             • Dive deeper in React with advanced React knowledge as well as popular libraries like react-router and Redux <br />             
             • Build powerful, fast, user-friendly and reactive web apps with Class-based Components and React Hooks from ground up <br /> 
             • Apply form validation, authentication and unit testing on React application and deploy applications on Internet
          </Typography>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem style={{minHeight: "100px"}} className="TimelineItem">
        <TimelineSeparator>
          <TimelineDot color="primary">
            <SchoolIcon fontSize="large" />
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent className="timeline-content-right">
          <Typography variant="h6">
            Sep 2013 - June 2017
          </Typography>
          <Typography variant="h6">
            Bachelor of Engineering
          </Typography>
          <Typography className="location-name" color="secondary">
            University of Science and Technology, Beijing, China
          </Typography>           
          <Typography>
            GPA: 3.32 / 4.0
          </Typography>
          <Typography>
            Related Courses: C++ Programming; Microcomputer Principle and Application
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default ExperienceTimeline;