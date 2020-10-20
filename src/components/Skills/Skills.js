import React from 'react';
import ContentGrid from '../Layout/ContentGrid'; 
import { Grid, Typography, LinearProgress } from '@material-ui/core';
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
        <ContentGrid>
            <div className='main-container'>
                <Typography variant='h4' color='primary' style={{fontWeight: '900', padding: '112px 0 16px 0'}}>Skills</Typography>
                <div className='skills-items-container'>
                    <Grid container >
                        <Grid item md={6} sm={6} xs={12}>
                            <Skill title='JavaScript' progress={ 90 } />
                            <Skill title='HTML / CSS' progress={ 85 } />
                            <Skill title='Python' progress={ 75 } />
                            <Skill title='SQL' progress={ 80 } />                                              
                        </Grid>
                        <Grid item md={6} sm={6} xs={12}>
                            <Skill title='React' progress={ 85 } />
                            <Skill title='Material-UI' progress={ 80 } />
                            <Skill title='Git' progress={ 85 } />
                            <Skill title='Azure Environment' progress={ 70 } />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ContentGrid>
    );
}

export default Skills;

