import React from 'react';
import Typewriter from 'typewriter-effect';
import { HeroContainer, HeroH1, HeroSpan } from './BannerElements';

const Banner = () => {
  return (
    <div>
      <HeroContainer>
        {/* <HeroImg></HeroImg> */}
        <HeroH1>Carl G.W. Smith is a <Typewriter
        options={{
          strings: ['developer', 'designer', 'musician', 'girldad'],
          autoStart: true,
          loop: true,
        }}
        /> focused on creating digital experiences... <HeroSpan>especially for fintech.</HeroSpan></HeroH1>
      </HeroContainer>
    </div>
  );
}

export default Banner;
