import React from 'react';
import Banner from '../Banner/Banner';
import Bikes from '../Bikes/Bikes';
import Contact from '../Contact/Contact';
import Feature from '../Feature/Feature';




const Home = () => {
    // window.location.reload();
    window.onload = function () {
        if (!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }
    return (
        <div>
            <Banner></Banner>
            <Bikes></Bikes>
            <Feature></Feature>
            <Contact></Contact>
        </div>
    );
};

export default Home;