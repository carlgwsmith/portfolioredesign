import React from 'react';
import { PersonaContainer, PersonaName, PersonaQuote, PersonaImg, PersonaDetails, PersonaGoal, PersonaFrus, ProblemStatement, UserNeeds } from './CCelements';

const Persona1 = () => {
  const personaimg = {
    width:"300px"
  }
  return (
    <div>
      <PersonaContainer>
        <PersonaName>
          <h2>Persona: James</h2>
        </PersonaName>
        <PersonaQuote style={{paddingLeft:'20px', fontSize:"18px", fontWeight:"500"}}>“I love researching new up and coming alt currency”</PersonaQuote>
        <PersonaImg><img src={process.env.PUBLIC_URL + '/images/james.jpg'} style={personaimg}></img></PersonaImg>
        <ProblemStatement style={{paddingLeft:'20px'}}>
          <p style={{fontWeight:"600"}}>Problem Statement:</p>
          <p>James is a busy student who wants to quickly compare the performance of cryptocurrency before he makes a purchase </p>
        </ProblemStatement>
        <PersonaDetails>
          <ul>
            <li>Age: 21</li>
            <li>Education: Some College</li>
            <li>Hometown: Kansas City, Mo</li>
            <li>Occupation: Delivery Driver / Student</li>
          </ul>
        </PersonaDetails>
        <PersonaGoal style={{paddingLeft:'20px'}}>
          <p style={{color:'blue', fontWeight:"600", marginBottom:"0px"}}>Goals</p>
          <p style={{marginTop:"4px"}}>Buy a house in the future and have lasting investments</p>
        </PersonaGoal>
        <PersonaFrus  style={{paddingLeft:'20px'}}>
        <p style={{color:'red', fontWeight:"600", marginBottom:"0px"}}>Frustrations</p>
          <p style={{marginTop:"4px"}}>Most crypto sites don’t offer robust comparison tools </p>
        </PersonaFrus>
        <UserNeeds>
        James is attempting to do research on cryptocurrencies to build an investment portfolio. He regularly visits websites that allow him to find robust data on single coins but not compare multiple coins concurrently.
        </UserNeeds>
      </PersonaContainer>
    </div>
  );
}

export default Persona1;
