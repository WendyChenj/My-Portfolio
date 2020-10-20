import React from 'react';
import ContentGrid from '../Layout/ContentGrid';
import ContactButton from '../Layout/ContactButton';
import { Grid, Typography, Container, List, ListItemText, Hidden } from '@material-ui/core';
import self from '../../assets/images/self/self.JPG';
import selfSmall from '../../assets/images/self/self-small.png';
import './About.css';
import '../Layout/GlobalCss.css';

const About = () => {
    return (
        <ContentGrid>
            <Hidden smDown={ true }>
            <Grid container>
                <Grid item md={6}>
                    <Container>
                        <div className='pic-card-container'>
                            <img className='pic-item' src={ self } alt='Hello, meet me!' />
                        </div>
                    </Container>
                </Grid>
                <Grid item md={6}>
                    <div className='about-me-main-container'>
                        <Typography variant='h4' className='about-me-title' style={{fontWeight: '900'}}>About me</Typography>
                        <div className='about-me-intro'>
                            <Typography variant='h6' color='secondary'>Hi, I am a professional front end developer who is fueled by true passion for implementing visual elements 
                                and building UX/UI websites. I consider myself a 'forever student', eager to both practice coding skills through projects 
                                and stay in tune with the latest technologies.
                            </Typography>
                        </div>
                        <Grid container spacing={2} className='about-me-intro'>
                            <Grid item md={4}>
                                <List>
                                    {['Name:', 'Address:', 'Zip Code:', 'Email:', 'Phone:'].map( item => {
                                        return (
                                            <ListItemText primary={ item } className='about-me-info' primaryTypographyProps={{variant: 'h6'}} key={ item } />
                                        );
                                    })}
                                </List>
                            </Grid>
                            <Grid item md={6}>
                                <List>
                                    {['Wendy Chen', 'Ottawa, ON', 'K1G 4B5', 'wendychen9395@gmail.com', '(343)-988-8540'].map( item => {
                                        return (
                                            <ListItemText primary={ item } className='about-me-info' primaryTypographyProps={{variant: 'h6', color: 'secondary'}} key={ item }/>
                                        );
                                    })}
                                </List>
                            </Grid>
                        </Grid>
                        <div className='about-me-button-container'>
                            <ContactButton href='../../assets/files/Wendy_Chen_resume.pdf' download={ true } >Download My CV</ContactButton>
                        </div>
                    </div>     
                </Grid>
            </Grid>
            </Hidden>

            <Hidden mdUp={ true }>
                <div className='main-container'>
                <div className='about-me-small-container'>
                    <div>
                        <img className='pic-item-small' src={ selfSmall } alt='Hello, meet me!' />
                        
                    </div>
                    <Typography variant='h4' className='about-me-title-small' style={{fontWeight: '900'}}>About me</Typography>

                    <div className='about-me-intro-small'>
                        <Typography variant='h6' color='secondary'>Hi, I am a professional front end developer who is fueled by true passion for implementing visual elements 
                            and building UX/UI websites. I consider myself a 'forever student', eager to both practice coding skills through projects 
                            and stay in tune with the latest technologies.
                        </Typography>
                    </div>

                    <div style={{marginLeft: '-64px'}}>
                        <ContactButton href='../../assets/files/Wendy_Chen_resume.pdf' download={ true }>Download My CV</ContactButton>
                        <Hidden xsDown>
                            <ContactButton href='mailto:wendychen9395@gmail.com' download={ true }>Hire Me</ContactButton>
                        </Hidden>   
                    </div>

                </div>
                </div>
            </Hidden>
        </ContentGrid>
    );
}

export default About;