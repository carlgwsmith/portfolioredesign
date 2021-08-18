import React from 'react';
import ProjectVision from './ProjectVision';
import ProjectChallenge from './ProjectChallenge';
import GettingStarted from './GettingStarted';
import AddAccounts from './AddAccounts';
import Support from './Support';
import CustomModels from './CustomModel';
import { Header, Vision, Challenge, GS, ProjectOverview, Accounts, Help, Models} from '../ProjectElements';

const ISCaseStudy = () => {
  const mockup = {
    width:"100%"
  }
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
        <GS>
          <GettingStarted/>
        </GS>
        <Accounts>
          <AddAccounts/>
        </Accounts>
        <Help>
          <Support/>
        </Help>
        <Models>
          <CustomModels/>
        </Models>
      </ProjectOverview>
    </div>
  );
}

export default ISCaseStudy;
