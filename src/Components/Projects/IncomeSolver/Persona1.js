import React from 'react';
import { PersonaContainer, PersonaName, PersonaQuote, PersonaImg, PersonaDetails, PersonaGoal, PersonaFrus, ProblemStatement, UserNeeds } from '../CryptoCompare/CCelements';

const Persona1 = () => {
  const personaimg = {
    width:"300px"
  }
  return (
    <div>
      <PersonaContainer>
        <PersonaName>
          <h2>Persona: Henry</h2>
        </PersonaName>
        <PersonaQuote style={{paddingLeft:'20px', fontSize:"18px", fontWeight:"500"}}>“A good financial advisor needs to show his clients value.”</PersonaQuote>
        <PersonaImg><img src={process.env.PUBLIC_URL + '/images/henry.jpg'} style={personaimg}></img></PersonaImg>
        <ProblemStatement style={{paddingLeft:'20px'}}>
          <p style={{fontWeight:"600"}}>Problem Statement:</p>
          <p>Henry is a financial advisor with many clients, he wants a way to easily present drawdown strategies to his client to ensure that he is planning for the most tax-efficient retirement spending plan.</p>
        </ProblemStatement>
        <PersonaDetails>
          <ul>
            <li>Age: 41</li>
            <li>Education: Bachelor</li>
            <li>Hometown: Denver, Co</li>
            <li>Occupation: Financial Advisor</li>
          </ul>
        </PersonaDetails>
        <PersonaGoal style={{paddingLeft:'20px'}}>
          <p style={{color:'blue', fontWeight:"600", marginBottom:"0px"}}>Goals</p>
          <p style={{marginTop:"4px"}}>Gain more clients and show his value in order to maintain his current client list.</p>
        </PersonaGoal>
        <PersonaFrus  style={{paddingLeft:'20px'}}>
        <p style={{color:'red', fontWeight:"600", marginBottom:"0px"}}>Frustrations</p>
          <p style={{marginTop:"4px"}}>Most B2B apps for financial advisors focus on accumulate TO retirement, and not decumulation during retirement.</p>
        </PersonaFrus>
        <UserNeeds>
        Henry needs to be able to easily onboard new clients, access existing clients, show clients and efficient drawdown strategy and the analysis of that, be able to manage investments, get help and education if needed.
        </UserNeeds>
      </PersonaContainer>
    </div>
  );
}

export default Persona1;
