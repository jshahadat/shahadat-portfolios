import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/sidebar.png";
import garage from '../../img/garage.jpg'
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          {/* <img src={Sidebar} alt="" /> */}

          <div className='body'>
            <div className="flip-card-container">
              <div className="flip-card">

                <div className="card-front">
                  <figure className='figure'>
                    <div className="img-bg"></div>
                    <img className='img' src={garage} alt="" />
                    <figcaption>Garage Theatre</figcaption>
                  </figure>
                  <ul className='ul'>
                    <li className='li'>It is a second hand car selling website.</li>
                    <li className='li'>Users can sign up and log in to this website using Google as a seller or buyer.</li>
                    <li className='li'>Technology: React.js, React-Router, React Tailwind, NodeJS, ExpressJS, MongoDB</li>
                  </ul>
                </div>
                <div className="card-back">
                  <figure className='figure'>
                    <div className="img-bg"></div>
                    <img src={garage} alt="Brohm Lake" />
                  </figure>
                  <label htmlFor="booking-modal" className='details  text-white'>Details</label>
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={Ecommerce} alt="" /> */}

          <div className='body'>
            <div className="flip-card-container">
              <div className="flip-card">

                <div className="card-front">
                  <figure className='figure'>
                    <div className="img-bg"></div>
                    <img className='img' src='' alt="" />
                    <figcaption>Flash Focus Frame</figcaption>
                  </figure>
                  <ul className='ul'>
                    <li className='li'>It is a website that offers several services related to photography.</li>
                    <li className='li'>Using Google or Github, users may register and log in to this website.</li>
                    <li className='li'>Technology: React.js, React-Router, React Tailwind,React Photo, NodeJS, ExpressJS, MongoDB</li>
                  </ul>
                </div>
                <div className="card-back">
                  <figure className='figure'>
                    <div className="img-bg"></div>
                    <img src='' alt="Brohm Lake" />
                  </figure>
                  {/* <label htmlFor="booking-modal" className='button  text-white' onClick={() => setBookingProduct(product)}>Book Appointment</label> */}
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={MusicApp} alt="" /> */}

          <div className='body'>
            <div className="flip-card-container">
              <div className="flip-card">

                <div className="card-front">
                  <figure className='figure'>
                    <div className="img-bg"></div>
                    <img className='img' src='' alt="" />
                    <figcaption>Perfect Learn</figcaption>
                  </figure>
                  <ul className='ul'>
                    <li className='li' >It is a software related online training website for civil engineers.</li>
                    <li className='li'>Using Google or Github, users may register and log in to this website.</li>
                    <li className='li'>Technology: React.js, React-Router, React Bootstrap, React pdf, NodeJS, ExpressJS</li>
                  </ul>
                </div>
                <div className="card-back">
                  <figure className='figure'>
                    <div className="img-bg"></div>
                    <img src='' alt="Brohm Lake" />
                  </figure>
                  {/* <label htmlFor="booking-modal" className='button  text-white' onClick={() => setBookingProduct(product)}>Book Appointment</label> */}
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </SwiperSlide>
        <SwiperSlide>
          {/* <img src={HOC} alt="" /> */}

          <div className='body'>
            <div className="flip-card-container">
              <div className="flip-card">

                <div className="card-front">
                  <figure className='figure'>
                    <div className="img-bg"></div>
                    <img className='img' src='https://ibb.co/KVLPhRx' alt="" />
                    <figcaption>Garage Theatre</figcaption>
                  </figure>
                  <ul className='ul'>
                    <li className='li' > </li>
                    <li className='li'>Resale Price </li>
                    <li className='li'>Original Price :</li>
                    <li className='li'>years of use :</li>
                    <li className='li'>Locatin :</li>
                  </ul>
                </div>
                <div className="card-back">
                  <figure className='figure'>
                    <div className="img-bg"></div>
                    <img src='https://ibb.co/KVLPhRx' alt="Brohm Lake" />
                  </figure>
                  <label htmlFor="booking-modal" className='details text-white'>Details</label>
                  <div className="design-container">
                    <span className="design design--1"></span>
                    <span className="design design--2"></span>
                    <span className="design design--3"></span>
                    <span className="design design--4"></span>
                    <span className="design design--5"></span>
                    <span className="design design--6"></span>
                    <span className="design design--7"></span>
                    <span className="design design--8"></span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
