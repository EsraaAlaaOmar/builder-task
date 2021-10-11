import React,{useState} from "react";

const TitleUpdate=()=>{
    const [formData, setFormData] = useState({
        name: '',
     
    })    
    const onSubmit=e=>setFormData({...formData, [e.target.name]: e.target.value})
return(
    <>
    
     <div className='updatedItem'>
     <label>Title</label>
          <br />
          <input type='text' name='tile' value={formData.name} />
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