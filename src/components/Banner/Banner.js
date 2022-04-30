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
                        <p className='text-black'>Here you find all type of bikes.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={600}
                        src={second}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100" height={600}
                        src={third}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;