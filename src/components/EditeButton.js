import React from "react";
import { Link } from "react-router-dom";
const Button=({showUpdate,value})=>{
    return(
        <>
        <div className='editeButton container'>
       
         <button onClick={(e)=>showUpdate(!value)}>
         
                Edite builder
           
         </button> 
            
        </div>    
        </>
    )
}
export default Button