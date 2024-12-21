// eslint-disable-next-line no-unused-vars
import React from 'react';
import img from '../assets/OBJECTS.png';
import jigsaw from '../assets/online-test.png';
import exam from '../assets/exam1.png'
import certificate from '../assets/certification1.png';
const Home = () => {
  const cardData = [
    {
      image: jigsaw,
      title: 'Fun Learning Experience',
      text: 'Country to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      image: exam,
      title: 'Fun Learning Experience',
      text: 'Country to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
    {
      image: certificate,
      title: 'Fun Learning Experience',
      text: 'Country to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.',
    },
  ];
  return (

    <>
       <section className='back' style={{ position: 'relative', zIndex: 1 }}>
        <div className="container text-center">
          <div className="row">
            <div className="col-md-6 text-start">
              <h1 className='fw-bolder'>The <span className='warning'>Smart</span> </h1>
              <h1> Choice For <span className='warning'>Future</span></h1>
              <p>Bookstore is a global training provider based across the India that  <br />specialisesin accredited and bespoke training courses. We crush the...</p>
              <div className="pt-5">
                <div className="position-relative w-75">
                  <input className="border-0 rounded-pill w-100 py-3 ps-4 pe-5" type="text" name="search" placeholder="Eg: India" />
                  <button type="submit" className="btncolor btn rounded-pill py-2 px-4 position-absolute top-0 end-0 me-2" style={{ marginTop: '7px' }}>Search</button>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <img src={img} className="img-fluid" alt="Responsive" />
            </div>
          </div>
          <div className="row">

            <div className="card backcolor">
              <div className="card-body d-flex flex-column flex-md-row">
                {cardData.map((card, index) => (
                  <>
                    <div className="d-flex align-items-center" key={index}>
                      <div className="flex-shrink-0">
                        <img src={card.image} className="img-fluid imgp " alt="Card" />
                      </div>
                      <div className="ms-md-3 mt-md-0">
                        <h5 className="card-title fw-bold text-start mt-4 px-2">{card.title}</h5>
                        <p className="card-text text-secondary text-start line px-2">{card.text}</p>
                      </div>

                    </div>
                  </>
                ))}
              </div>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}

export default Home;
