import React, {useState} from 'react';
import ProjectVision from './ProjectVision';
import ProjectChallenge from './ProjectChallenge';
import GettingStarted from './GettingStarted';
import StyleGuide from './StyleGuide';
import AddAccounts from './AddAccounts';
import Support from './Support';
import CustomModels from './CustomModel';
import { Header, Vision, Challenge, GS, ProjectOverview, Accounts, Help, Models, CustomStyle, Button} from '../ProjectElements';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';

const ISCaseStudy = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const mockup = {
    width:"100%"
  }
  const projName = {
    fontSize: "4em",
    marginTop:"1em",
    color:"#fff"
  }
  const imageUrl = process.env.PUBLIC_URL + '/images/isheaderbg.jpg'
  return (
    <div>
      <ProjectOverview>
      <Header img={imageUrl}>
      <h1 style={projName}>Income Solver</h1>
      <HeroBtnWrapper>
          <Button href="https://www.incomesolver.com" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
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
