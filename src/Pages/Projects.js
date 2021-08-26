import React from 'react';
import { VisResumeContainer, ResumeContainer, About, SideA1, SideA2, SideB1, SideB2 } from '../Components/Projects/ProjectElements';
import Card from '../Components/Projects/ProjectCard'

const Projects = () => {

  return (
    <div>
      <ResumeContainer>
      <About><h1 style={{margin:"0px"}}>Featured Projects</h1> 
      </About>
        <SideA1><Card title="Crypto Compare" subtitle="UX Case Study" rgb="64,94,104" image={process.env.PUBLIC_URL + "/images/CryptoCompare.jpg"} url="/projects/cryptocompare"/></SideA1>
        <SideB1><Card title="Income Solver" subtitle="UX Case Study" rgb="01,116,254" image={process.env.PUBLIC_URL + "/images/solverLogo.png"} url="/projects/incomesolver"/></SideB1>
        <SideA2><Card title="FOMO Machine" subtitle="Dev Case Study" rgb="106,107,255" image={process.env.PUBLIC_URL + "/images/FOMOMachine.jpg"} url="/projects/fomomachine"/></SideA2>
        <SideB2><Card title="Retirement Calculator" subtitle="Dev Case Study" rgb="39, 76, 133" image={process.env.PUBLIC_URL + "/images/retirementcalc.jpg"} url="/projects/retirementcalc"/></SideB2>
      </ResumeContainer>
      {/* <VisResumeContainer>
      <About><h1 style={{margin:"0px"}}>Featured Visual Design</h1>
      </About>
        <SideA1><Card title="Crypto Compare" subtitle="UX Case Study" rgb="64,94,104" image={process.env.PUBLIC_URL + "/images/CryptoCompare.jpg"} url="/projects/cryptocompare"/></SideA1>
      </VisResumeContainer> */}
    </div>
  );
}

export default Projects;
