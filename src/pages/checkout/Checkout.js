import React from 'react'
import { FormGroup } from 'reactstrap'
import { Container,Row,Col , Form} from 'reactstrap'
import "../checkout/Checkout.css"

const Checkout = () => {
  return (
    
     <section>
     <div>
      <img
        className=" w-100 img-fluid"
        src="https://www.indy100.com/media-library/the-95-best-online-clothing-stores-in-the-us.png?id=31833781&width=1200&height=600&coordinates=0%2C87%2C0%2C45"
        alt="First slide"
      />
      
     </div>
     
      <Container>
        <Row>
          <Col>
          <h6 className="information">Billing information</h6>
          <Form className="information1" >
          <FormGroup className="info">
            <input type='text' placeholder='enter your name'/>
          </FormGroup>
          <FormGroup className="info">
            <input type='email' placeholder='enter your email'/>
          </FormGroup>
          <FormGroup className="info">
            <input type='number' placeholder='phone number'/>
          </FormGroup>
          <FormGroup className="info">
            <input type='text' placeholder='sterrt adresse'/>
          </FormGroup>
          <FormGroup className="info">
            <input type='text' placeholder='City'/>
          </FormGroup>
          <FormGroup className="info">
            <input type='text' placeholder='postal Code '/>
          </FormGroup>
          <FormGroup className="info">
            <input type='text' placeholder='Country'/>
          </FormGroup>
          </Form>
          </Col>
          <Col>
          <div className='checkout-cart'>
            <h6 className='checkouts'>total Qantity:<span>0</span></h6>
            <h6 className='checkouts'>SubTotal:<span>$120</span></h6>
            <h6 className='checkouts'>Shopping:<span>$120</span></h6>
            <h4 >Free Shopping</h4>
            <h6 className='checkouts'> total Cost:<span>£120</span></h6>
            <button className='checkoutt'>Place in order</button>
          </div>
          
          </Col>
        </Row>
      </Container>
     </section>
  
    
  )
}

export default Checkout