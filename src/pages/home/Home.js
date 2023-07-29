import React, { useEffect, useState } from 'react'
import Sliderr from '../../Components/slider/Sliderr'
import Service from '../service/Service '
import ProductList from '../../Components/productCart/ProductList'
import products  from '../../data/products'
import { Container ,Col, Row, Button} from 'reactstrap'
import counterImg from '../../images/arm-chair-02.jpg'
import { Link } from 'react-router-dom';
import Clock from '../../Components/clock/Clock'
import "../home/Home.css"


const Home = () => {
  const [data, setDta] = useState(products)
  const year = new Date().getFullYear();
  const [filteredTrendingproducts, setFilteredTrendingproducts]=useState([])
  const [bestSalesproducts, setBestSalesproducts]=useState([])
  const [mobileProduts, setMobileProduts]=useState([])
  const [wirelessProduts,  setWirelessProduts]=useState([])
  const [filteredPopularproducts,  setFilteredPopularproducts]=useState([])
  useEffect(()=>{
    const filteredTrendingproducts=products.filter((item)=>item.category==='chair')
  setFilteredTrendingproducts(filteredTrendingproducts)
  const bestSalesproducts=products.filter((item)=>item.category==='sofa')
  setBestSalesproducts(bestSalesproducts)
  const mobileProduts=products.filter((item)=>item.category==='mobile')
  setMobileProduts(mobileProduts)
  const wirelessProduts=products.filter((item)=>item.category==='wireless')
  setWirelessProduts(wirelessProduts)
  const filteredPopularproducts=products.filter((item)=>item.category==='watch')
  setFilteredPopularproducts(filteredPopularproducts)
  },[])
 
  return (
    <div>
      <Sliderr/> 
      
      <section>
      <Container>
        <Row>
        <Service/>
        </Row>
    </Container>
    </section>
     
      <section>
      <Container>
        <Row>
        <Col  className="text_center" lg='12' >
            <h2 className='section_title'> Beste chair</h2>
        </Col>
        <ProductList data={filteredTrendingproducts}/>
        </Row>
    </Container>
    </section>
      <section>
      <Container>
        <Row>
        <Col  className="text_center" lg='12' >
            <h2 className='section_title'> Beste Sales</h2>
        </Col>
        <ProductList data={bestSalesproducts}/>
        </Row>
    </Container>
    </section>
    <section className='timer_count'>
      <Container>
        <Row>
        <Col  className="text_center" lg='6' md='6'>
          <div>
            <h2 className='section_title'> Limited Offers</h2>
            <h3 className='section_titles'>Quality Armchair</h3>
            </div>
            <Clock/>
            <Button className='buy_btn'>
              <Link to='/shop'>Visit Store</Link>
            </Button>
        </Col>
       <Col lg='6' md='6' className='text_end'>
        <img src={counterImg} alt=''/>
       </Col>
        </Row>
    </Container>
    </section>

    <section>
      <Container className='new_arrivals'>
        <Row>
        <Col  className="text_center" lg='12' >
            <h2 className='section_title'> New Arrivals</h2>
        </Col>
        <ProductList data={mobileProduts}/>
        <ProductList data={ wirelessProduts}/>
       
        </Row>
    </Container>
    </section>
    <section>
      <Container className='new_arrivals'>
        <Row>
        <Col  className="text_center" lg='12' >
            <h2 className='section_title'> Popular in category</h2>
        </Col>
        <ProductList data={filteredPopularproducts}/>
        
       
        </Row>
    </Container>
    </section>
    </div>
  )
}

export default Home