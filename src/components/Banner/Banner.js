import React from 'react';
import { Carousel } from 'react-bootstrap';
import first from "../../images/1.jpeg";
import second from "../../images/2.jpg";
import third from "../../images/3.jpg";
const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={600}
                        src={first}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='text-white'>Welcome To our Site</h3>
                        <p className='text-black fw-bold'>Here you find all type of bikes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={600}
                        src={second}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>All types of Bikes</h3>
                        <p>We stock all good bikes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={600}
                        src={third}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        {/* <h3></h3> */}
                        <p className='text-black'>We try to satisfied our customers.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;