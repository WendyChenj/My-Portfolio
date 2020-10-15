import React from 'react';
import { Button } from '@material-ui/core';

const ContactButton = props => {
    return (
        <Button variant='contained' color='primary' style={{marginLeft: '64px', width: '200px', fontWeight: '600'}}>
            {props.children}
        </Button>
    );
}

export default ContactButton;