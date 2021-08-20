import React, {useState} from 'react';
import ProjectChallenge from './ProjectChallenge';
import ProjectVision from './ProjectVision';
import GettingStarted from './GettingStarted';
import Dash from './Dash';
import CoinView from './CoinView';
import { ProjectOverview, Header, Vision, Challenge, GS, Dashboard, View} from './CCelements';
import { Button } from '../ProjectElements';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';

const CCCaseStudy = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const projName = {
    fontSize: "4em",
    marginTop:"1em",
    color:"#fff"
  }
  return (
    <div>
      <ProjectOverview>
        <Header>
          <h1 style={projName}>CryptoCompare</h1>
          <HeroBtnWrapper>
          <Button href="https://carlgwsmith.github.io/crypto-compare" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
            See Project {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
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
        <Dashboard>
          <Dash/>
        </Dashboard>
        <View>
          <CoinView/>
        </View>
      </ProjectOverview>
    </div>
  );
}

export default CCCaseStudy;
