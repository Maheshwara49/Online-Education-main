// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import logo from '../assets/Logo1.png';
const Footer = () => {
  return (
    <>
       <footer className="py-5 footer w-100">
        <Container>
            <Row className='align-items-center'>
                <Col lg={4} md={4} xs={12}>
                    <div className="logo">
                        <img src={logo} alt="" className='w-50'/>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, molestiae dolor mollitia nemo excepturi nobis eum! Praesentium, aliquam doloremque. Non dicta repellat nulla quod, ipsa et nemo a illum qui!</p>
                    </div>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12} >
                    <ul className="footer-list">
                        <h5>Company</h5>
                        <li>About Us</li>
                        <li>How to work</li>
                        <li>Popular Courses</li>
                        <li>Services</li>
                    </ul>
                </Col>
                <Col lg={2} md={4} sm={6} xs={12} >
                    <div className="footer-list mb-5">
                        <h5>Courses</h5>
                        <li>Categoris</li>
                        <li>Offline Courses</li>
                        <li> Video Courses</li>
                    </div>
                </Col>

                <Col lg={2} md={4} sm={6} xs={12} >
                    <ul className="footer-list">
                        <h5>Support</h5>
                        <li>FAQ</li>
                        <li>Help Center</li>
                        <li>Career</li>
                        <li>Privacy</li>
                    </ul>
                </Col>

                <Col lg={2} md={4} sm={6} xs={12} >
                    <ul className="footer-list">
                    <h5>Contect Info</h5>
                        <li>+9696969696</li>
                        <li>email@emsil.com</li>
                        <li>something,somestreet,somecity,somestate,xyz</li>
                    </ul>
                </Col>

            </Row>
        </Container>
        <div className="text-center border-top">
            <p className='mt-1'>Copyright @{new Date().getFullYear()} Maheshwara49</p>
        </div>
       </footer>
    </>
  )
}

export default Footer