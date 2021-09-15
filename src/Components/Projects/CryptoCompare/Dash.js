import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, Detail, ProjDetails, DashContainer } from './CCelements';
const Dash = () => {
  const mockup = {
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto"
  }
  const h2special = {
    margin: "10px 0 10px 0",
    fontSize: "2em",
    color:"#3d3d3d",
    textAlign:"center"
  }
  const detail = {
    fontSize:"1.5em",
    lineHeight:"1.5",
    marginTop:"0"
  }
  return (
    <div>
      <DashContainer>
        <ProjImage>
        <h2 style={h2special}>Challenge 1: Logged In Dashboard</h2>
        <img src={process.env.PUBLIC_URL + '/images/COMPARE_ccdash.png'} alt="crypto compare dashboard" style={mockup}></img>
        </ProjImage>
        <ProjDetails>
          <Detail>The dashboard is essentially the homepage for a logged in user.</Detail>
          <Detail>The user will be able to find up-to-date information on what popular coins are doing. The user will also be able to find today's movers and losers, the latest market statistics, and the latest cryptocurrency news.</Detail>
          <Detail>Most importantly, the dashboard functions as the main search area for researching coins.</Detail>
        </ProjDetails>
      </DashContainer>
    </div>
  );
}

export default Dash;
