import React from "react";
import { Link } from "react-router-dom";
const Button=()=>{
    return(
        <>
        <div className='editeButton container'>
       
         <button >
            <Link target="_blank" to='update'>
                Edite builder
            </Link>    
         </button> 
            
        </div>    
        </>
    )
}
export default Button