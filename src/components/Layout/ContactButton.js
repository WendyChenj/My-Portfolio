import React from 'react';
import { Button } from '@material-ui/core';

const ContactButton = props => {
    return (
        <Button variant='contained' color='primary' href={props.href} style={{width: '200px', fontWeight: '600', marginLeft: '64px'}} download={ props.download} >
            {props.children}
        </Button>
    );
}

export default ContactButton;