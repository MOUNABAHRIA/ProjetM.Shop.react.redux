import React from 'react'
import '../carts/carts .css'
import  CommonSection from '../../Components/productCart/CommonSection'
import { Container,Row,Col } from 'reactstrap'
import tdImg from '../../images/arm-chair-01.jpg'
import {motion } from 'framer-motion'
import { cartActions } from '../../redux/cartSlice'
import cartSlice from '../../redux/cartSlice'
import {FaTrashAlt} from "react-icons/fa"
import {  useSelector } from 'react-redux/es/hooks/useSelector'
import {  Link } from "react-router-dom"
import { useDispatch } from 'react-redux'
import { Button } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel';




const Carts = () => {
   const cartItems = useSelector((state) => state.cartSlice.cartItems)
   console.log(cartItems);
   const totalAmount=useSelector((state)=>state.cartSlice.totalAmount)

   
  return (
    <>
      
      {/* <div>
      <img
        className=" w-100 img-fluid"
        src="https://img.freepik.com/free-vector/shopping-time-banner-with-realistic-map-cart-gift-bags-vector-illustration_548887-120.jpg?w=826&t=st=1690408580~exp=1690409180~hmac=068d1a7de2638f4226c34f2d68bba28844038783e384fd5eb606d84ede2f44ad"
        alt="First slide"
      />
   s
    </div> */}
    <div className='timer_count'></div>
    <CommonSection title="Shopping Cart"/>
    <section>

    <Container>
      <Row>
        <Col lg='9'>
          {
          cartItems.length === 0 ? (<h2 className='fs-4 text-center'>No item added to the cart</h2>) :( 
         
          <table className='table borderd'>
            <thead>
              <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Delete</th>
              </tr>
            </thead>
           <tbody>
            {
              cartItems.map((item,index)=>(
            
            <Tr item={item} key={index} />)
           
)}
          </tbody>
          </table>
           )}
        
        </Col>
          <Col lg="3"  >
            <section className='Subtotal'> 
            <div >
              <h6>
                Subtotal
              </h6>
              <span>${totalAmount}</span>
            </div>
            <p>Taxes and shopping will calculate in checkout</p>
            <div className='BTN1'>   
            <button  className='bnts'> <Link to='/shop'>Continue shopping </Link></button>
            <button className='bnt1'><Link to='/checkout'>checkout </Link></button>
          
             
            
              
            </div>
            </section>
          </Col>

      </Row>
    </Container>
    </section>

    </>
  );
};
const  Tr =({item})=>{
  const dispatch= useDispatch();
  const deleteProduct=()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return(
  <tr>
  <td> <img src={item.imgUrl}  alt='im'/></td>
  <td>{item.productName}</td>
  <td>{item.price}</td>
  <td>{item.quantity}</td>
  <td><FaTrashAlt onClick={deleteProduct} size={20}/></td>
  </tr>
  );
};

export default Carts