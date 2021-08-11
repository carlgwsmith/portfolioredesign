import React from 'react';
import {ResumeContainer, SideA, SideB, About} from '../Components/Resume/ResumeElements'
import Education from '../Components/Resume/Education';
import Skills from '../Components/Resume/Skills';
import Experience from '../Components/Resume/Experience'
import Info from '../Components/Resume/Info'

const Resume = () => {
  return (
    <ResumeContainer>
      <About>
        <Info/>
      </About>
      <SideA>
        <Education/>
        <Skills/>
      </SideA>
      <SideB><Experience/></SideB>
    </ResumeContainer>
  );
}

export default Resume;
