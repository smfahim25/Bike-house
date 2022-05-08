import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'
import first from '../../images/1.jpg';
import second from '../../images/2.jpg';

const Banner = () => {
    return (
        <div className='banner-carousel'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100 pic"
                        src={first}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>All Brand new bikes in one place</h3>
                        <p className='text-white'>You will find here all types of and all brands bike. You can explore many care and gather knowledge.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 pic"
                        src={second}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Luxuarious collections and Brands</h3>
                        <p className='text-black'>We have the world's most popular and expensives branded bikes. Just Have a look </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div >
    );
};

export default Banner;