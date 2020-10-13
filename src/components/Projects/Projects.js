import React from 'react';
import ContentGrid from '../Layout/ContentGrid'; 
import { Divider, Typography, Chip } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import './Projects.css';

const Education = () => {
    return (
        <ContentGrid>
            <div className='projects-container'>
                <div>
                    <Typography variant='h3' color='primary' style={{fontWeight: '900', padding: '112px 0 16px 0'}}>Projects</Typography>
                </div>

                <div className='project-item'>
                    <div className='project-item-icon'>
                        <FastfoodIcon color='primary' fontSize='large'  />
                    </div>
                    <div className='project-item-title'>
                        <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2020.06-2020.09</Typography>  
                        <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>My Burger Order Application</Typography>                           
                        <Typography color='secondary' style={{paddingBottom: '8px'}}>
                            A burger order application which allows customers to add or remove ingredients based on their own taste and create their own 
                            fabulous and juicy burger!
                        </Typography>
                        <div className='project-item-tech-stack'>
                            <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
                            <Chip label='React' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='Redux' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='Material-UI' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='react-router' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='axios' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='Firebase' color='primary' className='project-item-tech-stack-item' />
                        </div>
                    </div>
                </div>

                <Divider variant='inset' />

                <div className='project-item'>
                    <div className='project-item-icon'>
                        <DirectionsBusIcon color='primary' fontSize='large'  />
                    </div>
                    <div className='project-item-title'>
                        <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2019.01-2020.05</Typography>  
                        <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>A Predictive Maintenance System for A Hybrid Bus (Master's Thesis)</Typography>                           
                        <Typography color='secondary' style={{paddingBottom: '8px'}}>
                            A predictive maintenance system which can monitor real-time sensor activities, store and process real-time data in database 
                            and alert warnings to bus drivers and technicians when abnormal data occurs. Thanks to the cooperation of technicians in STO company, this system has been built with 
                            a front-end interface to display bus conditions and notify warnings, and a back-end management system to analyze data and catch execeptions. Now, this 
                            system is under testing.
                        </Typography>
                        <div className='project-item-tech-stack'>
                            <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
                            <Chip label='Python' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='Flask' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='Flask-sqlalchemy' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='MySQL' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='JavaScript' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='HTML' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='CSS' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='RESTful API' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='IoT' color='primary' className='project-item-tech-stack-item' />
                            <Chip label='Expert System' color='primary' className='project-item-tech-stack-item' />
                        </div>
                    </div>
                </div>
            </div>
        </ContentGrid>
    );
}

export default Education;