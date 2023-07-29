import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
// import { Container, Row, Col } from 'react-toastify'
// import  CommonSection from '../../Components/productCart/CommonSection'
import Card from "react-bootstrap/Card";
import { Button } from 'reactstrap';
import "../productDetails/ProductDetails.css"
import Carousel from 'react-bootstrap/Carousel';


const ProductDetails = ({item}) => {
    const x= useParams();
    
    let filteredArray = item.filter((el)=> el.id === x.id);
    console.log('filteredArray=',filteredArray);
    const navigate=useNavigate(); 
  return (
    <>
        <div>
      <img
        className=" w-100 img-fluid"
        src="https://www.indy100.com/media-library/the-95-best-online-clothing-stores-in-the-us.png?id=31833781&width=1200&height=600&coordinates=0%2C87%2C0%2C45"
        alt="First slide"
      />
      <Carousel.Caption className='contact'>
      
        <p>Even with the end of the pandemic in sight,<br/> online shopping has become the new norm. Fortunately, the options are endless, <br/>as many brands have prioritized their online presences and policies amid the pandemic.</p>
      </Carousel.Caption>
     </div>
    <div className='cardex1'>
      {filteredArray.map((item)=>{return (
         
      <Card
        className="cardex"
        style={{
        
        }}
      >
        <Card.Img variant="top" src={item.imgUrl} className='img'/>
        <Card.Body>
         
          <Card.Title className='title'>{item.productName}</Card.Title>

          
          <Card.Text className='details'>
            {item.price}
            {item.description}
             {item.review}
          </Card.Text><Button variant="primary" onClick={()=>navigate('/')} className='button' >Shop</Button>
          {/* <Button variant="primary">Go somewhere</Button> */}
        </Card.Body>
      </Card>)
      })}
    </div>
    </>

  )
}

export default ProductDetails