import React, {useState} from 'react';
import { ProjectOverview, Header} from './FMElements';
import { Button } from '../ProjectElements';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';

const FMCaseStudy = () => {
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
        <h1 style={projName}>FOMOMachine</h1>
          <HeroBtnWrapper>
            <Button href="https://carlgwsmith.github.io/FOMOMachineVue" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
            See Project {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
          </HeroBtnWrapper>
        </Header>
      </ProjectOverview>
      <h1>FOMOMachine</h1>
    </div>
  );
}

export default FMCaseStudy;
