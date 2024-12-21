// eslint-disable-next-line no-unused-vars
import React from 'react'
import { Container, Card } from 'react-bootstrap';
import Slider from "react-slick";
import { tesimalsData } from '../Data/Data';
const Tesimals = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <>
            <Container className='w-100 testimal mt-5'>
                <div className="text-center">
                    <h1>What Students Say</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, voluptatem!</p>
                </div>
                <div className="slider-container h-100">
                    <Slider {...settings} >
                        {
                            tesimalsData.map(({ img, description, name, profesion }, index) => (
                                <>
                                    <Container className="py-5 h-100" >
                                        <Card className='shadow p-3 mb-5 bg-body-tertiary rounded h-100' key={index}>
                                            <Card.Body>
                                                <blockquote className="icon mb-0" >
                                                    <p className="mb-4 text-secondary">{description}</p>
                                                    <div className=" d-flex align-items-center">
                                                        <img className="rounded-circle me-3 img-fluid " style={{ width: "50px" }} src={img} alt="" />
                                                        <div className="info">
                                                            <h6 className="mb-1 fw-bold">{name}</h6>
                                                            <p className="mb-0 text-secondary">{profesion}</p>
                                                        </div>
                                                    </div>
                                                </blockquote>

                                            </Card.Body>
                                        </Card>
                                    </Container>


                                </>
                            ))
                        }
                    </Slider>
                </div>
            </Container>
        </>
    )
}

export default Tesimals