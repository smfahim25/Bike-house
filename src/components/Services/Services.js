import React, { useEffect, useState } from 'react';

import Service from '../Service/Service';
import './Services.css'

const Services = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('fakedb.json')
        .then(res=>res.json())
        .then(data => setServices(data));
    },[])

    // console.log(services);
    return (
        <div className='services'>
             <h1 className='title-text'>My Services</h1>
            <div className="service-container row">
            {
                services?.map(service => <Service
                    key= {service.id}
                    service={service}
                >  
                       
                </Service> )
            }
            </div>
        </div>
    );
};

export default Services;