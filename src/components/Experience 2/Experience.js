import React from 'react';
import ContentGrid from '../Layout/ContentGrid';
import { Divider, Typography, Hidden } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import BusinessIcon from '@material-ui/icons/Business';
import './Experience.css';

const Experience = () => {
    
    return (
        <ContentGrid>
            <div className='main-container'> 
                <Typography variant='h4' color='primary' style={{fontWeight: '900', padding: '112px 0 16px 0'}}>Experience</Typography>
                <div className='education-info-container'>
                    <div className='edu-item'>
                        <div className='edu-item-icon'>
                            <BusinessIcon color='primary' fontSize='large' style={{border: '2px solid', padding: '8px', borderRadius: '10px'}}/>
                        </div>
                        <div className='edu-item-title'>
                            <Typography color='primary' variant='h6'>2020.11-Present</Typography>
                            <Typography variant='h6' style={{paddingBottom: '8px'}}>Software Developer</Typography>
                            <Typography color='secondary' style={{paddingBottom: '8px'}}>KataniTech Inc., Ottawa, ON</Typography>
                            <Typography>
                                • Volunteering of a humanitarian project to support over 2407 local businesses across Canada by sharing “pop-up” deals both in-store and online <br />
                                • Maintaining, optimizing, troubleshooting, and improving the performance of the website and mobile applications <br />
                                • Working closely with other team members on the development team
                            </Typography>
                        </div>
                    </div>
                    
                    <Hidden xsDown>
                        <Divider variant='inset'/>
                    </Hidden>

                    <Hidden smUp>
                        <Divider />
                    </Hidden>

                    <div className='edu-item'>
                        <div className='edu-item-icon'>
                            <SchoolIcon color='primary' fontSize='large' style={{border: '2px solid', padding: '8px', borderRadius: '10px'}}/>
                        </div>
                        <div className='edu-item-title'>
                            <Typography color='primary' variant='h6'>2020.04-2020.06</Typography>
                            <Typography variant='h6' style={{paddingBottom: '8px'}}>React - The Complete Guide (Hooks, React Router, Redux)</Typography>
                            <Typography color='secondary' style={{paddingBottom: '8px'}}>Online Course taught by Maximilian Schwarzmüller</Typography>
                            <Typography>
                                • Dive deeper in React with advanced React knowledge as well as popular libraries like react-router and Redux <br /> 
                                • Build powerful, fast, user-friendly and reactive web apps with Class-based Components and React Hooks from ground up <br /> 
                                • Apply form validation, authentication and unit testing on React application and deploy applications on Internet. 
                            </Typography>
                        </div>
                    </div>
                    
                    <Hidden xsDown>
                        <Divider variant='inset'/>
                    </Hidden>

                    <Hidden smUp>
                        <Divider />
                    </Hidden>
                    

                    <div className='edu-item'>
                        <div className='edu-item-icon'>
                            <SchoolIcon color='primary' fontSize='large' style={{border: '2px solid', padding: '8px', borderRadius: '10px'}}/>
                        </div>
                        <div className='edu-item-title'>
                            <Typography color='primary' variant='h6'>2018.01-2020.05</Typography>
                            <Typography variant='h6' style={{paddingBottom: '8px'}}>Master of Systems Science in Computer Science</Typography>
                            <Typography color='secondary' style={{paddingBottom: '8px'}}>University of Ottawa</Typography>
                            <Typography>GPA: 9.6/10</Typography>
                            <Typography>Related Courses:</Typography>
                            <Typography>Foundation of Modelling and Simulation / Systems Integration / Data Structures and Algorithms / Advanced Database Systems ...</Typography>
                        </div>
                    </div>

                    <Hidden xsDown>
                        <Divider variant='inset'/>
                    </Hidden>

                    <Hidden smUp>
                        <Divider />
                    </Hidden>

                    <div className='edu-item'>
                        <div className='edu-item-icon'>
                            <SchoolIcon color='primary' fontSize='large' style={{border: '2px solid', padding: '8px', borderRadius: '10px'}}/>
                        </div>
                        <div className='edu-item-title'>
                            <Typography color='primary' variant='h6'>2013.09-2017.06</Typography>
                            <Typography variant='h6' style={{paddingBottom: '8px'}}>Bachelor degree in Engineering</Typography>
                            <Typography color='secondary' style={{paddingBottom: '8px'}}>University of Science and Technology, Beijing</Typography>
                            <Typography>GPA: 4.3/5</Typography>
                            <Typography>Related Courses:</Typography>
                            <Typography>C++ Programming / Microcomputer Principle and Application ...</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </ContentGrid>
    );
}

export default Experience;