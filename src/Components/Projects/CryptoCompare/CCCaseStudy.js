import React, {useState} from 'react';
import ProjectChallenge from './ProjectChallenge';
import ProjectVision from './ProjectVision';
import GettingStarted from './GettingStarted';
import Dash from './Dash';
import Carl from './Carl'
import CoinView from './CoinView';
import Comparison from './Compare'
import { ProjectOverview, Role, Header, Vision, Challenge, GS, Dashboard, View, Compare} from './CCelements';
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
    color:"#415b66"
  }
  const imageUrl = process.env.PUBLIC_URL + '/images/ccheaderlitebg.jpg'
  return (
    <div>
      <ProjectOverview>
        <Header img={imageUrl}>
          <h1 style={projName}>Crypto Compare</h1>
          <HeroBtnWrapper>
          <Button href="https://carlgwsmith.github.io/crypto-compare" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
            See Project {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
        </Header>
        <Role>
          <Carl/>
        </Role>
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
