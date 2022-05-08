import React from 'react';
import './Loading.css'
import Loader from '../../images/loader.gif';

const Loading = () => {
    return (
        <div className='d-flex mt-5 justify-content-center align-items-center'>
            <img className='loaderimg' src={Loader} alt="" />
            <h2>Loading ....</h2>
        </div>
    );
};

export default Loading;