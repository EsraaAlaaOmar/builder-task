import React from "react";

const TitleUpdate=()=>{
return(
    <>
     <div className='updatedItem'>
     <label>Title</label>
          <br />
          <input type='text' name='tile' />
          <br />
          <label>Logo</label>
          <br />
          <input type="file" name='tile' />
          <br />
          <label>Title Style</label>
          <br />
          <select name="cars" id="cars">
                <option value="square">square</option>
                <option value="flexible width">flexible width</option>
                <option value="rounded">rounded</option>
                
         </select>
         <br />
          <label>background Color</label>
          <br />
          <input type='color' name='tile' />
          <br />
    </div>    
    </>
)
}
export default TitleUpdate