import React from 'react';
import {ProblemContainer, Prob, Solution} from './Lelements'
import {FiAlertTriangle} from 'react-icons/fi'
import {BsFillCheckCircleFill} from 'react-icons/bs'

const Problemsolution = () => {
const Header = {
  fontSize:'2em'
}

  return (
    <ProblemContainer>
      <Prob>
        <h2 style={{marginBottom:'0px'}}><FiAlertTriangle style={{verticalAlign:'sub'}}/> Problem</h2>
        <p style={{marginTop:'0px', marginBottom:'8px', fontWeight:'500', lineHeight:'1.2'}}>First time home buyers need a central location to find mortgage and lending information</p>
        <p style={{marginTop:'0px', fontWeight:'400', lineHeight:'1.2', fontSize:'.85em', marginBottom:'30px'}}>When you first buy a home, the process is often complicated, and you need to do independent research across multiple areas of the web to get specific information you are looking for.</p>
        </Prob>
      <Solution>
      <h2 style={{marginBottom:'0px'}}><BsFillCheckCircleFill style={{verticalAlign:'sub'}}/> Solution</h2>
        <p style={{marginTop:'0px', fontWeight:'400', lineHeight:'1.2'}}>House, in one place, mortgage glossary information calculators, and other tools would be very beneficial to many users and help them make better financial decisions.</p>
      </Solution>
    </ProblemContainer>
  );
}

export default Problemsolution;
