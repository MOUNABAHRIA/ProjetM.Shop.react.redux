import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './Auth.css'
import loginImg from './istockphoto-1281150061-612x612.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const Reset = () => {
  return (
   <div>
        <div>
      <img
        className=" w-100 img-fluid"
        src="https://www.indy100.com/media-library/the-95-best-online-clothing-stores-in-the-us.png?id=31833781&width=1200&height=600&coordinates=0%2C87%2C0%2C45"
        alt="First slide"
      />
      
     </div>
     <h2>Reset password</h2>
     <section className='login'>
    <div>
     <img src={loginImg} alt="Login" className='image'/>
     </div>
 
    <Form className='login1'>
        <h2>Reset password</h2>
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      
    <Button>Reset password</Button>
    <p>
        <Link to="/login">*Login</Link>
       
    </p>
    <p> <Link to="/register">*Register</Link></p>
 
    </Form>
    
    </section>
    </div>
  );
  
}

export default Reset