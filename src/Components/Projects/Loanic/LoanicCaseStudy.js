import React, {useState} from 'react';
import Carl from './Carl'
import {ProjectOverview, Header, ProjName, Role} from './Lelements'
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
      </ProjectOverview>
    </div>
  );
}

export default Loaniccasestudy;
