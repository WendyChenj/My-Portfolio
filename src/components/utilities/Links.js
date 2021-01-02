import React from 'react';
import { Link, Typography }  from '@material-ui/core';

export const IconLink = (props) => {
  return (
    <Link href={props.href} target='_blank' rel='noopener' style={{color: "black", margin: "0 8px"}}>
      {props.children}
    </Link>  
  );
}

export const ContactLink = props => {
  return (
    <Link href={props.href} target='_blank' rel='noopener'>
      <div className='contact-link-subcontainer'>
        {props.children}
        <div className='contact-link-title'>
          <Typography style={{fontWeight: '600', color: "black"}}>
            {props.title}
          </Typography>
          <Typography color='secondary'>
            {props.intro}
          </Typography>
        </div>                                
      </div>
    </Link>
  );
}