import React,{useState,useEffect} from 'react';
import  Carouselt  from './components/carousel'
import Product from "./components/product";
import Button from "./components/EditeButton";
import Update from './components/Update';
import {Row ,Container} from 'react-bootstrap'
import Faker from'faker'

function App() {
  const[show,setShow]=useState(false)
  const[value,setValue]=useState('')
  const[fImg,setFImg]=useState(Faker.image.image())
  const[secImg,setSecImg]=useState(Faker.image.image())
  const[thrImg,setThrImg]=useState(Faker.image.image())
  const[newImg,setNewImg]=useState('')
  const [carousels, setCarousels] = useState({
    fLabel:'First slide label',
    fLabelDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   
    secLabel:'Second slide label',
    secLabelDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
   
    thrLabel:'Third slide label',
    thrLabelDetails:'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    newLabel:'',
    newLabelDetails:''
    
})  

  function handleChange(newValue) {
    setValue(newValue);
  }
  function carouselChange(target) {
  
    setCarousels({...carousels, [target.name]: target.value})
 
    
  }
  
  
  function carouselFImage(firsImage) {
     setFImg(firsImage)
      console.log(`from app${fImg}`)
    
  }
   
  function carouselSecImage(secondImage) {
   setSecImg(secondImage)
  
}
 
function carouselthrImage(thirdImage) {
setThrImg(thirdImage)

}
function carouselnewImage(newImage) {
   setNewImg(newImage)

}

function showUpdate(sh) {
  setShow(sh)

}

  useEffect(() => {
    if(value != '')
    { document.getElementById('headerTitle').innerHTML=value
      document.getElementById('title').innerHTML=value
  }
  }, [value])
  
  return (
    
    <div className="App">
    
       <Carouselt carousels={carousels} fImg={fImg} secImg={secImg} thrImg={thrImg} newImg={newImg} />
       <div>hi this is  </div>
       <Container className='container'>
        <Row>
            <Product img={Faker.image.image()} product={Faker.company.companyName()} productdetails={Faker.company.catchPhrase()} />
            <Product img={Faker.image.image()}product={Faker.company.companyName()} productdetails={Faker.company.catchPhrase()}/>
            <Product img={Faker.image.image()}product={Faker.company.companyName()} productdetails={Faker.company.catchPhrase()}/>
            <Product img={Faker.image.image()}product={Faker.company.companyName()} productdetails={Faker.company.catchPhrase()}/>
       
            <Product img={Faker.image.image()} product={Faker.company.companyName()} productdetails={Faker.company.catchPhrase()}/>
            <Product img={Faker.image.image()}product={Faker.company.companyName()} productdetails={Faker.company.catchPhrase()}/>
            <Product img={Faker.image.image()}product={Faker.company.companyName()} productdetails={Faker.company.catchPhrase()}/>
            <Product img={Faker.image.image()}product={Faker.company.companyName()} productdetails={Faker.company.catchPhrase()}/>
        </Row>
       </Container>
       <Button showUpdate={showUpdate} value={show}/>
       {show ? <Update value={value} onChange={handleChange} car={carousels} carouselChange={carouselChange} carouselFImage={carouselFImage}
       carouselSecImage={carouselSecImage} carouselthrImage={carouselthrImage} carouselnewImage={carouselnewImage}
       
       />:''}
    </div>
  );
}

export default App;
