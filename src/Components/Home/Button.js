import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
text-decoration:none;
border-radius:30px;
font-family: 'Work Sans', sans-serif;
background: ${({ primary }) => (primary ? '#d19709' : '#ffb80b')};
white-space: nowrap;
padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
color: ${({ dark }) => (dark ? '#ffb80b' : '#383838')};
font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
outline:none;
border:3px solid #d19709;
cursor: pointer;
display:flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;

&:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? '#fff' : '#ffe3a0')};
  color:#383838;
  border:3px solid #ffb80b;
}
`

export const ProjButton = styled.p`
padding: 10px 20px;
border: 1px solid #cfcfcf;
text-decoration: none;
background-color: white;
font-size: 14px;
color:#525252;
margin-top:4px;
border-radius:4px;
&:hover {
  transition: all 0.2s ease-in-out;
  background: ${({ primary }) => (primary ? '#fff' : '#ffb80b')};
  color:#ac7300;
  border:1px solid #ffe3a0;
}
`