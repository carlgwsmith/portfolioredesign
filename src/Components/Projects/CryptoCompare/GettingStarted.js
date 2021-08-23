import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, ProjDetails, GSContainer } from './CCelements';
import {FaReact} from "react-icons/fa"
import {SiStyledComponents, SiFirebase} from "react-icons/si"

const GettingStarted = () => {
  const mockup = {
    width: "600px",
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
  const detailBig = {
    fontSize:"2em",
    fontWeight:"600",
    lineHeight:"1.5",
    marginTop:"0"
  }
  return (
    <div>
      <GSContainer>
        <ProjImage>
        <img src={process.env.PUBLIC_URL + '/images/cryptoCompareMockUpImacCrop.png'} alt="crypto compare dashboard" style={mockup}></img>
        </ProjImage>
        <ProjDetails>
          <p style={detailBig}>CryptoCompare utilizes:</p>
          <p style={detail}><FaReact color="#4e9bff" size="2em"/> the React framework for reuseable JavaScript components</p>
          <p style={detail}><SiFirebase color="orange" size="2em"/> Authentication and live database powered by Google's Firebase</p>
          <p style={detail}><SiStyledComponents color="#fb8ee3" size="2em"/> Custom stylized components using the Styled Components plugin.</p>
        </ProjDetails>
      </GSContainer>
    </div>
  );
}

export default GettingStarted;
