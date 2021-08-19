import React from 'react';
import {ProjImage, ProjDetails, ModelsContainer } from './ISelements';
const CustomModels = () => {
  const mockup = {
    width: "100%",
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
      <h2 style={h2special}>Challenge 4: Custom Model Portfolios</h2>
      <ModelsContainer>
      <ProjImage>
        <img src={process.env.PUBLIC_URL + '/images/COMPARECustomModel-MockupCrop.png'} alt="on boarding comparison" style={mockup}></img>
        </ProjImage>
        <ProjDetails>
          <p style={detail}>Model portfolios are a collection of various holdings that are grouped together and <em>modeled</em> by their risk level. Example: "This group of 10 holdings together equals a risk level of conservative".</p>
          <p style={detail}>Many financial advisors use model portfolios from large investment firms, or sometimes they create their own. Model portfolio complexity can get very tedious as advisors often create portfolios to change allocation over time. For example when you get older your risk tolerance becomes more conservative so you would ideally want your investment portfolio to change to conservative.</p>
        </ProjDetails>
      </ModelsContainer>
    </div>
  );
}

export default CustomModels;
