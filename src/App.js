import Header from "./components/header";
import  Carouselt  from './components/carousel'
import Product from "./components/product";
import {Row ,Container} from 'react-bootstrap'

function App() {
  return (
    <div className="App">
       <Header /> 
       <Carouselt />
       <div >
       <Product />
       <Product />
       </div>
       <Container>
        <Row>
            <Product />
            <Product />
        </Row>
       </Container>
    </div>
  );
}

export default App;
