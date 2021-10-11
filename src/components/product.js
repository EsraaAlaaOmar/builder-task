import React from "react";
import Faker from 'faker'
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
const Product =({img})=>{
 return(
     <>
        <Card style={{ maxWidth: '18rem' }} className='product col-sm-12 col-md-4 col-lg-3'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
            </Card.Text>
            <Link to='/blogs'><Button variant="primary">Go somewhere</Button></Link>
        </Card.Body>
        </Card>
     </>
 )
}
export default Product