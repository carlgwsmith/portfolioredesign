import React from 'react';
import {ProjImage, Detail, ProjDetails, GSContainer } from './CCelements';
import {FaReact} from "react-icons/fa"
import {SiStyledComponents, SiFirebase} from "react-icons/si"

const GettingStarted = () => {
  const mockup = {
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto"
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
          <Detail><FaReact color="#4e9bff" size="1em"/> the React framework for reuseable JavaScript components</Detail>
          <Detail><SiFirebase color="orange" size="1em"/> Authentication and live database powered by Google's Firebase</Detail>
          <Detail><SiStyledComponents color="#fb8ee3" size="1em"/> Custom stylized components using the Styled Components plugin.</Detail>
        </ProjDetails>
      </GSContainer>
    </div>
  );
}

export default GettingStarted;
