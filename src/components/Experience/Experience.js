import React from 'react';
import { SectionWrapper } from "../utilities/SectionWrapper";
import ExperienceTimeline from "./ExperienceTimeline";
import ContentGrid from '../Layout/ContentGrid';
import { Divider } from '@material-ui/core';
import './Experience.css';

const Experience = () => {
  return (
    <SectionWrapper title="Professional Experience" subtitle="WORK EXPERIENCE AND RELEVANT ACADEMIC ACCOMPLISHMENTS">
      <div className="experience-timeline">
        <ExperienceTimeline />
      </div>
            
      <Divider style={{marginTop: "32px"}} />
    </SectionWrapper>
  );
}

export default Experience;