import React from 'react';
import ContentGrid from '../Layout/ContentGrid'; 
import { Divider, Typography, Chip, Link, Hidden } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import { SectionWrapper } from "../utilities/SectionWrapper";
import ProjectCard from "./ProjectCard";

import burgerImage from "../../assets/images/allProject/burger-order-homepage.png";
import dashboardImage from "../../assets/images/allProject/admin-homepage.png";
import calculatorImg from "../../assets/images/allProject/calculator.png";
import timerImg from "../../assets/images/allProject/countdown-timer.png";
import todoImg from "../../assets/images/allProject/todo-app.png";
import busImg from "../../assets/images/allProject/bus.png";
import './Projects.css';
 
const Projects = () => {

    return (
        <SectionWrapper title="Fun Projects" subtitle="FIND MY REAL DEVELOPMENT APPLICATIONS">
            <div className="project-card-container">
                <ProjectCard 
                  image={burgerImage} 
                  imgTitle="Burger Order Platform" 
                  projectName="Burger Builder E-commerce Application"
                  techStack={["React", "Redux", "Material-UI", "react-router", "axios", "Firebase"]}
                  intro="The application allows customers to create their own burger by adding or removing ingredients based on their own flavour. 
                         The customer information and order data are stored in the database. 
                         Users are required to log in to place an order or check their history orders."
                  simpleIntro="Customers are required to log in to create their own burger by adding or removing ingredients, place an order and check their history orders.
                         The customer information and order data are stored in the database. "
                  websiteLink="https://react-my-burger-1f18b.web.app/"
                  githubLink="https://github.com/WendyChenj/My-Burger-Builder"
                />

                <ProjectCard 
                  image={dashboardImage} 
                  imgTitle="Admin Dashboard" 
                  projectName="Admin Dashboard"
                  techStack={["React", "Redux", "D3.js", "Material-UI", "react-router"]}
                  intro="The dashboard allows users to check the sales performance of products and track the progress of team members.
                         Users also could add new tasks and delete tasks that have been done. 
                         Moreover, there is a monthly timeline to remind users big event and the date when big event happens. 
                         Users could edit the date and event according to their own schedule."
                  simpleIntro="By visualizing sales data, users are able to check sales performance and track their task progress. 
                         The monthly schedule and timeline remind users the date when big event occurs."
                  websiteLink="https://nostalgic-brattain-51149d.netlify.app/"
                  githubLink="https://github.com/WendyChenj/Admin-Dashboard"
                />

                <ProjectCard 
                  image={calculatorImg} 
                  imgTitle="JavaScript Calculator" 
                  projectName="JavaScript Calculator"
                  techStack={["React", "HTML", "CSS", "RegExp", "CSS Grid"]}
                  intro="The calculator utilizes immediate logic and output calculation result.
                         Any operation (+-*/) and the decimal (.) element are able to work. If 2 or more operators are entered consecutively, 
                         the operation performed should be the last operator entered (excluding the negative (-) sign). "
                  simpleIntro="The calculator utilizes immediate logic and output calculation result.
                         It would be able to perform any operations, and recognize decimals and negative sign."
                  websiteLink="https://wendychenj.github.io/javascript-calculator/"
                  githubLink="https://github.com/WendyChenj/Admin-Dashboard"
                />

                <ProjectCard 
                  image={timerImg} 
                  imgTitle="Countdown Timer" 
                  projectName="Countdown Timer"
                  techStack={["React", "HTML", "CSS"]}
                  intro="Click the start button will make the timer running. And the timer can be stopped or resumed counting at any time.
                         When a session/ break countdown reaches to zero, a sound will be played indicating that time is up.
                         Click the reset button, the session/ break length and timer will be set to the initialized state. 
                         The sound will stop playing and be rewound to the beginning."
                  simpleIntro="Click the start button makes the timer running and the timer can be stopped or resumed counting at any time.
                               A sound will be played indicating time is up when a session/ break countdown reaches 0."
                  websiteLink="https://wendychenj.github.io/javascript-clock/"
                  githubLink="https://github.com/WendyChenj/javascript-clock"
                />

                <ProjectCard 
                  image={todoImg} 
                  imgTitle="Task Management Application" 
                  projectName="Task Management Application"
                  techStack={["TypeScript", "React", "Redux", "styled-components", "react-router"]}
                  intro="The todo app allows users to check their task lists based on the task state including todo, in progress and done. 
                         Also, users can add new tasks and edit tasks according to their progress!"
                  simpleIntro="There are three task status including todo, in progress and done. 
                              New task can be added and existing tasks can be edited and moved to another status group."
                  websiteLink="https://gifted-ptolemy-72f282.netlify.app/todo"
                  githubLink="https://github.com/WendyChenj/react-typescript"
                />

                <ProjectCard 
                  image={busImg} 
                  imgTitle="Bus" 
                  projectName="A Predictive Maintenance System for A Hybrid Bus (Master's Thesis)"
                  techStack={['Python', 'Flask', 'Flask-SqlAlchemy', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Restful API', 'IoT', 'Expert System']}
                  intro="This system can monitor real-time sensor activities, store and process real-time data in database 
                         and alert warnings when abnormal data occurs. By cooperating with mechanical techinians in STO company and other colleagues from my lab, 
                         we successfully built a front-end interface to display bus conditions and notify warnings, and a back-end management system to analyze data and catch execeptions."
                  simpleIntro="By working closely with technical experts in STO company and other team members from my lab, we successfully built a predictive maintenance system including 
                         frontend and backend and achieved 100% correctness detecting abnormal data."
                  githubDisabled = {true}
                  buttonName= "see my thesis"
                  websiteLink="https://gifted-ptolemy-72f282.netlify.app/todo"
                />
            </div>

            <Divider style={{marginTop: "32px"}} />
            
        </SectionWrapper>
        // <ContentGrid>
        //     <div className='main-container'>
        //         <Typography variant='h4' color='primary' style={{fontWeight: '900', padding: '112px 0 16px 0'}}>Projects</Typography>

        //         <div className='project-item'>
        //             <div className='project-item-icon'>
        //                 <FormatListBulletedIcon fontSize='large' style={{color: '#bc4749'}} />
        //             </div>
        //             <div className='project-images-title-container'>
        //                 <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2020.11</Typography> 
        //                 <div className='project-item-link'>
        //                     <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>
        //                         Todo Management App
        //                         <Link href='https://gifted-ptolemy-72f282.netlify.app' target='_blank' rel='noopener'>
        //                             <LinkIcon style={{paddingBottom: '8px', paddingLeft: '8px'}} />
        //                         </Link>
        //                         <Link href='https://github.com/WendyChenj/react-typescript' target='_blank' rel='noopener'>
        //                             <GitHubIcon style={{paddingBottom: '8px', paddingLeft: '8px'}} />
        //                         </Link>
        //                     </Typography>  
        //                 </div> 
                                              
        //                 <Typography color='secondary' style={{paddingBottom: '8px'}}>
        //                     The todo app allows users to check their task lists based on the task state including todo, in progress and done. 
        //                     Also, users can add new tasks and edit tasks according to their progress!
        //                 </Typography>
        //                 <div className='project-item-tech-stack'>
        //                     <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
        //                     {[ 'TypeScript', 'React', 'Redux', 'Styled-Component', 'react-router' ].map( tech => {
        //                         return <Chip label={tech} color='primary' key={tech} className='project-item-tech-stack-item' />
        //                     })}
        //                 </div>
                        
        //             </div>
        //         </div>

        //         <Hidden xsDown>
        //             <Divider variant='inset'/>
        //         </Hidden>

        //         <Hidden smUp>
        //             <Divider />
        //         </Hidden>

        //         <div className='project-item'>
        //             <div className='project-item-icon'>
        //                 <FastfoodIcon fontSize='large' style={{ color: '#fcbf49'}} />
        //             </div>
        //             <div className='project-images-title-container'>
        //                 <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2020.06-2020.09</Typography> 
        //                 <div className='project-item-link'>
        //                     <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>
        //                         Burger Order E-commerce Application
        //                         <Link href='https://react-my-burger-1f18b.web.app/' target='_blank' rel='noopener'>
        //                             <LinkIcon style={{paddingLeft: '8px', textAlign: 'center'}} />
        //                         </Link>
        //                         <Link href='https://github.com/WendyChenj/My-Burger-Builder' target='_blank' rel='noopener'>
        //                             <GitHubIcon style={{paddingLeft: '8px', textAlign: 'center'}} />
        //                         </Link>
        //                     </Typography>  
        //                 </div> 
                                              
        //                 <Typography color='secondary' style={{paddingBottom: '8px'}}>
        //                     A burger order application which allows customers to add or remove ingredients based on their own taste and create their own 
        //                     fabulous and juicy burger!
        //                 </Typography>
        //                 <div className='project-item-tech-stack'>
        //                     <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
        //                     {[ 'React', 'Redux', 'Material-UI', 'react-router', 'axios', 'Firebase' ].map( tech => {
        //                         return <Chip label={tech} color='primary' key={tech} className='project-item-tech-stack-item' />
        //                     })}
        //                 </div>

        //                 <div>
        //                     <BurgerProjectImgs  />
        //                 </div>
                        
        //             </div>
        //         </div>

        //         <Hidden xsDown>
        //             <Divider variant='inset'/>
        //         </Hidden>

        //         <Hidden smUp>
        //             <Divider />
        //         </Hidden>

        //         <div className='project-item'>
        //             <div className='project-item-icon'>
        //                 <SupervisorAccountIcon fontSize='large' style={{color: '#dee2ff'}}  />
        //             </div>
        //             <div className='project-images-title-container'>
        //                 <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2020.01-2020.02</Typography> 
        //                 <div className='project-item-link'>
        //                     <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>
        //                         Admin Dashboard Application
        //                         <Link href='https://nostalgic-brattain-51149d.netlify.app/' target='_blank' rel='noopener'>
        //                             <LinkIcon style={{paddingBottom: '8px', paddingLeft: '8px'}} />
        //                         </Link>
        //                         <Link href='https://github.com/WendyChenj/Admin-Dashboard' target='_blank' rel='noopener'>
        //                             <GitHubIcon style={{paddingBottom: '8px', paddingLeft: '8px'}} />
        //                         </Link>
        //                     </Typography>  
        //                 </div> 
                                              
        //                 <Typography color='secondary' style={{paddingBottom: '8px'}}>
        //                     The dashboard allows users to check the sales performance of products and track the progress of team members. 
        //                     Users also could add new tasks and delete tasks that have been done. 
        //                     Moreover, there is a monthly timeline to remind users big event and the date when big event happens. 
        //                     Users could edit the date and event according to their own schedule.
        //                 </Typography>
        //                 <div className='project-item-tech-stack'>
        //                     <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
        //                     {[ 'React', 'Redux', 'Material-UI', 'react-router', 'D3.js' ].map( tech => {
        //                         return <Chip label={tech} color='primary' key={tech} className='project-item-tech-stack-item' />
        //                     })}
        //                 </div>
                        
        //             </div>
        //         </div>

        //         <Hidden xsDown>
        //             <Divider variant='inset'/>
        //         </Hidden>

        //         <Hidden smUp>
        //             <Divider />
        //         </Hidden>

        //         <div className='project-item'>
        //             <div className='project-item-icon'>
        //                 <DirectionsBusIcon color='primary' fontSize='large' style={{color: '#6a994e'}}  />
        //             </div>
        //             <div className='project-item-title'>
        //                 <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2019.01-2020.05</Typography>  
        //                 <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>A Predictive Maintenance System for A Hybrid Bus (Master's Thesis
        //                     <Link href='https://ocul-uo.primo.exlibrisgroup.com/permalink/01OCUL_UO/1lm0b9c/alma991044948376505161'>
        //                         <LinkIcon style={{paddingLeft: '8px', paddingRight: '8px'}}/>
        //                     </Link>
        //                     )
        //                 </Typography>                           
        //                 <Typography color='secondary' style={{paddingBottom: '8px'}}>
        //                     A predictive maintenance system which can monitor real-time sensor activities, store and process real-time data in database 
        //                     and alert warnings to bus drivers and technicians when abnormal data occurs. Thanks to the cooperation of technicians in STO company, this system has been built with 
        //                     a front-end interface to display bus conditions and notify warnings, and a back-end management system to analyze data and catch execeptions. Now, this 
        //                     system is under testing.
        //                 </Typography>
        //                 <div className='project-item-tech-stack'>
        //                     <Typography style={{fontWeight: '800', paddingRight: '16px'}}>Tech Stack: </Typography>
        //                     {[ 'Python', 'Flask', 'Flask-SqlAlchemy', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Restful API', 'IoT', 'Expert System' ].map(
        //                         tech => {
        //                             return <Chip label={ tech } color='primary' key={tech}  className='project-item-tech-stack-item' />
        //                     })}
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </ContentGrid>
    );
}

export default Projects;