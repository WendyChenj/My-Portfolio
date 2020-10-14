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
        style: {
            backgroundColor: trigger ? 'white': 'transparent',
        }
    });
}

const HeaderBar = () => {
    return (
        <ElevationScroll>
            <AppBar className='headerBar'>
                <Container maxWidth='lg' className='header-container'>
                    <Typography variant='h4' style={{color: 'black', fontWeight: '900', paddingLeft: '32px'}}>WENDY</Typography>
                    <div>
                        <ul className='header-container-items'>
                            <li className='header-container-item'>
                                <a href='#home'>Home</a>
                            </li>
                            <li className='header-container-item'>
                                <a href='#about'>About</a>
                            </li>
                            <li className='header-container-item'>
                                <a href='#education'>Education</a>
                            </li>
                            <li className='header-container-item'>
                                <a href='#projects'>Projects</a>
                            </li>
                            <li className='header-container-item'>
                                <a href='#skills'>Skills</a>
                            </li>
                            <li className='header-container-item'>
                                <a href='#contact'>Contact Me</a>
                            </li>
                        </ul>
                    </div>
                </Container>
            </AppBar>
        </ElevationScroll>
    );
}

export default HeaderBar;