import React from 'react';
import { Link }  from '@material-ui/core';

export const IconLink = (props) => {
  return (
    <Link href={props.href} target='_blank' rel='noopener' style={{color: "black"}}>
      {props.children}
    </Link>  
  );
}