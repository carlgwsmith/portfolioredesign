import React, {useEffect} from 'react'
import { Header, LetterWrap} from './BannerElements'
import { gsap } from "gsap";

const NameHeader = () => {

    useEffect(() => {
        gsap.from(".letter", {rotationY: 36, opacity:0, duration: .8, yPercent: -100, stagger: 0.1, ease:"Expo.easeOut"})
    }, [])


    return (
        <Header>
    <LetterWrap>
      <h1 id="letter" className="letter">C</h1>
      <h1 id="letter" className="letter">A</h1>
      <h1 id="letter" className="letter">R</h1>
      <h1 id="letter" className="letter">L</h1>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <h1 id="letter" className="letter">S</h1>
      <h1 id="letter" className="letter">M</h1>
      <h1 id="letter" className="letter">I</h1>
      <h1 id="letter" className="letter">T</h1>
      <h1 id="letter" className="letter">H</h1>
      </LetterWrap>
    </Header>
    )
}

export default NameHeader;