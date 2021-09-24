import React from 'react';
import {ResumeContainer, SideA, SideB, SideC, About, AboutImg} from '../Components/Resume/ResumeElements'
import Education from '../Components/Resume/Education';
import Skills from '../Components/Resume/Skills';
import Experience from '../Components/Resume/Experience'
import Info from '../Components/Resume/Info'
import VennDiagram from '../Components/Shared/VennDiagram';

const Resume = () => {
  return (
    <ResumeContainer>
      <About>
        <Info/>
      </About>
      <AboutImg>
        <VennDiagram/>
      </AboutImg>
      <SideA>
      <Experience/>
      </SideA>
      <SideB>
      <Education/>
        </SideB>
      <SideC>
      <Skills/>
      </SideC>
    </ResumeContainer>
  );
}

export default Resume;
