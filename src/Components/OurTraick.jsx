// eslint-disable-next-line no-unused-vars
import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import { Row } from 'react-bootstrap';
import { AiTwotoneClockCircle } from "react-icons/ai";
import { FaStar } from 'react-icons/fa';
import { IoVideocamOutline } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { bookgirls } from '../Data/Data';

const OurTraick = () => {
    return (
        <section id='ourtraick'>
        <Container className='w-100'>
            <div className='text-center'>
                <h1>Our Courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <Row>
                {
                    bookgirls.map(({ img, Sales, Cource, hours, title, price }, index) => (
                        <div key={index} className="col-md-4 col-lg-4 mt-2 mb-5">
                            <Card>
                                <Card.Img variant="top" src={img} className='mt-3 px-2' />
                                <Card.Body>
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <Card.Title className="text-body-secondary fs-6">UI/UX Design</Card.Title>
                                        </div>
                                        <div className="">
                                            <FaStar color="gold" size={18} style={{ margin: '0' }} />
                                            <FaStar color="gold" size={18} style={{ margin: '0' }} />
                                            <FaStar color="gold" size={18} style={{ margin: '0' }} />
                                            <FaStar color="gold" size={18} style={{ margin: '0' }} />
                                            <FaStar color="gray" size={18} style={{ margin: '0' }} />
                                        </div>
                                    </div>
                                    <div className="mx-auto" style={{borderBottom:"1px dotted black",paddingBottom:"5px",marginTop:"5px"}} >
                                        <b>{title} <br /><span className='text-warning' style={{ fontSize: '14px' }}>{price}</span></b>
                                    </div>
                                    <div className="mt-2">
                                        <p  className='text-body-secondary fw-bold'>
                                            <AiTwotoneClockCircle size={18} className='me-1' />
                                            {hours}
                                            <span className='fw-bold ms-3'>
                                                <IoVideocamOutline size={18}  className='ms-1 me-1'/>
                                                {Cource}
                                            </span>
                                            <span className='fw-bold ms-3'>
                                                <FiDownload size={18} className='ms-1 me-1' />
                                                {Sales}
                                            </span>
                                        </p>
                                    </div>

                                </Card.Body>
                                <div className="d-flex justify-content-center zindexbutton">
                                    <button className='w-50 rounded-pill bgwarning'>Join Course</button>
                                </div>
                            </Card>
                        </div>
                    ))}
            </Row>
        </Container>
        </section>
    )
}

export default OurTraick;
