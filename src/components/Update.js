import React,{useState,useEffect} from "react";
import axios from 'axios'
import TitleUpdate from "./tileUpdate";
import { Image } from "cloudinary-react";
const Update =(props)=>{
    const [ImageSelector, setImageSelector] = useState('')
    // carousels states
    const [carousels, setCarousels] = useState({
        fLabel:'First slide label',
        fLabelDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        fImg:'',
        secLabel:'Second slide label',
        secLabelDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        secImg:'',
        thrLabel:'Third slide label',
        thrLabelDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        thrImg:'',

    })  
    const [imageUrl, setImageImageUrl] = useState('')
    const [imageAlt, setImageimageAlt] = useState('')
    

    const onChange=e=>{
        //setFormData({...formData, [e.target.name]: e.target.value})
        props.onChange(e.target.value);
    }
    const uploadImage=(e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('file',ImageSelector)
        formData.append('upload_preset','ozqur3ms')
        axios.post('https://api.cloudinary.com/v1_1/djrm6ygpv/image/upload',formData).then((res)=>{
            console.log(res)
            setImageImageUrl(res.data.secure_url)
            setImageimageAlt(`An image of ${res.data.original_filename}`)

          
        })
        
    }
    useEffect(() => {
        if(imageUrl!=''){
        document.getElementById("pageIcon").setAttribute("href", imageUrl)
        document.getElementById("icon").setAttribute("src", imageUrl)  
        }
      }, [imageUrl])
    
    const onSubmit= e=>{
        e.preventDefault()
      
    }


  return(
      <>
      {/* start update title &logo */}
      <form className='update' onSubmit={e=>onSubmit(e)} >
          
      <div className='updatedItem'>
     <label>Title</label>
          <br />
          <input type='text' name='title' value={props.value} onChange={e=>onChange(e)} />
          <br />
          <label>Logo</label>
          <br />
         
          
          <input type="file"  onChange={e=>{setImageSelector(e.target.files[0])}} />
          <br />
          <button onClick={uploadImage}>Upload photo</button>
          
          
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
           {/* End update title &logo */}
           {/* start carousels */}
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
          
          {/* end carousels */}

      </form>

      </>
  )  
}
export default Update