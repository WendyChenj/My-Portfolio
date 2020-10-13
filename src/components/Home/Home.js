import React from 'react';
import { Container, Typography } from '@material-ui/core';
import './Home.css';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

const Home = () => {
    return (
        <div className='home-container'>
            <div className='home-overlay'></div>
            <Container maxWidth='md' className='home-intro-container'>
                <Typography variant='h5' align='center' color='primary' style={{fontWeight: '900', padding: '18px'}}>Hey there! I am</Typography>
                <Typography variant='h3' align='center' style={{fontWeight: '900', padding: '20px'}}>WENJIE (WENDY) CHEN</Typography>
                <Typography variant='h4' align='center' style={{fontWeight: '800', padding: '20px'}}>I'm a <span style={{ color: '#9c27b0'}} className='home-front-end'>Front End Developer.</span></Typography>
            </Container>
            {/* <Container maxWidth='md' >
                <div style={{width: '100px', height: '100px', background: '#9c27b0', opacity: '.1', right: '50%'}}> */}
            <div className='home-arrow-container'>
                <ArrowDownwardIcon color='primary' fontSize='large' />
            </div>
                
                {/* </div>
            </Container> */}
        </div>
    );
}

export default Home;