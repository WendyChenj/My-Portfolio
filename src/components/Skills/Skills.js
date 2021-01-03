import React from 'react';
import { SectionWrapper } from "../utilities/SectionWrapper"; 
import { Grid, Typography, LinearProgress, Divider } from '@material-ui/core';
import './Skills.css';

const Skill = props => {
  return (
    <div className='each-skill-container'>
      <div className='each-skill-title'>
        <Typography variant='h6' style={{fontWeight: '600', paddingBottom: '8px', paddingRight: '8px'}}>{props.title}</Typography>
        <Typography variant='h6' color='primary' style={{fontWeight: '600', paddingBottom: '8px'}}>({props.progress}%)</Typography>
      </div>
      <LinearProgress color='primary' value={props.progress} variant='determinate' className='skill-progress' style={{height: '13px'}} />
    </div> 
  );
}

const Skills = () => {
  return (
    <SectionWrapper title="Skills" subtitle="WHAT I AM PROFICIENT IN">
      <div className='skills-items-container'>
        <Grid container >
          <Grid item md={6} sm={6} xs={12}>
            <Skill title='JavaScript' progress={ 90 } />
            <Skill title='React' progress={ 90 } />                           
            <Skill title='Python' progress={ 80 } />
            <Skill title='Git' progress={ 80 } />                                 
          </Grid>
          <Grid item md={6} sm={6} xs={12}>
            <Skill title='TypeScript' progress={ 80 } />
            <Skill title='HTML / CSS' progress={ 90 } />
            <Skill title='NextJS' progress={ 80 } /> 
            <Skill title='SQL' progress={ 85 } /> 
          </Grid>
        </Grid> 
      </div>
      <Divider style={{marginTop: "32px"}} />
    </SectionWrapper>
  );
}

export default Skills;

