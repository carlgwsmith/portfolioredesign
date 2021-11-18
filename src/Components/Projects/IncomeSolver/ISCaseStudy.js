import React, {useState} from 'react';
import ProjectVision from './ProjectVision';
import ProjectChallenge from './ProjectChallenge';
import GettingStarted from './GettingStarted';
import StyleGuide from './StyleGuide';
import AddAccounts from './AddAccounts';
import Support from './Support';
import CustomModels from './CustomModel';
import Carl from './Carl'
import IsProblem from './Problem'
import IsSolution from './Solution'
import Research from './Research';
import { Header, Role, Problem, Solution, Vision, Challenge, GS, ProjectOverview, Accounts, Help, Models, CustomStyle, Button} from '../ProjectElements';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';
import { UserResearch } from './ISelements'

const ISCaseStudy = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const imageUrl = process.env.PUBLIC_URL + '/images/isheaderbg.jpg'
  return (
    <div>
      <ProjectOverview>
      <Header img={imageUrl}>
      <h1 className="projName">Income Solver</h1>
      <HeroBtnWrapper>
          <Button href="https://www.incomesolver.com" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
            See Project {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
      </Header>
        <Role>
          <Carl/>
        </Role>
        <Problem>
          <IsProblem/>
        </Problem>
        <Solution>
          <IsSolution/>
        </Solution>
        <Vision>
        <ProjectVision/>
        </Vision>
        <Challenge>
          <ProjectChallenge/>
        </Challenge>
        <UserResearch>
          <Research/>
        </UserResearch>
        <GS>
          <GettingStarted/>
        </GS>
        <Accounts>
          <AddAccounts/>
        </Accounts>
        <Help>
          <Support/>
        </Help>
        <CustomStyle>
          <StyleGuide/>
        </CustomStyle>
        <Models>
          <CustomModels/>
        </Models>
      </ProjectOverview>
    </div>
  );
}

export default ISCaseStudy;
