import React from "react";
import Faker from 'faker'
import { Card } from "react-bootstrap";
import {Button} from "react-bootstrap";
import { Link } from "react-router-dom";
const Product =({img,product,productdetails})=>{
 return(
     <>
        <Card style={{ maxWidth: '18rem' }} className='product col-sm-12 col-md-4 col-lg-3'>
        <Card.Img variant="top" src={img} />
        <Card.Body>
            <Card.Title>{product}</Card.Title>
            <Card.Text>
            {productdetails}
            </Card.Text>
            <Link to='/blogs'><Button variant="primary">Go somewhere</Button></Link>
        </Card.Body>
        </Card>
     </>
 )
}
export default Product