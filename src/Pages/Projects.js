import React from 'react';
import { ResumeContainer, SideA1, SideA2, SideB1, SideB2 } from '../Components/Projects/ProjectElements';
import Card from '../Components/Projects/ProjectCard'

const Projects = () => {
  return (
    <div>
      <ResumeContainer>
        <SideA1><Card title="Crypto Compare" rgb="64,94,104"image={process.env.PUBLIC_URL + "/images/cryptoCompare.png"}/></SideA1>
        <SideB1><Card title="FOMO Machine" rgb="64,94,104"image={process.env.PUBLIC_URL + "/images/cryptoCompare.png"}/></SideB1>
        <SideA2><Card title="Retirement Calculator" rgb="64,94,104"image={process.env.PUBLIC_URL + "/images/cryptoCompare.png"}/></SideA2>
        <SideB2><Card title="Income Solver" rgb="01,116,254"image={process.env.PUBLIC_URL + "/images/solverLogo.png"}/></SideB2>
      </ResumeContainer>
    </div>
  );
}

export default Projects;
