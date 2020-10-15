import React from 'react';
import { AppBar, Container, Typography, useScrollTrigger } from '@material-ui/core';
import './HeaderBar.css';
import { Link } from 'react-scroll';
import Home from '../Home/Home';
import About from '../About/About';
import Education from '../Education/Education';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Contact from '../Contact/Contact';

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
        <>
            <ElevationScroll>
                <AppBar className='headerBar'>
                    <Container maxWidth='lg' className='header-container'>
                        <Typography variant='h4' style={{color: 'black', fontWeight: '900', paddingLeft: '32px'}}>WENDY</Typography>
                        <div>
                            <ul className='header-container-items'>
                                <li className='header-container-item'>
                                    <Link activeClass='active' to='#home' spy={true} smooth={true} duration={500}>Home</Link>
                                </li>
                                <li className='header-container-item'>
                                    <Link activeClass='active' to='#about' spy={true} smooth={true} duration={500}>About</Link>
                                </li>
                                <li className='header-container-item'>
                                    <Link activeClass='active' to='#education' spy={true} smooth={true} duration={500}>Education</Link>
                                </li>
                                <li className='header-container-item'>
                                    <Link activeClass='active' to='#projects' spy={true} smooth={true} duration={500}>Projects</Link>
                                </li>
                                <li className='header-container-item'>
                                    <Link activeClass='active' to='#skills' spy={true} smooth={true} duration={500}>Skills</Link>
                                </li>
                                <li className='header-container-item'>
                                    <Link activeClass='active' to='#contact' spy={true} smooth={true} duration={500}>Contact Me</Link>
                                </li>
                            </ul>
                        </div>
                   </Container>
                </AppBar>
            </ElevationScroll>

            <div id='#home'>
                <Home />
            </div>

            <div id='#about'>
                <About />
            </div>

            <div id='#education'>
                <Education />
            </div>

            <div id='#projects'>
                <Projects />
            </div>

            <div id='#skills'>
                <Skills />
            </div>

            <div id='#contact'>
                <Contact />
            </div>
        </>
       
    );
}

export default HeaderBar;