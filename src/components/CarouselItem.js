import React from "react";

import {Carousel} from 'react-bootstrap'
const CarouselItem = ({img,label,labelDetails})=>{

  return(
      <>
    {(img!=='' || label !==''  || labelDetails !=='')  ?
   <div className='item'>
     <img src={img} />:''
     <div className='text'>
      <h3>{label}</h3>
     <p >{labelDetails}</p> 
     </div>
   </div>
    : ''}
  </>
    )
}
export  default CarouselItem