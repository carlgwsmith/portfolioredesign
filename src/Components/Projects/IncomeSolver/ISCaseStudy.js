import React from 'react';
import ProjectVision from './ProjectVision';
import ProjectChallenge from './ProjectChallenge';
import GettingStarted from './GettingStarted';
import { Header, Vision, Challenge, GS, ProjectOverview } from '../ProjectElements';

const ISCaseStudy = () => {
  return (
    <div>
      <ProjectOverview>
      <Header>
      <h1>Income Solver</h1>
      </Header>
        <Vision>
        <ProjectVision/>
        </Vision>
        <Challenge>
          <ProjectChallenge/>
        </Challenge>
        <GS><GettingStarted/>
        </GS>
      </ProjectOverview>
    </div>
  );
}

export default ISCaseStudy;
