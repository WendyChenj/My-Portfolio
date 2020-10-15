import React from 'react';
import ContentGrid from '../Layout/ContentGrid'; 
import { Divider, Typography, Chip, GridList, GridListTile } from '@material-ui/core';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import DirectionsBusIcon from '@material-ui/icons/DirectionsBus';
import './Projects.css';

// use require.context() in webpack: https://webpack.js.org/guides/dependency-management/#require-context
function importAll(r) {
    let images = {};
    r.keys().map( item => { 
        images[item.replace('./', '')] = r(item); 
    });
    return images;
}

const images = importAll(require.context( '../../assets/images/burgerProject', false, /\.(png|jpe?g|svg)$/));

const BurgerProjectImgs = () => {

    return (
        <GridList cellHeight={400} style={{ flexWrap: 'nowrap', transform:'translateZ(0)'}}>
            {Object.keys(images).map( img => {
                return (
                    <GridListTile cols={1} rows={1} key={img} style={{width: '350px', height: '400px'}}>
                        <img src={images[img]} alt={img} style={{width: '320px', height: '400px'}}/>
                    </GridListTile>
                )}
            )}
        </GridList>
    );
}

const Education = () => {
    const settings = {
        dots: true,
        speed: 500,
        adaptiveHeight: true,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    return (
        <section id='projects'>
        <ContentGrid>
            <div className='projects-container'>
                <Typography variant='h4' color='primary' style={{fontWeight: '900', padding: '112px 0 16px 0'}}>Projects</Typography>

                <div className='project-item'>
                    <div className='project-item-icon'>
                        <FastfoodIcon color='primary' fontSize='large'  />
                    </div>
                    <div style={{ width: '100%' }}>
                        <Typography color='primary' variant='h6' style={{fontWeight: '800', paddingBottom: '8px'}}>2020.06-2020.09</Typography>  
                        <Typography variant='h5' style={{fontWeight: '800', paddingBottom: '8px'}}>My Burger Order Application</Typography>                           
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

                        <div className='project-images-container' style={{width: '100%'}}>
                            <BurgerProjectImgs  />
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
                            {[ 'Python', 'Flask', 'Flask-SqlAlchemy', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Restful API', 'IoT', 'Expert System' ].map(
                                tech => {
                                    return <Chip label={ tech } color='primary' key={tech}  className='project-item-tech-stack-item' />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </ContentGrid>
        </section>
    );
}

export default Education;