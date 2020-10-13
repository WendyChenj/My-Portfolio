import React from 'react';
import ContentGrid from '../Layout/ContentGrid';
import { Grid, Typography, Container, List, ListItemText } from '@material-ui/core';
import self from '../../assets/images/self.JPG';
import './About.css';

const About = () => {
    return (
        <ContentGrid>
            <Grid container spacing={0}>
                <Grid item md={6}>
                    <Container>
                        <div className='pic-card-container'>
                            <img className='pic-item' src={ self } alt='Hello, meet me!' />
                        </div>
                    </Container>
                </Grid>
                <Grid item md={6}>
                    <div className='about-me-main-container'>
                        <Typography variant='h3' className='about-me-title'>About me</Typography>
                        <div className='about-me-intro'>
                            <Typography variant='h6' color='secondary'>Hi, I am a professional front end developer who is fueled by true passion for implementing visual elements and building UX/UI websites.
                                I consider myself a 'forever student', eager to both practice coding skills through projects and stay in tune with the latest technologies.
                            </Typography>
                        </div>
                        <Grid container spacing={2} className='about-me-intro'>
                            <Grid item md={4}>
                                <List>
                                    <ListItemText primary='Name:' className='about-me-info' primaryTypographyProps={{variant: 'h6'}}/>
                                    <ListItemText primary='Date of birth:' className='about-me-info' primaryTypographyProps={{variant: 'h6'}}/>
                                    <ListItemText primary='Address:' className='about-me-info' primaryTypographyProps={{variant: 'h6'}}/>
                                    <ListItemText primary='Zip code:' className='about-me-info' primaryTypographyProps={{variant: 'h6'}}/>
                                    <ListItemText primary='Email:' className='about-me-info' primaryTypographyProps={{variant: 'h6'}}/>
                                    <ListItemText primary='Phone:' className='about-me-info' primaryTypographyProps={{variant: 'h6'}}/>
                                </List>
                            </Grid>
                            <Grid item md={8}>
                                <List>
                                    <ListItemText primary='Wendy Chen' className='about-me-info' primaryTypographyProps={{variant: 'h6', color: 'secondary'}}/>
                                    <ListItemText primary='August 1995' className='about-me-info' primaryTypographyProps={{variant: 'h6', color: 'secondary'}}/>
                                    <ListItemText primary='1551 Lycee Place' className='about-me-info' primaryTypographyProps={{variant: 'h6', color: 'secondary'}}/>
                                    <ListItemText primary='K1G 4B5' className='about-me-info' primaryTypographyProps={{variant: 'h6', color: 'secondary'}}/>
                                    <ListItemText primary='wendychen9395@gmail.com' className='about-me-info' primaryTypographyProps={{variant: 'h6', color: 'secondary'}}/>
                                    <ListItemText primary='(343)-988-8540' className='about-me-info' primaryTypographyProps={{variant: 'h6', color: 'secondary'}}/>
                                </List>
                            </Grid>
                        </Grid>
                    </div>     
                </Grid>
            </Grid>
        </ContentGrid>
    );
}

export default About;