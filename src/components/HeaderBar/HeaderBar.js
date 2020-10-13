import React from 'react';
import { AppBar, Container, Typography, useScrollTrigger } from '@material-ui/core';
import './HeaderBar.css';

const ElevationScroll = props => {
    const { children } = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

const HeaderBar = () => {
    return (
        <ElevationScroll>
            <AppBar className='headerBar' color='white'>
                <Container maxWidth='lg' className='header-container'>
                    <Typography variant='h4' style={{fontWeight: '900', paddingLeft: '32px'}}>WENDY</Typography>
                    <div >
                        <ul className='header-container-items'>
                            <li className='header-container-item'>
                                Home
                            </li>
                            <li className='header-container-item'>
                                About
                            </li>
                            <li className='header-container-item'>
                                Education
                            </li>
                            <li className='header-container-item'>
                                Projects
                            </li>
                            <li className='header-container-item'>
                                Skills
                            </li>
                            <li className='header-container-item'>
                                Contact
                            </li>
                        </ul>
                    </div>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
}

export default HeaderBar;