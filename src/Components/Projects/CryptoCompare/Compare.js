import React from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, ProjDetails, CompareContainer } from './CCelements';

const Compare = () => {
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
      <CompareContainer>
        <ProjImage>
        <h2 style={h2special}>Challenge 3: Comparison Portfolio</h2>
        <img src={process.env.PUBLIC_URL + '/images/COMPARE_cccompare.png'} alt="crypto compare dashboard" style={mockup}></img>
        </ProjImage>
        <ProjDetails>
        <p style={detail}>After adding currency to the portfolio from Single Coin View we want to give users a place to compare the performance of each coin against each other.</p>
          <p style={detail}>Plotting the current price across a line graph with it's corresponding color makes it easy to pick out individual coins.</p>
          <p style={detail}>Coins can be elimated from the portfolio by pressing "delete" next to the coin in the coin list or the user can view more coin details by pressing "view".</p>
        </ProjDetails>
      </CompareContainer>
    </div>
  );
}

export default Compare;
