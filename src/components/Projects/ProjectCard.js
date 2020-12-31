import React from "react";

import { Card, CardContent, CardMedia, Typography, Button } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

const ProjectCard = props => {
  return (
    <Card className="card-container">
      <CardMedia
        component="img"
        height="240"
        image={props.image}
        title={props.imgTitle}
        style={{ width: "auto", margin: "8px"}}
      />
      <CardContent className="card-content-container">
        <Typography variant="h6">
          {props.projectName}
        </Typography>
        <div className='card-tech-stack'>
          <EditIcon 
            fontSize="small" 
            color="primary" 
            style={{marginRight: "4px"}}
          />
          {(props.techStack).map( tech => {
            return <span style={{marginRight: "4px"}}>{tech};</span>
          })}
        </div>

        <Typography style={{marginTop: "6px"}}>
          {props.intro}
        </Typography>

        <div className="card-button-groups">
          <Button 
            variant="outlined" 
            color="primary" 
            href={props.websiteLink} 
            target="_blank"
            disabled={props.disabled}
          >
            See It Live
          </Button>

          <Button 
            variant="outlined" 
            color="primary" 
            style={{marginLeft: "64px"}} 
            href={props.githubLink} 
            target="_blank"
            disabled={props.disabled}
          >
            Github
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;