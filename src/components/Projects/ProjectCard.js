import React from "react";

import { Card, CardContent, CardMedia, Typography, Button } from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';

const ProjectCard = props => {

  const TechStack = () => (
    <div className='card-tech-stack'>
      <EditIcon 
        fontSize="small" 
        color="primary" 
        style={{marginRight: "4px"}}
      />
      {(props.techStack).map( tech => {
        return <span key={tech} style={{marginRight: "4px"}}>{tech};</span>
      })}
    </div>
  );

  return (
    <Card className="card-container">
      <CardMedia
        component="img"
        height={window.innerWidth > 600? "240": "180"}
        image={props.image}
        title={props.imgTitle}
        style={{ width: "auto", margin: "8px"}}
      />
      <CardContent className="card-content-container">
        <Typography variant="h6">
          {props.projectName}
        </Typography>

        {window.innerWidth > 600 ? <TechStack /> : null}

        <Typography style={{marginTop: "6px"}}>
          {window.innerWidth > 960 ? props.intro : props.simpleIntro}
        </Typography>

        <div className="card-button-groups">
          <Button 
            variant="outlined" 
            color="primary" 
            href={props.websiteLink} 
            target="_blank"
            disabled={props.disabled}
          >
            {props.buttonName ? props.buttonName: "see it live"}
          </Button>

          <Button 
            variant="outlined" 
            color={props.githubDisabled ? "secondary": "primary"}
            style={{marginLeft: "24px"}} 
            href={props.githubLink} 
            target="_blank"
            disabled={props.githubDisabled}
          >
            Github
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default ProjectCard;