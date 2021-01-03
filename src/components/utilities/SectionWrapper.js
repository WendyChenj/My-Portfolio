import React from 'react';
import {Typography} from "@material-ui/core";

import "./utilities.css";

export const SectionWrapper = props => {
  return (
    <div className="section-wrapper">
      <Typography variant='h4' style={{fontWeight: '900'}}>{props.title}</Typography>
      <Typography className="section-subtitle">{props.subtitle}</Typography>

      {props.children}
    </div>
  );
}