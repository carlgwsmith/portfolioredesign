import React, {useState} from 'react';
import Carl from './Carl'
import Problemsolution from './ProblemSolution';
import ProcessContent from './Process';
import {ProjectOverview, Header, ProjName, Role, Problem, Process, ProcessContainer} from './Lelements'
import { Button } from '../ProjectElements';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';

const Loaniccasestudy = () => {
  const [hover, setHover] = useState(false)
  const imageUrl = process.env.PUBLIC_URL + '/images/LoanicHeader.jpg'

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <div>
      <ProjectOverview>
        <Header img={imageUrl}>
          <ProjName>Loanic</ProjName>
          (Coming Soon)
          <HeroBtnWrapper>
          <Button href="#" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
            See Project {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
        </Header>
        <Role>
          <Carl/>
        </Role>
        <Problem>
          <Problemsolution/>
        </Problem>
        <Process>
        <ProcessContent/>
      </Process>
      </ProjectOverview>
    </div>
  );
}

export default Loaniccasestudy;
