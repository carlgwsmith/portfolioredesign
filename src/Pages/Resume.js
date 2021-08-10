import React from 'react';
import {ResumeContainer, SideA, SideB} from '../Components/Resume/ResumeElements'
import Education from '../Components/Resume/Education';
import Skills from '../Components/Resume/Skills';
import Experience from '../Components/Resume/Experience'

const Resume = () => {
  return (
    <ResumeContainer>
      <SideA>
        <Education/>
        <Skills/>
      </SideA>
      <SideB><Experience/></SideB>
    </ResumeContainer>
  );
}

export default Resume;
