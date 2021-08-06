import React, {useState} from 'react';
import Typewriter from 'typewriter-effect';
import { HeroContainer, HeroContent, HeroImg, HeroH1, HeroSpan, HeroBtnWrapper, ArrowForward, ArrowRight} from './BannerElements';
import {Button} from './Button'

const Banner = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  return (
    <div>
      <HeroContainer>
        <HeroContent>
        <HeroImg src={process.env.PUBLIC_URL + '/images/carl1.jpg'}></HeroImg>
        <HeroH1>Carl G.W. Smith is a <span style={{color:'#15a2fc'}}>d</span><Typewriter
        options={{
          strings: ['eveloper', 'esigner', 'ad'],
          cursorClassName: 'typewriterCursor',
          wrapperClassName: 'typewriterWrapper',
          autoStart: true,
          loop: true,
        }}
        /> focused on creating digital experiences, <HeroSpan>especially for fintech.</HeroSpan></HeroH1>
        <HeroBtnWrapper>
          <Button to="/Resume" onMouseEnter={onHover} onMouseLeave={onHover}>
            See My Qualifications {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
        </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </div>
  );
}

export default Banner;
