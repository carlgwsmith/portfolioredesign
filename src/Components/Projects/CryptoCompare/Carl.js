import React from 'react'
import { MyRole, CarlContainer, Duration, Responsibility } from './CCelements'
export default function Carl() {

    return (
        <CarlContainer>
            <MyRole>
                <h2 style={{marginBottom:"0px"}}>My Role</h2>
                <p style={{marginTop:"0px"}}>Designer / Developer</p>
            </MyRole>
            <Duration>
            <h2 style={{marginBottom:"0px"}}>Duration</h2>
                <p style={{marginTop:"0px"}}>~3 months</p>
            </Duration>
            <Responsibility>
                <h2 style={{marginBottom:"0px"}}>Responsibilities:</h2>
                <p style={{marginTop:"0px"}}>User research, wireframing, prototyping, and developing</p>
            </Responsibility>
        </CarlContainer>
    )
}
