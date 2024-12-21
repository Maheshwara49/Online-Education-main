// eslint-disable-next-line no-unused-vars
import React from 'react';
import img from '../assets/OBJECTS(1).png';
import hearts from '../assets/hearts1.png';
import jigsaw from '../assets/jigsaw1.png';
import ing1 from '../assets/Group.png';
import ing2 from '../assets/Group(2).png';
import ing3 from '../assets/Group(3).png';
import ing4 from '../assets/Group(1).png';
import ing5 from '../assets/Group(4).png';
import ing6 from '../assets/Group(5).png';
const PrimiumLearning = () => {
    return (
        <section className='primium' style={{ position: 'relative', zIndex: 1 }}>
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-6">
                        <img src={img} className="img-fluid w-50" alt="Responsive" />

                        <div className="abs-icon abs-icon-1">
                            <img src={ing2} alt="" className='w-50' />
                        </div>

                        <div className="abs-icon abs-icon-2">
                            <img src={ing1} alt="" className='w-50' />
                        </div>

                        <div className="abs-icon abs-icon-3">
                            <img src={ing3} alt="" className='w-50' />
                        </div>
                        <div className="abs-icon abs-icon-4">
                            <img src={ing4} alt="" className='w-50' />
                        </div>

                        <div className="abs-icon abs-icon-5">
                            <img src={ing5} alt="img-5" className='w-50' />
                        </div>
                        <div className="abs-icon abs-icon-6">
                            <img src={ing6} alt="img-4" className='w-50' />
                        </div>
                    </div>
                    <div className="col-md-6 text-start">
                        <h1 className='fw-bolder primiumpage'>Premeium <span className='warning'>Learning</span>Advantages</h1>
                        <div className="d-flex align-items-center mb-3">
                            <div className="flex-shrink-0 px-3 imgback">
                                <img src={hearts} className="img-fluid" alt="Card" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <div>
                                    <h5 className="card-title fw-bold">Easily Accessible</h5>
                                    <p className="card-text text-secondary fw-bold">
                                        Learning Will fell Very Comfortable With Coueslab.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="flex-shrink-0 imgback">
                                <img src={jigsaw} className="img-fluid " alt="Card" />
                            </div>
                            <div className="flex-grow-1 ms-3">
                                <div>
                                    <h5 className="card-title fw-bold">Fun Learning expe</h5>
                                    <p className="card-text text-secondary fw-bold">
                                        Learning Will fell Very Comfortable With Coueslab.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PrimiumLearning;
