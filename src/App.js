import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import  Carouselt  from './components/carousel'
import Product from "./components/product";
import Button from "./components/EditeButton";
import {Row ,Container} from 'react-bootstrap'
import Faker from'faker'

function App() {
  return (
    
    <div className="App">
    
       <Carouselt />
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
    </div>
  );
}

export default App;
