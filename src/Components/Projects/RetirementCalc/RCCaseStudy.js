import React, {useState} from 'react';
import { ProjectOverview, Header, Vision, Tools, Mock} from './RCElements';
import { Button } from '../ProjectElements';
import {IoLogoVue} from 'react-icons/io5'
import {SiVuedotjs, SiBootstrap} from 'react-icons/si'
import {RiRouteFill} from 'react-icons/ri'
import {AiOutlineAreaChart} from 'react-icons/ai'
import { HeroBtnWrapper, ArrowForward, ArrowRight } from '../../Home/BannerElements';

const RCCaseStudy = () => {
  const [hover, setHover] = useState(false)

  const onHover = () => {
    setHover(!hover)
  }
  const projName = {
    fontSize: "4em",
    marginTop:"1em",
    color:"#fff"
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

  const imageUrl = process.env.PUBLIC_URL + '/images/HeaderRC.jpg'
  return (
    <div>
      <ProjectOverview>
        <Header img={imageUrl}>
        <h1 style={projName}>Retirement Calculator</h1>
          <HeroBtnWrapper>
            <Button href="https://carlgwsmith.github.io/retirementcalc" target="_blank" onMouseEnter={onHover} onMouseLeave={onHover}>
            See Project {hover ? <ArrowForward/> : <ArrowRight/>}
          </Button>
          </HeroBtnWrapper>
        </Header>
        <Vision>
        <Mock src={process.env.PUBLIC_URL + '/images/Retirecalcmock.png'} ></Mock>
          <p style={visionP}>Retirement Calculator is a practice in data visualization from input and state management with data. The goal was to, in a few easy steps, return some visually appealing marketable data.
          I chose to do with a wizard to ask simple retirement based questions. Upon completion of the form, I return several charts with pertinent information regarding their inputs.</p>
          <p style={visionP}>The return gives the user the feeling of customization and tailored response. This calculator could be used as a lead generation tool or as an educational piece.</p>
        </Vision>
        <Tools>
          <h2>Tools Used:</h2>
          <p><IoLogoVue color="limegreen" size="2em"/><span style={toolName}>VueJs</span></p>
          <p><SiVuedotjs color="limegreen" size="2em"/><span style={toolName}>VueX</span></p>
          <p><RiRouteFill color="#959595" size="2em"/><span style={toolName}>VueRouter</span></p>
          <p><SiBootstrap color="#061179" size="2em"/><span style={toolName}>Bootstrap 5</span></p>
          <p><AiOutlineAreaChart color="#ff6161" size="2em"/><span style={toolName}>ChartJS</span></p>
        </Tools>
      </ProjectOverview>
    </div>
  );
}

export default RCCaseStudy;
