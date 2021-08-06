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
  background: ${({ primary }) => (primary ? '#fff' : '#f2f2f2')};
  color:#383838;
  border:3px solid #ffb80b;
}
`