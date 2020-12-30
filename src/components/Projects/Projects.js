import React from 'react';
import ContentGrid from '../Layout/ContentGrid'; 
import BurgerProjectImgs from './BurgerProjectImgs/BurgerProjectImgs';
import { Divider, Typography, Chip, Link, Hidden } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

import './Projects.css';
 
const Projects = () => {

    return (
        <ContentGrid>
            <div className='main-container'>
                <Typography variant='h4' color='primary' style={{fontWeight: '900', padding: '112px 0 16px 0'}}>Projects</Typography>

                <div className='project-item'>
                    <div className='project-item-icon'>
                        <FormatListBulletedIcon fontSize='large' style={{color: '#bc4749'}} />
                    </div>
                    <div className='project-images-title-container'>
                        <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2020.11</Typography> 
                        <div className='project-item-link'>
                            <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>
                                Todo Management App
                                <Link href='https://gifted-ptolemy-72f282.netlify.app' target='_blank' rel='noopener'>
                                    <LinkIcon style={{paddingBottom: '8px', paddingLeft: '8px'}} />
                                </Link>
                                <Link href='https://github.com/WendyChenj/react-typescript' target='_blank' rel='noopener'>
                                    <GitHubIcon style={{paddingBottom: '8px', paddingLeft: '8px'}} />
                                </Link>
                            </Typography>  
                        </div> 
                                              
                        <Typography color='secondary' style={{paddingBottom: '8px'}}>
                            The todo app allows users to check their task lists based on the task state including todo, in progress and done. 
                            Also, users can add new tasks and edit tasks according to their progress!
                        </Typography>
                        <div className='project-item-tech-stack'>
                            <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
                            {[ 'TypeScript', 'React', 'Redux', 'Styled-Component', 'react-router' ].map( tech => {
                                return <Chip label={tech} color='primary' key={tech} className='project-item-tech-stack-item' />
                            })}
                        </div>
                        
                    </div>
                </div>

                <Hidden xsDown>
                    <Divider variant='inset'/>
                </Hidden>

                <Hidden smUp>
                    <Divider />
                </Hidden>

                <div className='project-item'>
                    <div className='project-item-icon'>
                        <FastfoodIcon fontSize='large' style={{ color: '#fcbf49'}} />
                    </div>
                    <div className='project-images-title-container'>
                        <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2020.06-2020.09</Typography> 
                        <div className='project-item-link'>
                            <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>
                                Burger Order E-commerce Application
                                <Link href='https://react-my-burger-1f18b.web.app/' target='_blank' rel='noopener'>
                                    <LinkIcon style={{paddingLeft: '8px', textAlign: 'center'}} />
                                </Link>
                                <Link href='https://github.com/WendyChenj/My-Burger-Builder' target='_blank' rel='noopener'>
                                    <GitHubIcon style={{paddingLeft: '8px', textAlign: 'center'}} />
                                </Link>
                            </Typography>  
                        </div> 
                                              
                        <Typography color='secondary' style={{paddingBottom: '8px'}}>
                            A burger order application which allows customers to add or remove ingredients based on their own taste and create their own 
                            fabulous and juicy burger!
                        </Typography>
                        <div className='project-item-tech-stack'>
                            <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
                            {[ 'React', 'Redux', 'Material-UI', 'react-router', 'axios', 'Firebase' ].map( tech => {
                                return <Chip label={tech} color='primary' key={tech} className='project-item-tech-stack-item' />
                            })}
                        </div>

                        <div>
                            <BurgerProjectImgs  />
                        </div>
                        
                    </div>
                </div>

                <Hidden xsDown>
                    <Divider variant='inset'/>
                </Hidden>

                <Hidden smUp>
                    <Divider />
                </Hidden>

                <div className='project-item'>
                    <div className='project-item-icon'>
                        <SupervisorAccountIcon fontSize='large' style={{color: '#dee2ff'}}  />
                    </div>
                    <div className='project-images-title-container'>
                        <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2020.01-2020.02</Typography> 
                        <div className='project-item-link'>
                            <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>
                                Admin Dashboard Application
                                <Link href='https://nostalgic-brattain-51149d.netlify.app/' target='_blank' rel='noopener'>
                                    <LinkIcon style={{paddingBottom: '8px', paddingLeft: '8px'}} />
                                </Link>
                                <Link href='https://github.com/WendyChenj/Admin-Dashboard' target='_blank' rel='noopener'>
                                    <GitHubIcon style={{paddingBottom: '8px', paddingLeft: '8px'}} />
                                </Link>
                            </Typography>  
                        </div> 
                                              
                        <Typography color='secondary' style={{paddingBottom: '8px'}}>
                            The dashboard allows users to check the sales performance of products and track the progress of team members. 
                            Users also could add new tasks and delete tasks that have been done. 
                            Moreover, there is a monthly timeline to remind users big event and the date when big event happens. 
                            Users could edit the date and event according to their own schedule.
                        </Typography>
                        <div className='project-item-tech-stack'>
                            <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
                            {[ 'React', 'Redux', 'Material-UI', 'react-router', 'D3.js' ].map( tech => {
                                return <Chip label={tech} color='primary' key={tech} className='project-item-tech-stack-item' />
                            })}
                        </div>
                        
                    </div>
                </div>

                <Hidden xsDown>
                    <Divider variant='inset'/>
                </Hidden>

                <Hidden smUp>
                    <Divider />
                </Hidden>

                <div className='project-item'>
                    <div className='project-item-icon'>
                        <DirectionsBusIcon color='primary' fontSize='large' style={{color: '#6a994e'}}  />
                    </div>
                    <div className='project-item-title'>
                        <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2019.01-2020.05</Typography>  
                        <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>A Predictive Maintenance System for A Hybrid Bus (Master's Thesis
                            <Link href='https://ocul-uo.primo.exlibrisgroup.com/permalink/01OCUL_UO/1lm0b9c/alma991044948376505161'>
                                <LinkIcon style={{paddingLeft: '8px', paddingRight: '8px'}}/>
                            </Link>
                            )
                        </Typography>                           
                        <Typography color='secondary' style={{paddingBottom: '8px'}}>
                            A predictive maintenance system which can monitor real-time sensor activities, store and process real-time data in database 
                            and alert warnings to bus drivers and technicians when abnormal data occurs. Thanks to the cooperation of technicians in STO company, this system has been built with 
                            a front-end interface to display bus conditions and notify warnings, and a back-end management system to analyze data and catch execeptions. Now, this 
                            system is under testing.
                        </Typography>
                        <div className='project-item-tech-stack'>
                            <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
                            {[ 'Python', 'Flask', 'Flask-SqlAlchemy', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Restful API', 'IoT', 'Expert System' ].map(
                                tech => {
                                    return <Chip label={ tech } color='primary' key={tech}  className='project-item-tech-stack-item' />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </ContentGrid>
    );
}

export default Projects;