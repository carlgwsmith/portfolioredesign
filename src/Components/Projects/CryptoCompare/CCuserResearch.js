import React, {useState} from 'react';
import { QuoteBox, URContainer, ROverview, RBlockQuotes1, RBlockQuotes2, RBlockQuotes3, Persona1, Persona2, JourneyMap, JourneyContainer } from './CCelements';
import Persona from './Persona1';
import Lightbox from 'react-image-lightbox';
import {GrUser} from 'react-icons/gr'
const Ccuserresearch = () => {
  const images = [
    "/images/CCJourneyMap.jpg"
  ];
  

  const [isOpen, setOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)

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
    <div>
     <URContainer>
       <ROverview>
       <h2><GrUser/> User Research</h2>
       <p>The differences between cryptocurrencies matter to traders because they give vital clues as to how supply and demand for each coin may change over time, in turn influencing market prices and how cryptocurrencies are traded.</p>
       </ROverview>
       <RBlockQuotes1>
         <QuoteBox>
         <p style={quoteText}><span style={quotation}>"</span>The top 10 global cryptocurrency exchanges account for 79% of daily average trade volume. The exchanges, Venus, HitBTC, Bitcoin.com, Changelly, Binance, Upbit, Huobi Global, HBTC, OKEx, and VCC Exchange represent $250.8 billion of trade volume per day."</p>
         </QuoteBox>
         <p style={quoteattr}>- CoinMarketCap</p>
       </RBlockQuotes1>
       <RBlockQuotes2>
       <QuoteBox>
         <p style={quoteText}><span style={quotation}>"</span>24% of respondents said they don’t understand how cryptocurrency works at all. A slightly higher percentage reported understanding how cryptocurrency works a little bit. Just 22% claimed to understand how it works very well."</p>
         </QuoteBox>
         <p style={quoteattr}>- Motley Fool</p>
       </RBlockQuotes2>
       <RBlockQuotes3>
       <QuoteBox>
       <p style={quoteText}><span style={quotation}>"</span>Investors aren’t completely confident in crypto, however. More than half of the investors surveyed agree that their biggest concern is losing their money due to financial volatility."</p>
       </QuoteBox>
         <p style={quoteattr}>- CNBC</p>
       </RBlockQuotes3>
       <Persona1>
         <Persona/>
       </Persona1>
       <Persona2>
         <JourneyContainer>
          <h3 style={{paddingLeft:"20px"}}>James' Journey Map</h3>
          <JourneyMap>
          <img src={process.env.PUBLIC_URL + '/images/CCJourneyMap.jpg'} onClick={() => setOpen(true)} style={{width:"100%"}}></img>
          </JourneyMap>
          {isOpen && (
          <Lightbox
          mainSrc={images[photoIndex]}
          onCloseRequest={() => setOpen(false)}
          />
          )}
         </JourneyContainer>
       </Persona2>
     </URContainer>
    </div>
    
  );
}

export default Ccuserresearch;
