import React from 'react';

import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Brands from '../Brands/Brands';
import Contact from '../Contact/Contact';
import Counter from '../Counter/Counter';
import Feature from '../Feature/Feature';




const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <Brands></Brands>
            <Counter></Counter>
            <Feature></Feature>
            <Contact></Contact>
        </div>
    );
};

export default Home;