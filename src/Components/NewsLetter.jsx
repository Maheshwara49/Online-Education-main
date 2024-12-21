// eslint-disable-next-line no-unused-vars
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import newsletter from '../assets/Group355(2).png'
const NewsLetter = () => {
    return (
        <section className='news'>
        <Container className='px-5 mb-5 mt-5 position-relative'>
            <Row className="justify-content-center align-items-center">
                <Col>
                    <img src={newsletter} alt="" className="d-block mx-auto" />
                    <div className="position-absolute top-0 start-0 d-flex flex-column justify-content-center align-items-center" style={{ zIndex: 1, width: "100%", height: "100%" }}>
                        <h1 className='text-white text-center'>Subcribe to our Newsletter</h1>
                        <p className='text-white text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, sed.</p>
                        <div className="position-relative w-50">
                            <input className="border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" name="search" placeholder="Email Address" />
                            <button type="submit" className="btnnews btn rounded-pill py-2 px-5 position-absolute top-0 end-0 me-2 " style={{ marginTop: '7px' }}>Send</button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
        </section>

    )
}

export default NewsLetter