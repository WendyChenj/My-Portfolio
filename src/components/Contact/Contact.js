import React from 'react';
import ContentGrid from '../Layout/ContentGrid';
import { Typography } from '@material-ui/core';

const Contact = () => {
    return (
        <ContentGrid>
            <div className='contact-container'>
                <Typography variant='h3' color='primary' style={{fontWeight: '900', padding: '112px 0 16px 0'}}>Contact Me</Typography>
            </div>
        </ContentGrid>
    );
}

export default Contact;
