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
import StrategiesList from './StrategiesList';
import Research from './Research';
import { Header, Role, Problem, Solution, Vision, Challenge, GS, ProjectOverview, Accounts, Strategies, Help, Models, CustomStyle, Button} from '../ProjectElements';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';
import { UserResearch } from './ISelements'
import Protect from 'react-app-protect'
import 'react-app-protect/dist/index.css'

const ISCaseStudy = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const imageUrl = process.env.PUBLIC_URL + '/images/isheaderbg.jpg'
  return (
    <Protect sha512="387C48819845B16E47AFEEA85E6EDA20CB5EE41692993FB547D9F35F3709B186342DDED518F68D0D3E194F33686F0A1BEEFADBD7417FC08DCD948FDF9A16231E">
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
        <Strategies>
          <StrategiesList/>
        </Strategies>
        <Help>
          <Support/>
        </Help>
        <Models>
          <CustomModels/>
        </Models>
        <CustomStyle>
          <StyleGuide/>
        </CustomStyle>
      </ProjectOverview>
    </div>
    </Protect>
  );
}

export default ISCaseStudy;
