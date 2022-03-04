import React from 'react';
import { SectionWrapper } from "../utilities/SectionWrapper";
import { Typography, Divider } from '@material-ui/core';
import selfSmall from '../../assets/images/self/self-small.png';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import { IconLink } from '../utilities/Links';
import './About.css';

const About = () => {
  return (
    <SectionWrapper title="About Me" subtitle="GET TO KNOW ME BEFORE YOU DIVE INTO MY CONTENT">
      <div>
        <img className='pic-item-small' src={ selfSmall } alt='Hello, meet me!' />
      </div>

      <div className="button-groups">
        <IconLink href="https://www.linkedin.com/in/wenjie-wendy-chen/">
          <LinkedInIcon fontSize="large" />
        </IconLink> 
        <IconLink href="mailto:wendychen9395@gmail.com">
          <EmailIcon fontSize="large" />
        </IconLink> 
        <IconLink href="https://github.com/WendyChenj/">
          <GitHubIcon fontSize="large"/>
        </IconLink>              
      </div>

      <div className='about-me-intro'>
        <Typography variant='h6' color='secondary'>
          Hi, I am a professional front end developer who is fueled by true passion for implementing visual elements 
          and building UX/UI websites. After obtaining my Master's Degree, I gained experience by working at different fields as Front End Devloper and using ReactJS and AngularJS to create reusable components. Also, I consider myself a 'forever student', eager to both practice coding skills through projects 
          and stay in tune with the latest technologies :)
        </Typography>
      </div>

      <Divider style={{marginTop: "32px"}} />
    </SectionWrapper>
  );
}

export default About;