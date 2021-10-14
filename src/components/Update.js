import React,{useState,useEffect} from "react";
import axios from 'axios'
import Faker from'faker'
const Update =(props)=>{
    const [ImageSelector, setImageSelector] = useState('')
    const [shape, setShape] = useState('')
    const [color, setColor] = useState('')
    const [background, setBackground] = useState('')

    const [fImCar, setFImCar] = useState('')
    const [secImCar, setSecImCar] = useState('')
    const [thrImCar, setThrImCar] = useState('')
    const [newImCar, setNewImCar] = useState('')
    const[imageCarSelector,setImageCarSelector]= useState({
        fIm:'',
        secIm:'',
        thrIm:'',
        newIm:''
    })
    const { fIm, secIm,thrIm,newIm}=imageCarSelector
    
    
    
    // carousels states
    
    const [imageUrl, setImageImageUrl] = useState('')
    const [imageAlt, setImageimageAlt] = useState('')
    
    //change title &logo
    const onChange=e=>{
        
        props.onChange(e.target.value);
        
    }
    const uploadImage=()=>{
        
        const formData = new FormData()
        formData.append('file',ImageSelector)
        formData.append('upload_preset','ozqur3ms')
        axios.post('https://api.cloudinary.com/v1_1/djrm6ygpv/image/upload',formData).then((res)=>{
            console.log(res)
            setImageImageUrl(res.data.secure_url)
            setImageimageAlt(`An image of ${res.data.original_filename}`)

          
        })
        
    }

    const logoShape=(e)=>{
      setShape(e.target.value)
     
    }

    const titleColor=(e)=>{
        
        setColor(e.target.value)
    }

    const backgroundColor=(e)=>{
        
        setBackground(e.target.value)
    }
    //change carousels

     const carouselChange=(e)=>{
        props.carouselChange(e.target)
     }
     //changeImages

    const uploadFImageCar = ()=>{
        
        const formData = new FormData()
        formData.append('file',fIm)
        formData.append('upload_preset','ozqur3ms')
        axios.post('https://api.cloudinary.com/v1_1/djrm6ygpv/image/upload',formData).then((res)=>{
            console.log(res)
            //setImageCar(res.data.secure_url)
        
            setFImCar(res.data.secure_url)
            console.log(`this is ${fImCar}`)
           


          
        })
        
    }
    const uploadSecImageCar = ()=>{
        
        const formData = new FormData()
        formData.append('file',secIm)
        formData.append('upload_preset','ozqur3ms')
        axios.post('https://api.cloudinary.com/v1_1/djrm6ygpv/image/upload',formData).then((res)=>{
            console.log(res)
            setSecImCar(res.data.secure_url)
        
            


          
        })
        
    }
    const uploadThImageCar = ()=>{
        
        const formData = new FormData()
        formData.append('file',thrIm)
        formData.append('upload_preset','ozqur3ms')
        axios.post('https://api.cloudinary.com/v1_1/djrm6ygpv/image/upload',formData).then((res)=>{
            console.log(res)
            setThrImCar(res.data.secure_url)
        
           


          
        })
        
    }
    const uploadNewImageCar = ()=>{
        
        const formData = new FormData()
        formData.append('file',newIm)
        formData.append('upload_preset','ozqur3ms')
        axios.post('https://api.cloudinary.com/v1_1/djrm6ygpv/image/upload',formData).then((res)=>{
            console.log(res)
            setNewImCar(res.data.secure_url)
        
          


          
        })
        
    }

  

    
     useEffect(() => { document.getElementById("headerTitle").style.color = color;
     document.getElementById("pageIcon").style.borderRadius=shape
     document.getElementById("header").style.backgroundColor=background
     document.getElementById("icon").style.borderRadius=shape},[color,shape,background])
    useEffect(() => {
       
        if(imageUrl!==''){
        document.getElementById("pageIcon").setAttribute("href", imageUrl)
        document.getElementById("icon").setAttribute("src", imageUrl)  
             
        }

      }, [imageUrl])



      useEffect(() => {
      
        
        uploadFImageCar()
       
      }, [fIm])
      useEffect(() => {
        if(fImCar !== ''){
        props.carouselFImage(fImCar)
        
        }
      }, [fImCar])
//sec 
      useEffect(() => {
      
        
        uploadSecImageCar()
       
      }, [secIm])
      useEffect(() => {
        if(secImCar !== ''){
        props.carouselSecImage(secImCar)
        
        }
      }, [secImCar])
      useEffect(() => {
        if(thrImCar !== ''){
        props.carouselthrImage(thrImCar)
        
        }
      }, [thrImCar])

      //third
      useEffect(() => {
      
        
        uploadThImageCar()
       
      }, [thrIm])

      //new

      useEffect(() => {
      
        
        uploadNewImageCar()
       
      }, [newIm])


      useEffect(() => {
      if(newImCar !== ''){
        props.carouselnewImage(newImCar)
      }
       
      }, [newImCar])


      
    
    const onSubmit= e=>{
        e.preventDefault()
      
    }


  return(
      <>
      {/* start update title &logo */}
      <form className='update container' onSubmit={e=>onSubmit(e)} >
          
     <div className='box'>
         <h5>Update Title and Logo</h5>
        <div className='inputDiv'>
         <label>Title</label>
          <br />
          <input type='text' name='title' value={props.value} onChange={e=>onChange(e)} />
          <br />
          </div>
         <div className='inputDiv'>
          <label>Logo Image</label>
          <br />
         
          
          <input type="file"  onChange={e=>{setImageSelector(e.target.files[0])}} />
          <br />
          <button onClick={uploadImage}>Upload photo</button>
          </div>
          
    
         <div className='inputDiv'> 
          <label>Logo shape</label>
          <br />
          <select  className="shapeandcolor" onChange={(e)=>logoShape(e)}>
                <option value="0px">square</option>
                <option value="50%">circle</option>
                <option value="25px">rounded</option>
                
         </select>
         </div>
         <div className='row'>
         <div className='inputDiv col'> 
          <label>Title Color</label>
          <br />
          
          <input className="shapeandcolor "style={{width: '85px'}} type='color'  onChange={(e)=>titleColor(e)} />
          <br />
          
         </div> 
         <div className='inputDiv col'> 
          <label>Background Color</label>
          <br />
          
          <input className="shapeandcolor "style={{width: '85px'}} type='color'  onChange={(e)=>backgroundColor(e)} />
          <br />
          
         </div> 
     </div> 
    </div>    
           {/* End update title &logo */}
           {/* start carousels */}
          <h1>carousel</h1>
          {/* first carousel*/}
         <div className='box'>
          <h3>First carousel</h3>
          <div className='inputDiv'>
          <label>First slide label</label>
          <br />
          <input type='text' name='fLabel' onChange={e=>carouselChange(e)}/>
          </div>
          <div className='inputDiv'>
          <label>First slide label details </label>
          <br />
          <input type='text' name='fLabelDetails'onChange={e=>carouselChange(e)} />
          </div>
         
           
            <br />
            <input type="file"  onChange={e=>{setImageCarSelector( {...imageCarSelector,fIm:(e.target.files[0])});}} />
        
          
          <button name='fImCar' onClick={uploadFImageCar}>Upload photo</button>
         </div> 
          
          {/* Second carousel*/}
          <div className='box'>
          <h3>Second carousel</h3>
          <div className='inputDiv'>
          <label>Second slide label</label>
          <br />
          <input type='text' name='secLabel' onChange={e=>carouselChange(e)} />
          </div>
          
          <div className='inputDiv'>
          <label>Second slide label details</label>
          <br />
          <input type='text' name='secLabelDetails' onChange={e=>carouselChange(e)}/>
          </div>
          
          
          <br />
          <input type="file"   onChange={e=>{setImageCarSelector( {...imageCarSelector,secIm:(e.target.files[0])});}} />
          <button name='secImCar' onClick={uploadSecImageCar}>Upload photo</button>
          </div>
          {/* Third carousel*/}
          <div className='box'>
          <h3>Third carousel</h3>
          <div className='inputDiv'>
          <label>Third slide label</label>
          <br />
          <input type='text' name='thrLabel' onChange={e=>carouselChange(e)}/>
          </div>
          <br />
          <div className='inputDiv'>
          <label>Third slide label details</label>
          <br />
          <input type='text' name='thrLabelDetails'onChange={e=>carouselChange(e)} />
          <br />
          </div>
         
          <br />
          <input type="file" onChange={e=>{setImageCarSelector( {...imageCarSelector,thrIm:(e.target.files[0])});}} />
          <button name='thrImCar' onClick={uploadThImageCar}>Upload photo</button>
          <br />
         </div>
          {/* New carousel*/}
          <div className='box'>
          <h3>New carousel</h3>
          <div className='inputDiv'>
          <label>New slide label</label>
          <br />
          <input type='text'  name='newLabel'onChange={e=>carouselChange(e)} />
          <br />
          </div>
          <div className='inputDiv'>
          <label>New slide label details</label>
          <br />
          <input type='text'  name='newLabelDetails'onChange={e=>carouselChange(e)}  />
         </div>
          <br />
          <input type="file" onChange={e=>{setImageCarSelector( {...imageCarSelector,newIm:(e.target.files[0])});}} />
          <button name='newImCar' onClick={uploadNewImageCar}>Upload photo</button>
          <br />

          </div>
          {/* end carousels */}

      </form>

      </>
  )  
}
export default Update