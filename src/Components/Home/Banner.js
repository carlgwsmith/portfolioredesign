import React, {useState} from 'react';
import Typewriter from 'typewriter-effect';
import { HeroContainer, HeroContent, HeroSocial, HeroImg, HeroH1, HeroSpan, HeroBtnWrapper, ArrowForward, ArrowRight, Behance, Dribble, Linkedin} from './BannerElements';
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
        <HeroSocial>
            <a href="https://www.behance.net/carlvskansas" target="_blank"><Behance/></a>
            <a href="https://dribbble.com/carlvskansas" target="_blank"><Dribble/></a>
            <a href="https://www.linkedin.com/in/carl-gw-smith/" target="_blank"><Linkedin/></a>
        </HeroSocial>
        <HeroH1>Carl G.W. Smith is a <span style={{color:'#ffb80b'}}>d</span><Typewriter
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