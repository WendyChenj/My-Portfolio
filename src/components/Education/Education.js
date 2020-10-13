import React from 'react';
import ContentGrid from '../Layout/ContentGrid';
import { Divider, Typography } from '@material-ui/core';
import SchoolIcon from '@material-ui/icons/School';
import './Education.css';

const Education = () => {
    return (
        <ContentGrid>
            <div className='education-container'>
                <Typography variant='h3' color='primary' style={{fontWeight: '900', padding: '112px 0 16px 0'}}>Education</Typography>
                <div className='education-info-container'>
                    <div className='edu-item'>
                        <div className='edu-item-icon'>
                            <SchoolIcon color='primary' fontSize='large' style={{border: '2px solid', padding: '8px', borderRadius: '10px'}}/>
                        </div>
                        <div>
                            <Typography color='primary' variant='h6' style={{fontWeight: '800'}}>2020.04-2020.06</Typography>
                            <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>React - The Complete Guide (Hooks, React Router, Redux)</Typography>
                            <Typography variant='h6' style={{fontWeight: '600', paddingBottom: '8px'}}>Online Course taught by Maximilian Schwarzmüller</Typography>
                            <Typography color='secondary'>
                                Dive deeper in React with advanced React knowledge as well as popular libraries like react-router and Redux. 
                                Build powerful, fast, user-friendly and reactive web apps with Class-based Components and React Hooks from ground up. 
                                Apply form validation, authentication and unit testing on React application and deploy applications on Internet. 
                            </Typography>
                        </div>
                    </div>

                    <Divider variant='inset'/>

                    <div className='edu-item'>
                        <div className='edu-item-icon'>
                            <SchoolIcon color='primary' fontSize='large' style={{border: '2px solid', padding: '8px', borderRadius: '10px'}}/>
                        </div>
                        <div className='edu-item-title'>
                            <Typography color='primary' variant='h6' style={{fontWeight: '800'}}>2018.01-2020.05</Typography>
                            <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>Master of Systems Science in Computer Science</Typography>
                            <Typography variant='h6' style={{fontWeight: '600', paddingBottom: '8px'}}>University of Ottawa</Typography>
                            <Typography color='secondary' style={{paddingBottom: '8px'}}>GPA: 9.6/10</Typography>
                            <Typography color='secondary'>Related Courses:</Typography>
                            <Typography color='secondary' style={{paddingLeft: '8px'}}>Foundation of Modelling and Simulation / Systems Integration / Data Structures and Algorithms / Advanced Database Systems ...</Typography>
                        </div>
                    </div>

                    <Divider variant='inset'/>

                    <div className='edu-item'>
                        <div className='edu-item-icon'>
                            <SchoolIcon color='primary' fontSize='large' style={{border: '2px solid', padding: '8px', borderRadius: '10px'}}/>
                        </div>
                        <div className='edu-item-title'>
                            <Typography color='primary' variant='h6' style={{fontWeight: '800'}}>2013.09-2017.06</Typography>
                            <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>Bachelor degree in Engineering</Typography>
                            <Typography variant='h6' style={{fontWeight: '600', paddingBottom: '8px'}}>University of Science and Technology, Beijing</Typography>
                            <Typography color='secondary' style={{paddingBottom: '8px'}}>GPA: 4.3/5</Typography>
                            <Typography color='secondary'>Related Courses:</Typography>
                            <Typography color='secondary' style={{paddingLeft: '8px'}}>C++ Programming / Microcomputer Principle and Application ...</Typography>
                        </div>
                    </div>
                </div>
            </div>
        </ContentGrid>
    );
}

export default Education;