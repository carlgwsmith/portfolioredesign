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
import Comparison from './Compare'
import { ProjectOverview, Role, Header, Vision, Challenge, GS, Dashboard, View, Compare, Problem, Solution, Process, UserResearch} from './CCelements';
import { Button } from '../ProjectElements';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';

const CCCaseStudy = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const projName = {
    fontSize: "4rem",
    marginTop:"1em",
    fontWeight: "400",
    color:"#fff"
  }
  const imageUrl = process.env.PUBLIC_URL + '/images/CCheaderbg.jpg'
  return (
    <div>
      <ProjectOverview>
        <Header img={imageUrl}>
          <h1 style={projName}>CryptoCompare</h1>
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
