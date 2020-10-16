import React from 'react';
import { Button } from '@material-ui/core';

const ContactButton = props => {
    return (
        <Button variant='contained' color='primary' href={props.href} style={{marginLeft: '64px', width: '200px', fontWeight: '600'}} download={ props.download} >
            {props.children}
        </Button>
    );
}

export default ContactButton;