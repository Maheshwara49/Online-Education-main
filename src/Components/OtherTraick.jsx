// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from 'react-bootstrap/Container';
import { Row,Card } from 'react-bootstrap';
import {taickgirls} from '../Data/Data';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
const OtherTraick = () => {
  return (
    <>
        <Container>
            <div className="text-center">
                <h1>Our Trainers</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam qui minima similique dolor.</p>
            </div>
            <Row>
                {
                    taickgirls.map(({img,title,professor,profession},index)=>(
                        <div className="col-md-4 col-lg-4 mt-2 mb-5" key={index}>
                            <Card>
                            <Card.Img variant="top" src={img} className='mt-3 px-2'/>
                                <Card.Body>
                                    <div className="mx-auto">
                                        <h5 className="fw-bold">{title}</h5>
                                        <Card.Title className='text-body-secondary fs-6 mt-2 fw-bold'>{professor}</Card.Title>
                                    </div>
                                    <div className="mt-2">
                                        <p className="text-body-secondary fs-6 fw-normal">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, voluptate debitis ullam unde amet accusamus.</p>

                                    </div>
                                    <div className="" style={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                                        <div className="" style={{display:'flex', alignItems:'center'}}>
                                            <Card.Title className='fs-5 othertrackcolor'>{profession}</Card.Title>
                                        </div>
                                        <div className="">
                                            <FaInstagram color='red' size={18} style={{margin:"0"}}/>
                                            <FaLinkedin color='blue' size={18} style={{margin:"0"}} className='ms-4' />
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                }
            </Row>
        </Container>
    </>
  )
}

export default OtherTraick