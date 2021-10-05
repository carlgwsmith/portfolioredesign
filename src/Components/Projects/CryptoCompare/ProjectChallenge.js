import React from 'react';
import { OLCustom, LiCustom } from '../IncomeSolver/ISelements';

const ProjectChallenge = () => {
  return (
    <div>
      <h2 style={{color:"#3d3d3d"}}>Project Challenges</h2>
      <OLCustom style={{color:"#3d3d3d"}}>
        <LiCustom>What general crypto and market information would be helpful upon logging into the platform</LiCustom>
        <LiCustom>Determine what information is most important to users when viewing a single currency</LiCustom>
        <LiCustom>How to effectively compare multiple currencies in a visually appealing way</LiCustom>
      </OLCustom>
    </div>
  );
}

export default ProjectChallenge;
