import React from 'react';
import { ResumeContainer, SideA1, SideA2, SideB1, SideB2 } from '../Components/Projects/ProjectElements';
import Card from '../Components/Projects/ProjectCard'
import { useHistory } from 'react-router-dom';

const Projects = () => {

  const history = useHistory();

  // function FMCase (){
  //   history.push('/projects/fomomachine')
  // }
  // function RCCase (){
  //   history.push('/projects/retirementcalc')
  // }
  // function CCCase (){
  //   history.push('/projects/cryptocompare')
  //   console.log('go')
  // }
  // function ISCase (){
  //   history.push('/projects/incomesolver')
  // }
  return (
    <div>
      <ResumeContainer>
        <SideA1><Card title="Crypto Compare" rgb="64,94,104"image={process.env.PUBLIC_URL + "/images/cryptoCompare.png"} onClick={() => history.push('/projects/cryptocompare')}/></SideA1>
        <SideB1><Card title="FOMO Machine" rgb="64,94,104"image={process.env.PUBLIC_URL + "/images/cryptoCompare.png"} onClick={() => history.push('/projects/fomomachine')}/></SideB1>
        <SideA2><Card title="Retirement Calculator" rgb="64,94,104"image={process.env.PUBLIC_URL + "/images/cryptoCompare.png"} onClick={() => history.push('/projects/retirementcalc')}/></SideA2>
        <SideB2><Card title="Income Solver" rgb="01,116,254"image={process.env.PUBLIC_URL + "/images/solverLogo.png"} onClick={() => history.push('/projects/incomesolver')}/></SideB2>
      </ResumeContainer>
    </div>
  );
}

export default Projects;
