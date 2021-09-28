import React, {useRef, useEffect} from 'react'
import { gsap } from "gsap"
import '../Shared/VennStyles.css'

const VennDiagram = () => {

const c1 = useRef();
const c2 = useRef();
const c3 = useRef();
const innerTextClass = useRef();
const textClass1 = useRef();
const textClass2 = useRef();


useEffect(() => {
gsap.set(c1.current, {
    transformOrigin: "150% 150%",
    y:'0',
    x:'-10%',
    opacity: '0',
    scaleX:'0.3',
    scaleY:'0.3'
  })
  
  gsap.set(c2.current, {
    transformOrigin: "0% 150%",
    opacity: '0',
    x:'10%',
    y:'0',
    scaleX:'0.3',
    scaleY:'0.3'
  })
  gsap.set(c3.current, {
    transformOrigin: "-150% -150%",
    opacity: '0',
    x:'0',
    y:'0'
  })
  gsap.set(innerTextClass.current, {
    opacity:'0'
    })
gsap.set(textClass1.current, {
    opacity:'0'
    })
    gsap.set(textClass2.current, {
        opacity:'0'
    })
  
  gsap.to(c1.current, {
    duration:2,
    delay: 1,
    x:'0%',
    opacity:'1',
    scaleX:'1',
    scaleY:'1',
    ease: "circ"
  })
  
  gsap.to(c2.current, {
    delay: 1,
    duration:2,
    x:'0',
    opacity:'1',
    scaleX:'1',
    scaleY:'1',
    ease: "circ"
  })
  gsap.to(textClass1.current,{
    delay: 3.8,
    duration:2,
    opacity:1,
    x:0,
    fill:"white"
  })
  gsap.to(textClass2.current,{
    delay: 3.8,
    duration:2,
    opacity:1,
    x:10,
    fill:"white"
  })
  gsap.to(innerTextClass.current,{
    delay: 4.7,
    duration:2,
    opacity:1,
    fill:"white"
  })
  gsap.to(c3.current,{
    delay: 3.6,
    duration:2,
    opacity:1,
  })

});

const maskStyle = {
    MaskType:"alpha"
}

return (
    <div className="VennContainer">
        <div className="V1">
            <svg viewBox="0 0 701 441" fill="none" xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMinYMin meet" className="svg-content">
            <rect width="701" height="441" fill="transparent"/>
            <circle cx="226" cy="198" r="155" fill="#ff9900" class="c1" ref={c1}/>
            
            <circle cx="424" cy="198" r="155" fill="#2A98FE" class="c2" ref={c2}/>
            <mask id="mask0" style={maskStyle} maskUnits="userSpaceOnUse" x="71" y="43" width="310" height="310">
            <circle cx="226" cy="198" r="155" fill="#0eaf5f" class="c3" ref={c3}/>
            </mask>
            <g mask="url(#mask0)">
            <circle cx="424" cy="198" r="155" fill="#232323"/>
            </g>
            <text 
                className="textClass1"
                ref={textClass2}
                x="25%"
                y="45%"
                dominant-baseline="middle"
                text-anchor="middle"
            >DESIGN
            </text>
            <text 
                className="innerTextClass"
                ref={innerTextClass}
                x="46.5%"
                y="45%"
                dominant-baseline="middle"
                text-anchor="middle"
                >Sweet Spot
            </text>
            <text 
                className="textClass1"
                ref={textClass1}
                x="70%"
                y="45%"
                dominant-baseline="middle"
                text-anchor="middle"
                >DEV
            </text>
            </svg>
        </div>
</div>
)
}

export default VennDiagram;
