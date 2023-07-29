import React from 'react'
import { FormGroup} from 'reactstrap'
import { Container,Row,Form ,Col} from 'reactstrap'
import {FaInstagram} from "react-icons/fa"
import {FaInvision} from "react-icons/fa"
import {FaCaretSquareRight} from "react-icons/fa"
import '../contact/Contact.css'
import Carousel from 'react-bootstrap/Carousel';
import {FaFacebookSquare, FaMapMarkerAlt,FaPhoneSquareAlt,FaUserCircle,FaAt} from "react-icons/fa"



const ContactUs = () => {
  return (
    
    <commonSection title="checkout">
   
    <section>
    <div>
      
       
          <img
            className=" w-100 img-fluid"
            src="https://www.ormsdirect.co.za/cdn/shop/files/orms-contact-us-page-banner.jpg?v=1679404858&width=1400"
            alt="First slide"
          />
         
     
      
    </div>
     <Container>
       <Row>
         <Col className='contacts '>
        
         <Form className='us' >
         <FormGroup  className='contactus moins'> 
          < FaUserCircle size={20}/><br/><span>M.Shop</span>
          <br/>
          < FaAt size={20}/> <span>sales-bellville@orms.co.za</span>
          <br/>
          < FaPhoneSquareAlt size={20}/><span>021 910 1380
</span>
          <br/>
          < FaCaretSquareRight size={20}/> <span>https://www.youtube.com/user/M.shop</span>
         </FormGroup >
         
         <FormGroup className='contactus plus'>
         < FaMapMarkerAlt size={20}/> <span>TygerValley Chambers 2
27 Willie Van Schoor Avenue
Bellville, Cape Town, 7530
South Africa</span>
         <br/>
         < FaInvision size={20}/> <span>https://www.linkden.com/M.Shop/</span>
         
         <br/>
         < FaFacebookSquare size={20}/> <span>https://www.facebook.com/M.Shop/</span>
         <br/>
         < FaInstagram size={20}/><span>https://www.instagram.com/M.Shop/</span>
         </FormGroup>
       
         </Form>
         </Col>
       </Row>
     </Container>
    </section>
   </commonSection>
   
   
  )
}

export default ContactUs