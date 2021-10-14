import React,{useState,useEffect} from "react";
import { Carousel } from  'react-bootstrap';
//import faker from 'faker'
import CarouselItem from './CarouselItem'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Carouselt = ({carousels,fImg,secImg,thrImg,newImg}) => {
let items=[
  {img:fImg,
   label: carousels.fLabel,
   labelDetails:carousels.fLabelDetails
  },
  {
    img:secImg,
    label: carousels.secLabel,
    labelDetails:carousels.secLabelDetails
  },
  {
  img:thrImg,
   label: carousels.thrLabel,
   labelDetails:carousels.thrLabelDetails
  },

]

let newItem={
  img:newImg,
  label: carousels.newLabel,
  labelDetails:  carousels.newLabelDetails
}

 


  items=( [...items, newItem]);



 
const renderedItems= items.map((item,index)=>{
  return(
  <CarouselItem key={index} img={item.img} label={item.label} labelDetails={item.labelDetails}/>
)})

return(
  <>
   <OwlCarousel className='owl-theme' items='2' autoplay dots loop margin={5} nav>
   {renderedItems}
   
   </OwlCarousel>
  
 {/*<Carousel className='carousel'>
  {renderedItems}
 <CarouselItem img={carousels.fImg} label={carousels.fLabel} labelDetails={carousels.fLabelDetails}/>
<CarouselItem  img={carousels.secImg} label={carousels.secLabel} labelDetails={carousels.secLabelDetails}/>
<CarouselItem  img={carousels.thrImg} label={carousels.thrLabel} labelDetails={carousels.thrLabelDetails} />  
  
</Carousel> */}

</>
)
}

export default Carouselt
































/*
const Carouselt = ({carousels}) => {
return(
    <>
 <Carousel className='carousel'>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousels.fImg}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>{carousels.fLabel}</h3>
      <p>{carousels.fLabelDetails}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousels.secImg}
      alt="Second slide"
    />

    <Carousel.Caption>
    <h3>{carousels.secLabel}</h3>
      <p>{carousels.secLabelDetails}</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={carousels.thrImg}
      alt="Third slide"
    />

    <Carousel.Caption>
    <h3>{carousels.thrLabel}</h3>
      <p>{carousels.thrLabelDetails}</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

    </>
)
}
export default Carouselt
*/