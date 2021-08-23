import React from 'react';
import { OLCustom, LiCustom } from '../IncomeSolver/ISelements';

const ProjectChallenge = () => {
  return (
    <div>
      <h2>Project Challenges</h2>
      <OLCustom>
        <LiCustom>What general crypto and market information would be helpful upon logging into the platform</LiCustom>
        <LiCustom>Determine what information is most important to users when viewing a single currency</LiCustom>
        <LiCustom>How to effectively compare multiple currencies in a visually appealing way</LiCustom>
      </OLCustom>
    </div>
  );
}

export default ProjectChallenge;
