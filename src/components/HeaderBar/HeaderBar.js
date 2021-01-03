import React, { useState } from 'react';
import { AppBar, Container, Typography, useScrollTrigger, Hidden, IconButton, Drawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import './HeaderBar.css';
import { Link } from 'react-scroll';
import Home from '../Home/Home';
import About from '../About/About';
import Experience from '../Experience/Experience';
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

const HeaderLinks = props => {
  return (
    <ul className={props.linksContainer}>
      {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map( ele => {
        return (
          <li className={props.linkItem} key={ ele }>
            <Link activeClass='active' to={`#${ele.toLowerCase()}`} spy={true} smooth={true} duration={500}  onClick={props.clicked}>
              { ele }
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

const HeaderBar = () => {
  const [drawerOpen, setDrawerOpen ] = useState(false);
  const toggleDrawerOpen = () => {
    setDrawerOpen(true);
  }
  const toggleDrawerClose = () => {
    setDrawerOpen(false);
  }
  return (
    <>
      <ElevationScroll>
        <AppBar className='headerBar'>
          <Container maxWidth='lg' className='header-container'>
            <Typography variant='h4' style={{color: 'black', fontWeight: '900'}} className='header-wendy'>
              WENDY
            </Typography>
            <Hidden smDown={ true }>
              <HeaderLinks linksContainer='header-container-items' linkItem='header-container-item' />
            </Hidden>
            <Hidden mdUp={ true }>
              <IconButton onClick={toggleDrawerOpen}>
                <MenuIcon style={{color: 'black', paddingRight: '16px'}} fontSize='large' />
              </IconButton>
              <Drawer anchor='right' open={drawerOpen} onClose={toggleDrawerClose}>
                <HeaderLinks linksContainer='drawer-container-items' linkItem='drawer-container-item' clicked={toggleDrawerClose} />
              </Drawer>
            </Hidden>
          </Container>
        </AppBar>
      </ElevationScroll>

      <div id='#home'>
        <Home />
      </div>

      <div id='#about'>
        <About />
      </div>

      <div id='#experience'>
        <Experience />
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