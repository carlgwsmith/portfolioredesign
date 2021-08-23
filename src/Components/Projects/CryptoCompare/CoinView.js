import React from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, ProjDetails, ViewContainer } from './CCelements';

const CoinView = () => {
  const mockup = {
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto"
  }
  const h2special = {
    margin: "10px 0 10px 0",
    fontSize: "2em",
    color:"#fff",
    textAlign:"center"
  }
  const detail = {
    fontSize:"1.5em",
    lineHeight:"1.5",
    marginTop:"0",
    color:"#fff"
  }
  return (
    <div>
      <ViewContainer>
        <ProjImage>
        <h2 style={h2special}>Challenge 2: Single Coin Research View</h2>
        <img src={process.env.PUBLIC_URL + '/images/COMPARE_ccview.png'} alt="crypto compare dashboard" style={mockup}></img>
        </ProjImage>
        <ProjDetails>
        <p style={detail}>Researching individual coins is probably the main feature of CryptoCompare. The user will be needs to know whether the latest information of the coin they are researching so they can ensure that it will work best in their portfolio.</p>
          <p style={detail}>Providing current information like price, supply, market cap is invaluable to users.</p>
          <p style={detail}>Users must also have a way to add coins to the portfolio to do the actual comparison at a later time.</p>
        </ProjDetails>
      </ViewContainer>
    </div>
  );
}

export default CoinView;
