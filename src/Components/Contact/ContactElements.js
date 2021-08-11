import styled from "styled-components";

export const ContactContainer = styled.div `
display: grid; 
grid-template-columns: 2fr 2fr; 
grid-template-rows: 2fr 2fr; 
gap: 0px 0px;
padding:30px;
grid-template-areas: 
  "Side-A Side-B"
  "Side-A Side-B"
  "Side-A Side-B"; 
`
export const SideA = styled.div`
grid-area: Side-A;
text-align:left;
`
export const SideB = styled.div`
grid-area: Side-B;
text-align:left;
`