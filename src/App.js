import React,{useState,useEffect} from 'react';
import  Carouselt  from './components/carousel'
import Product from "./components/product";
import Button from "./components/EditeButton";
import Update from './components/Update';
import {Row ,Container} from 'react-bootstrap'
import Faker from'faker'

function App() {
  const[value,setValue]=useState('')
  function handleChange(newValue) {
    setValue(newValue);
  }

  useEffect(() => {
    if(value != '')
    { document.getElementById('headerTitle').innerHTML=value
      document.getElementById('headerTitle').innerHTML=value
  }
  }, [value])
  
  return (
    
    <div className="App">
    
       <Carouselt />
       <div>hi this is {value}</div>
       <Container className='container'>
        <Row>
            <Product img={Faker.image.image()} />
            <Product img={Faker.image.image()} />
            <Product img={Faker.image.image()} />
            <Product img={Faker.image.image()} />
       
            <Product img={Faker.image.image()} />
            <Product img={Faker.image.image()} />
            <Product img={Faker.image.image()} />
            <Product img={Faker.image.image()} />
        </Row>
       </Container>
       <Button />
       <Update value={value} onChange={handleChange}/>
    </div>
  );
}

export default App;
