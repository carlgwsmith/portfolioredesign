import React, {useState} from 'react';
import ProjectChallenge from './ProjectChallenge';
import ProjectVision from './ProjectVision';
import GettingStarted from './GettingStarted';
import Dash from './Dash';
import Carl from './Carl'
import Ccproblem from './CCProblem';
import Ccprocess from './CCprocess';
import Ccsolution from './CCSolution';
import Ccuserresearch from './CCuserResearch';
import CoinView from './CoinView';
import Comparison from './Compare';
import Ideate from './Ideation';
import { ProjectOverview, Role, Header, Vision, Challenge, GS, Dashboard, View, Compare, Problem, Solution, Process, UserResearch, ProjName, Ideation} from './CCelements';
import { Button } from '../ProjectElements';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';

const CCCaseStudy = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const imageUrl = process.env.PUBLIC_URL + '/images/ccheaderlitebg.jpg'
  return (
    <div>
      <ProjectOverview>
        <Header img={imageUrl}>
          <ProjName>CryptoCompare</ProjName>
          <HeroBtnWrapper>
          <Button href="https://carlgwsmith.github.io/crypto-compare" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
            See Project {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
        </Header>
        <Role>
          <Carl/>
        </Role>
        <Problem>
          <Ccproblem/>
        </Problem>
        <Solution>
          <Ccsolution/>
        </Solution>
        <Process>
          <Ccprocess/>
        </Process>
        <UserResearch>
          <Ccuserresearch/>
        </UserResearch>
        <Ideation>
          <Ideate/>
        </Ideation>
        <Vision>
          <ProjectVision/>
        </Vision>
        <Challenge>
          <ProjectChallenge/>
        </Challenge>
        <GS>
        <GettingStarted/>
        </GS>
        <Dashboard>
          <Dash/>
        </Dashboard>
        <View>
          <CoinView/>
        </View>
        <Compare>
          <Comparison/>
        </Compare>
      </ProjectOverview>
    </div>
  );
}

export default CCCaseStudy;
