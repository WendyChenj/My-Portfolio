import React from 'react';
import ContentGrid from '../Layout/ContentGrid';
import { Typography } from '@material-ui/core';
import './Contact.css';

const Contact = () => {
    return (
        <section id='contact'>
        <ContentGrid>
            <div className='contact-container'>
                <Typography variant='h4' color='primary' style={{fontWeight: '900', padding: '112px 0 16px 0'}}>Contact Me</Typography>
            </div>
        </ContentGrid>
        </section>
    );
}

export default Contact;
