import React from 'react'
import { Button, Col } from 'reactstrap'
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../redux/cartSlice';
import { toast} from 'react-toastify';
import "./ProductCarts.css"
import {inputText} from '../../Components/header/Header'



const ProductCart = ({item}) => {
  const dispatch= useDispatch();
  const AddToCart=({inputText})=>{
    dispatch(cartActions.addItem({
      id : item.id,
      productName : item.productName,
      price : item.price,
      imgUrl : item.imgUrl
    }));
    toast.success("product added successfuly") 
     
    
  };
  return (
    <Col lg='3' md='4'>
    <div className='product_item'>
        <div>
             <motion.img whileHover={{scale: 0.5}} src={item.imgUrl} alt='imgpro'/> 
        </div>
        <h3 className='product_name'>
           <Link to={`/shop/${item.id}`}> {item.productName}</Link>
        </h3>
        <Link className="link1" to={`/productDetails/${item.id}`}>  <div>
            <Button  className="link2"  > Details</Button>
        </div> </Link>
        <span>{item.category}</span>
        <div className='product_cart_bottom'>
            <span className='price'>${item.price}</span>
        </div>
        <div className='product_cart_bottom'>
            <Button onClick={AddToCart}  className="link3" >Add to cart</Button>
        </div>
      



    </div>
    </Col>
  )
}

export default ProductCart