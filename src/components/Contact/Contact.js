import React from 'react';
import ContentGrid from '../Layout/ContentGrid';
import ContactButton from '../Layout/ContactButton';
import { Typography, Grid, Link }  from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import './Contact.css';

const ContactLink = props => {
    return (
        <div className='contact-link-subcontainer'>
            {props.children}
            <div className='contact-link-title'>
                <Typography style={{fontWeight: '600'}}>
                    {props.title}
                </Typography>
                <Typography color='secondary'>
                    {props.intro}
                </Typography>
            </div>                                
        </div>
    );
}

const Contact = () => {

    return (
        <div className='contact-main-container'>
            <ContentGrid>
                <div className='contact-container'>
                    <Typography variant='h4' color='primary' style={{fontWeight: '900', color: 'black'}} className='contact-title'>
                        Let's get in touch!
                    </Typography>

                    <div className='contact-content'>
                        <Typography variant='h6' color='secondary' className='contact-content-text'>
                            I'm always looking for inspirational projects for which I can help find solutions and create beautiful and powerful websites. 
                            So if you are interested on my skillsets and aptitudes and have amazing projects on hands, please consider me for your team and 
                            send me message with your information! I will get back to you as soon as possible!
                        </Typography>
                    </div>
                </div>
            </ContentGrid>
            <ContentGrid>
                
            </ContentGrid>
            <div className='contact-end'>
                <ContentGrid>
                    <div className='contact-end-container'>
                        <Grid container spacing={4}>
                            <Grid item md={6} style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center'}}>
                                <div className='contact-link-container'>

                                    <ContactLink title='Linkedin' intro='Connect with me on Linkedin'>
                                        <Link href='https://www.linkedin.com/in/wenjie-wendy-chen/' target='_blank' rel='noopener'>
                                            <LinkedInIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </Link>
                                    </ContactLink>

                                    <ContactLink title='Github: WendyChenj' intro='Review my codes of my projects'>
                                        <Link href='https://github.com/WendyChenj' target='_blank' rel='noopener'>
                                            <GitHubIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </Link>
                                    </ContactLink>
                                    
                                    <ContactButton href='../../assets/files/Wendy_Chen_resume.pdf' download={ true }>
                                        DOWNLOAD MY CV
                                    </ContactButton>
                                </div>
                            </Grid>
                            <Grid item md={6} style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center'}}>
                                <div className='contact-link-container'>
                                    <ContactLink title='Email' intro='wendychen9395@gmail.com'>
                                        <Link href='mailto:wendychen9395@gmail.com' target='_blank' rel='noopener'>
                                            <EmailIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </Link>
                                    </ContactLink>
                                    <ContactLink title='Cell Phone' intro='(343)-988-8540'>
                                        <Link href='tel: 3439888540' target='_blank' rel='noopener'>
                                            <CallIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </Link>
                                    </ContactLink>
                                    
                                    <ContactButton href='mailto:wendychen9395@gmail.com' target='_blank' rel='noopener' download={false}>
                                        HIRE ME
                                    </ContactButton>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </ContentGrid>
            </div>
        </div>
    );
}

export default Contact;
