import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import products from '../../data/products'
import ProductList from '../../Components/productCart/ProductList'
import { Container, Row } from 'reactstrap';
import { Col } from 'react-bootstrap';
import  CommonSection from '../../Components/productCart/CommonSection'
import { Link } from 'react-router-dom';
import "../shop/Shop.css"
import Carousel from 'react-bootstrap/Carousel';

const Shop = () => {
  const [productsData, setProductsData] = useState(products)
  const HandleFilter =(e)=>{
    const filterValue = e.target.value
    if(filterValue ==='sofa'){
      const filtredProduts=products.filter(item=>item.category==='sofa');
      setProductsData(filtredProduts)
    }
    if(filterValue ==='mobile'){
      const filtredProduts=products.filter(item=>item.category==='mobile');
      setProductsData(filtredProduts)
    }
    if(filterValue ==='chair'){
      const filtredProduts=products.filter(item=>item.category==='chair');
      setProductsData(filtredProduts)
    }
    if(filterValue ==='watch'){
      const filtredProduts=products.filter(item=>item.category==='watch');
      setProductsData(filtredProduts)
    }

  }
  const HandleSerch =(e)=>{
    const serchTerm = e.target.value
    
      const serchrdproducts=products.filter(item=>item.productName.toLowerCase().includes(serchTerm.toLowerCase()));
      setProductsData(serchrdproducts)
   

  }

  return(
    
    <>
      <div className='timer_countt' >
    
      
     </div>
     
      <CommonSection title="Products" />
      
      <section>
        <Container >

          <Row className='shop1'>
       
            <Col>
            <div className='filter_widget2'>
             <select onChange={HandleFilter} >
              <option onChange={HandleFilter}  className='filter_widget1'>
                filter by category
              </option>
              <option value='sofa'>Sofa</option>
              <option value='mobile'>Mobile</option>
              <option value='chair'>Chair</option>
              <option value='watch'> Watch</option>
             </select>

            </div>
            </Col>
            <Col>
            <div className='filter_widget2'>
             <select onChange={HandleFilter} className='filter_widget1' >
              <option>
                Short By
              </option>
              <option value='ascending'>Ascending</option>
              <option value='descending'>Descending</option>
             
             </select>

            </div>
            </Col>
            
            <Col >
            <div>
            <Form className="d-flexx"   onChange={HandleSerch}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="Searcha"
              aria-label="Search"
            
            />
            <Button variant="outline-success" >Search</Button>
          </Form>
          </div>
          </Col>
          
          </Row>
        </Container>
      </section>
  
      <section>
        <Container>
          <Row>
         {productsData.length===0 ? <h1>No Products are found!</h1>: <ProductList data={productsData}/>}
          </Row>
          </Container>
          </section>
          
          </>
  
  )
}

export default Shop