import React, {useState} from 'react';
import Lightbox from 'react-image-lightbox';
import {ProjImage, Detail, ProjDetails, ProjImage2, ProjDetails2, ModelsContainer } from './ISelements';
const CustomModels = () => {
  const [isCompareOpen, setCompareOpen] = useState(false)
  const [isBuilderOpen, setBuilderOpen] = useState(false)
  const [isMktplaceOpen, setMktPlaceOpen] = useState(false)
  const [photoIndex, setPhotoIndex] = useState(0)
  const compareImg = '/images/COMPARECustomModel-MockupCrop1.png'
  const mktplaceImg = '/images/ISMarketplaceIteration.png';
  const builderImg = '/images/ISBuilderIteration.png';

  const mockup = {
    width: "100%",
    marginLeft:"auto",
    marginRight:"auto"
  }
  const h2special = {
    margin: "20px 0 20px 0",
    fontSize: "2em",
    color:"#3d3d3d",
    borderBottom:'1px solid #e5e5e5'
  }
  return (
    <div>
      <h2 style={h2special}>Custom Investment Portfolios</h2>
      <ModelsContainer>
      <ProjImage>
        <img src={process.env.PUBLIC_URL + '/images/COMPARECustomModel-MockupCrop1.png'} alt="on boarding comparison" style={mockup} onClick={() => setCompareOpen(true)}></img>
        {isCompareOpen && (
      <Lightbox
        mainSrc={compareImg}
        onCloseRequest={() => setCompareOpen(false)}
      />
    )}
        </ProjImage>
        <ProjDetails>
          <Detail>Investment portfolios are a collection of various holdings that are grouped together and <em>modeled</em> by their risk level. Example: "This group of 10 holdings together equals a risk level of conservative".</Detail>
          <Detail>Many financial advisors use various model portfolios from large investment firms, combine them together, adding in various products or assets or sometimes they even create their own. Portfolio complexity can get very tedious as advisors often create portfolios to change allocation over time. For example when you get older your risk tolerance becomes more conservative so you would ideally want your investment portfolio to change to conservative.</Detail>
        </ProjDetails>
        <ProjImage2>
        <Detail>When a financial advisor wants to build a new portfolio they will enter the portion of the software called the investment builder, this builder allows advisors to create simple or very complex investment portfolios.</Detail>
        <Detail>Products can be added by single years attributed to a dollar amount and change allocation over years as they client's risk preference changes ensure that the advisor is selecting allocation levels to the clients preference for that point in time.</Detail>
        <img src={process.env.PUBLIC_URL + '/images/ISBuilderIteration.png'} alt="on boarding comparison" style={mockup} onClick={() => setBuilderOpen(true)}></img>
        <p style={{textAlign:'center', color:'#8b8b8b'}}>(Iteration of Builder Module)</p>
        {isBuilderOpen && (
      <Lightbox
        mainSrc={builderImg}
        onCloseRequest={() => setBuilderOpen(false)}
      />
    )}
        </ProjImage2>
        <ProjDetails2>
        <Detail>When using the builder the advisor will select "Add product" bringing them into the marketplace which will allow them to select from various investment products.</Detail>
        <Detail>The marketplace is designed to scale as stakeholder close more deals with product providing companies that want to offer their product in the software</Detail>
        <Detail>Once a product is added, it stacks in the builder among other selected investment vehicles.</Detail>
        <img src={process.env.PUBLIC_URL + '/images/ISMarketplaceIteration.png'} alt="on boarding comparison" style={mockup} onClick={() => setMktPlaceOpen(true)}></img>
        <p style={{textAlign:'center', color:'#8b8b8b'}}>(Iteration of Marketplace)</p>
        {isMktplaceOpen && (
      <Lightbox
        mainSrc={mktplaceImg}
        onCloseRequest={() => setMktPlaceOpen(false)}
      />
    )}
        </ProjDetails2>
      </ModelsContainer>
    </div>
  );
}

export default CustomModels;
