import React from "react";
import TitleUpdate from "./tileUpdate";
const Update =()=>{
  return(
      <>
      <form className='update'>
          
          <TitleUpdate />
          
          
          <h1>carousel</h1>
          {/* first carousel*/}
          <h3>First carousel</h3>
          <label>First slide label</label>
          <br />
          <input type='text' name='tile' />
          <br />
          <label>First slide label details</label>
          <br />
          <input type='text' name='tile' />
          <br />
          <label>carousel</label>
          <br />
          <input type="file" name='tile' />
          {/* Second carousel*/}
          <h3>Second carousel</h3>
          <label>Second slide label</label>
          <br />
          <input type='text' name='tile' />
          <br />
          <label>Second slide label details</label>
          <br />
          <input type='text' name='tile' />
          <br />
          <label>carousel</label>
          <br />
          <input type="file" name='tile' />
          {/* Third carousel*/}
          <h3>Third carousel</h3>
          <label>Third slide label</label>
          <br />
          <input type='text' name='tile' />
          <br />
          <label>Third slide label details</label>
          <br />
          <input type='text' name='tile' />
          <br />
          <label>carousel</label>
          <br />
          <input type="file" name='tile' />
          <br />
          <input type="submit" value="Submit" />
          {/* New carousel*/}
          <h3>New carousel</h3>
          <label>New slide label</label>
          <br />
          <input type='text' name='tile' />
          <br />
          <label>New slide label details</label>
          <br />
          <input type='text' name='tile' />
          <br />
          <label>carousel</label>
          <br />
          <input type="file" name='tile' />
          <br />
          <input type="submit" value="Submit" />
          
      </form>

      </>
  )  
}
export default Update