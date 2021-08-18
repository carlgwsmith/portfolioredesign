import React from 'react';
import {ProjImage, ProjDetails, ProjDetailsContainer } from '../ProjectElements';
const AddAccounts = () => {
  const mockup = {
    width: "100%",
    height:"100%",
    marginLeft:"auto",
    marginRight:"auto"
  }
  const h2special = {
    margin: "10px 0 0 0",
    fontSize: "2em",
    color:"#3d3d3d"
  }
  const detail = {
    fontSize:"1.5em",
    lineHeight:"1.5",
    marginTop:"0"
  }
  return (
    <div>
      <h2 style={h2special}>Challenge 1: Simplify Onboarding</h2>
      <ProjDetailsContainer>
      <ProjImage>
        <img src={process.env.PUBLIC_URL + '/images/compareaddaccounts.png'} alt="on boarding comparison" style={mockup}></img>
        </ProjImage>
        <ProjDetails>
          <p style={detail}>A key factor into getting access into the greater software and using it for financial advice is the onboarding process. Users are required to set up their accoounts (or households) and input information about themselves and their financial backgrounds.</p>
          <p style={detail}>Tracking down and inputting account information can be a chore if the experience is tedious. In order to streamline the onboarding process, we streamlined adding accounts by having multiple ways to input accounts, including an automatic sync feature using <a href="https://plaid.com/">plaid</a>. </p>
        </ProjDetails>
      </ProjDetailsContainer>
    </div>
  );
}

export default AddAccounts;
