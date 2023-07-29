import React, { useState } from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import styles from './Auth.css'
import loginImg from './istockphoto-1281150061-612x612.jpg'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../auth/Login.css'



const Register = () => {
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [cpassword,setCPassword]= useState("")
    
    const registerUser = (e) =>{
        e.preventDefault();
 if (password!==cpassword) {toast.error("Passwords do not match")}
        console.log(email, password, cpassword);

  
    }
  return (
     
    <>
    <ToastContainer />





   <div>
   <div>
      <img
        className=" w-100 img-fluid"
        src="https://www.indy100.com/media-library/the-95-best-online-clothing-stores-in-the-us.png?id=31833781&width=1200&height=600&coordinates=0%2C87%2C0%2C45"
        alt="First slide"
      />
      
     </div>
     <h2>Register</h2>
     <section  className='login'>
    <div>
     <img src={loginImg} alt="Login" className='image'/>
     </div>
 
    <Form onSubmit={registerUser} className='login1'>
        
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column sm="2">
          Email
        </Form.Label>
        <Col sm="10">
        <Form.Control type="email" placeholder="email"  value={ email} onChange={(e)=>setEmail(e.target.value)}/>
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column sm="2">
          Password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="Password"  value={ password} onChange={(e)=>setPassword(e.target.value)}/>
        </Col>
      </Form.Group>
      
      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword" >
        <Form.Label column sm="2">
          Confirme password
        </Form.Label>
        <Col sm="10">
          <Form.Control type="password" placeholder="  Confirme Password"  value={ cpassword} onChange={(e)=>setCPassword(e.target.value)}/>
        </Col>
      </Form.Group>
    <Button  type='submit'> Register</Button>
    <span className={styles.register}>
        <p>Already an account</p>
        <Link to="/login">Login</Link>
    </span>
    </Form>
    
   
    </section>
    </div>
    </>
  );
  
}

export default Register