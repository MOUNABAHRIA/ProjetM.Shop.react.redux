import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './Auth.css'
import loginImg from './istockphoto-1281150061-612x612.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "../auth/Login.css"



const Login = () => {
  return (
   <div>
        <div>
      <img
        className=" w-100 img-fluid"
        src="https://media.istockphoto.com/id/1306668349/photo/isolated-of-shipping-paper-boxes-inside-blue-shopping-cart-trolley-on-tablet-with-blue.jpg?s=612x612&w=0&k=20&c=K2KVWN5wIkvCKzXqJ9oiwi19cI6J9ITnKiVE_B7mYuk="
        alt="First slide"
      />
      
     </div>
     <h2>Login</h2>
   <  section className='login'>
  
    <div>
     <img src={loginImg} alt="Login" className='image'/>
     </div>
   <div className='login1'>
    <Form>
        
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
          <Form.Control plaintext readOnly defaultValue="email@example.com" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    <Button> Login</Button>
    <div  className='Reset'>
    <Link to="/reset" >Reset Password</Link>
    <p> --or--</p>
    <Button> Login with Google</Button>
    <span className={styles.register}>
        <p>Don't have an account ?</p>
        <Link to="/register">Register</Link>
    </span>
    </div>
  
    
   
    </Form>
    
   
    </div>
    </section> 
    </div>
  );
  
}

export default Login