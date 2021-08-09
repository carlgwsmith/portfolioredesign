import React from 'react';
import {ResumeContainer, SideA, SideB} from '../Components/Resume/ResumeElements'
import Education from '../Components/Resume/Education';

const Resume = () => {
  return (
    <ResumeContainer>
      <SideA>
        <Education/>
      </SideA>
      <SideB>SIDE B</SideB>
    </ResumeContainer>
  );
}

export default Resume;
