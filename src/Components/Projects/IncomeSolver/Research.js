import React from 'react';
import {GrUser} from 'react-icons/gr'
import { URContainer, ROverview, QuoteBox, RBlockQuotes1, RBlockQuotes2, RBlockQuotes3, Persona1 } from './ISelements';
import Persona from './Persona1';

const Research = () => {
  const quotation = {
    fontSize:"2em",
    fontWeight: "600",
    color: "#8b8b88",
  }
  const quoteText={
    // position: "absolute",
    margin:"auto"
  }
  const quoteattr = {
    fontWeight:"600",
    color:"#8b8b88",
    fontSize: "1.2em",
    marginTop: "6px",
    marginLeft:"20px"
  }
  return (
    <URContainer>
      <ROverview>
      <h2><GrUser/> User Research</h2>
      <p>A retirement financial strategy enables you to assess your financial needs and the resources required to support and meet your objectives and to fulfill your families desires up and into retirement. We are taught to visit financial advisors to seek answers to the complicated questions around retirement and using our income most effectively.</p>
      <p> Financial advisors need tools that will calculate the most efficient strategies and present them in an attractive and confident manner before their clients.</p>
      </ROverview>
      <RBlockQuotes1>
         <QuoteBox>
         <p style={quoteText}><span style={quotation}>"</span>Financial advisors can benefit from software aimed at increasing their sales and performance, as well as providing market analytics and insights."</p>
         </QuoteBox>
         <p style={quoteattr}>- Investopedia</p>
       </RBlockQuotes1>
       <RBlockQuotes2>
       <QuoteBox>
         <p style={quoteText}><span style={quotation}>"</span>Financial planning software is an essential tool for any bona fide financial advisor, in a world where projecting the long-term impact of financial trade-offs – necessary for any consumer/client to make a good financial decision – is far too complex to be done without technology to assist."</p>
         </QuoteBox>
         <p style={quoteattr}>- Kitces.com</p>
       </RBlockQuotes2>
       <RBlockQuotes3>
       <QuoteBox>
       <p style={quoteText}><span style={quotation}>"</span>If your software fails to demonstrate something to a client clearly and concisely, you might not have the right conversation with your client in the first place."</p>
       </QuoteBox>
         <p style={quoteattr}>- CFP.net</p>
       </RBlockQuotes3>
       <Persona1>
         <Persona/>
       </Persona1>
    </URContainer>
  );
}

export default Research;
