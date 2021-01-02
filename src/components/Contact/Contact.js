import React from 'react';
import { SectionWrapper } from "../utilities/SectionWrapper";
import { ContactLink } from "../utilities/Links";
import ContactButton from '../Layout/ContactButton';
import { Typography, Grid, Link, Hidden, Button }  from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import CallIcon from '@material-ui/icons/Call';
import resume from '../../assets/files/Wendy_Chen_resume.pdf';
import './Contact.css';

const Contact = () => {

    return ( 
        <SectionWrapper title="Let's get contact!" subtitle="PLEASE REACH OUT IF I AM A GOOD FIT">
            <div className='contact-content'>
                <Typography variant='h6' color='secondary' className="contact-content-text">
                    I'm always looking for inspirational projects for which I can help find solutions and create beautiful and powerful websites. 
                    So if you are interested on my skillsets and aptitudes and have amazing projects on hands, please consider me for your team and 
                    send me message with your information! I will get back to you as soon as possible!
                </Typography>
            </div>
            
            <div className='contact-end'>
                <div className='contact-end-container'>
                    <Hidden xsDown>
                        <Grid container>
                            <Grid item md={6} sm={6} style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center'}}>
                                <div className='contact-link-container'>
                                    <ContactLink 
                                      href="https://www.linkedin.com/in/wenjie-wendy-chen/"
                                      title='Linkedin' 
                                      intro='Connect with me on Linkedin' 
                                    >
                                      <LinkedInIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                    </ContactLink>

                                     <ContactLink 
                                      href="https://github.com/WendyChenj"
                                      title='Github: WendyChenj' 
                                      intro='Review my codes of my projects'
                                    >
                                      <GitHubIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                    </ContactLink>

                                        <div style={window.innerWidth > 720 ? null: {marginLeft: '-48px'}}>
                                            <Button variant='contained' color='primary' href={resume} 
                                               style={{width: '200px', fontWeight: '600', marginLeft: '64px'}} 
                                               download='Wendy-Chen-resume-front-end-developer' >
                                                DOWNLOAD MY CV
                                            </Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item md={6} sm={6} style={{display: 'flex', flexFlow: 'row nowrap', justifyContent: 'center'}}>
                                    <div className='contact-link-container'>
                                        <ContactLink 
                                          href='mailto:wendychen9395@gmail.com'
                                          title='Email' 
                                          intro='wendychen9395@gmail.com'
                                        >
                                          <EmailIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </ContactLink>
                                        <ContactLink 
                                          href='tel: 3439888540' 
                                          title='Cell Phone' 
                                          intro='(343)-988-8540'
                                        >
                                          <CallIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </ContactLink>
                                    
                                        <div style={window.innerWidth > 720 ? null: {marginLeft: '-48px'}}>
                                            <ContactButton href='mailto:wendychen9395@gmail.com' target='_blank' rel='noopener' download={false} >
                                                HIRE ME
                                            </ContactButton>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Hidden>

                        <Hidden smUp>
                                <Grid container className="contact-end-subcontainer-small">
                                    <Grid item xs={3} style={{textAlign: 'center', height: '80px'}}>
                                        <Link href='https://www.linkedin.com/in/wenjie-wendy-chen/' target='_blank' rel='noopener'>
                                            <LinkedInIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={3} style={{textAlign: 'center'}}>
                                        <Link href='https://github.com/WendyChenj' target='_blank' rel='noopener'>
                                            <GitHubIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={3} style={{textAlign: 'center'}}>
                                        <Link href='mailto:wendychen9395@gmail.com' target='_blank' rel='noopener'>
                                            <EmailIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </Link>
                                    </Grid>
                                    <Grid item xs={3} style={{textAlign: 'center'}}>
                                        <Link href='tel: 3439888540' target='_blank' rel='noopener'>
                                            <CallIcon fontSize='large' className='contact-link-info' style={{color: 'black'}} />
                                        </Link>
                                    </Grid>
                                </Grid>
                                
                                
                                <div style={{textAlign: 'center', marginLeft: '-64px'}}>
                                    <Button variant='contained' color='primary' href={resume} 
                                               style={{width: '200px', fontWeight: '600', marginLeft: '64px'}} 
                                               download='Wendy-Chen-resume-front-end-developer' >
                                                DOWNLOAD MY CV
                                    </Button>
                                </div>
                        </Hidden>
                    </div>
            </div>
        </SectionWrapper>
    );
}

export default Contact;
