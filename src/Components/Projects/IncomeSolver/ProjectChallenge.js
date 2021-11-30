import React from 'react';
import { OLCustom, LiCustom } from './ISelements';
import {GrPlan} from 'react-icons/gr'

const ProjectChallenge = () => {
  return (
    <div>
      <h2 style={{color:'#3d3d3d', marginTop: '0px'}}><GrPlan/> Project Challenges</h2>
      <OLCustom>
        <LiCustom>Make onboarding new client simpler and more user friendly for financial advisors</LiCustom>
        <LiCustom>Design a new way for users to easily access help and support documentation</LiCustom>
        <LiCustom>Simplify strategy selection and analysis</LiCustom>
        <LiCustom>Create an innovative custom investment portfolio builder and integrate that into an investment marketplace.</LiCustom>
        <LiCustom>Upgrade, update, and unify UI that allows users to stay focused while analyzing the complexities of a financial strategy</LiCustom>
      </OLCustom>
    </div>
  );
}

export default ProjectChallenge;
