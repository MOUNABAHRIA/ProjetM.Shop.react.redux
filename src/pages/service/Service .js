import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import  "../service/Services .css"
import { ServiceData } from './ServiceData'





const Service  = () => {
  return (
    <section >
        <Container>
            <Row className='service'>
                {ServiceData.map((items,index) =>(
                          <Col lg='3' nd='4' key={index}  className='service_item' style={{background:`${items.bg}`}}>
                          <div className='service_item1' >
                              <span > <i className={items.icon}  />
                                  </span>
                          </div>
                          <h3>
                          {items.title}
                          </h3>
                          <p>{items.subtitle}</p>
                      </Col>
                ))}
          
            </Row>
        </Container>
    </section>
  )
}

export default Service 