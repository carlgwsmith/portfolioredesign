import React from 'react';
import { OLCustom, LiCustom } from '../ProjectElements';

const ProjectChallenge = () => {
  return (
    <div>
      <h2>Project Challenges</h2>
      <OLCustom>
        <LiCustom>Make onboarding new client simpler and more user friendly for financial advisors</LiCustom>
        <LiCustom>Design a new way for users to easily access help and support documentation</LiCustom>
        <LiCustom>Create a new minimalistic and consistent UI that allows users to stay focused while analyzing the complexities of a financial strategy</LiCustom>
        <LiCustom>Create an innovative custom model portfolio creation system and integrate that into an investment marketplace.</LiCustom>
      </OLCustom>
    </div>
  );
}

export default ProjectChallenge;
