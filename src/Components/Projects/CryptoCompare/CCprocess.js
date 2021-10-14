import React from 'react';
import { GiGearStickPattern } from 'react-icons/gi'

const Ccprocess = () => {
  const mockup = {
    width:"100%",
    marginLeft:"auto",
    marginRight:"auto"
  }
  return (
    <div>
      <h2 style={{color:"#3d3d3d"}}><GiGearStickPattern/> Process</h2>
      <img src={process.env.PUBLIC_URL + '/images/CCprocess.svg'} alt="crypto compare process flow" style={mockup}></img>
    </div>
  );
}

export default Ccprocess;
