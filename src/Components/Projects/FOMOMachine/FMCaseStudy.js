import React, {useState} from 'react';
import { ProjectOverview, Header, Vision, Tools, Mock} from './FMElements';
import { Button } from '../ProjectElements';
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';
import {IoLogoVue} from 'react-icons/io5'
import {SiVueDotJs, SiBootstrap} from 'react-icons/si'
import {RiRouteFill} from 'react-icons/ri'
import {AiOutlineAreaChart} from 'react-icons/ai'

const FMCaseStudy = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const projName = {
    fontSize: "4em",
    marginTop:"1em",
    color:"#138bf3"
  }
  const visionP = {
    fontSize:"1.4em",
    lineHeight:"1.6em",
    margin: "0px 0px 15px 0px"
  }
  const toolName = {
    fontSize: "2em",
    paddingLeft: "15px",
    borderLeft: "1px solid",
    marginLeft: "15px"
  }
  const imageUrl = process.env.PUBLIC_URL + '/images/HeaderFM.jpg'

  return (
    <div>
      <ProjectOverview>
        <Header img={imageUrl}>
        <h1 style={projName}>FOMO Machine</h1>
          <HeroBtnWrapper>
            <Button href="https://carlgwsmith.github.io/FOMOMachineVue" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
            See Project {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
          </HeroBtnWrapper>
        </Header>
        <Vision>
        <Mock src={process.env.PUBLIC_URL + '/images/FMmockup.png'} ></Mock>
          <p style={visionP}>FOMOMachine's concept is to play on the fear of missing out in investors, the FOMO. The application takes input of a stock ticker and an amount, the inital investment amount or the FOMO amount. The application then returns data of the earliest price as well as the percentage increase from today's price and the amount of money the investor could have made. The application then uses ChartJS to show the pricing history and a fetch to a news API to return the latest data on this particular stock.</p>
          <p style={visionP}>FOMOMachine is pretty much a humorous application that pokes fun and encourages the average Joe to start investing today or else they will miss out.</p>
        </Vision>
        <Tools>
          <h2>Tools Used:</h2>
          <p><IoLogoVue color="limegreen" size="2em"/><span style={toolName}>VueJs</span></p>
          <p><SiVueDotJs color="limegreen" size="2em"/><span style={toolName}>VueX</span></p>
          <p><RiRouteFill color="#959595" size="2em"/><span style={toolName}>VueRouter</span></p>
          <p><SiBootstrap color="#061179" size="2em"/><span style={toolName}>Bootstrap 5</span></p>
          <p><AiOutlineAreaChart color="#ff6161" size="2em"/><span style={toolName}>ChartJS</span></p>
        </Tools>
      </ProjectOverview>
    </div>
  );
}

export default FMCaseStudy;
