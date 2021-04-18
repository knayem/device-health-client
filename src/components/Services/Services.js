import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import ShowServices from '../ShowServices/ShowServices';
const Services = () => {

    const [services, setServices] = useState([]);
    console.log(services);
    useEffect(() => {



        fetch('http://localhost:5055/services')
            .then(res => res.json())
            .then(data => setServices(data))


    }, [])

    return (
        <div>

            <h1 style={{color: 'blue', textAlign: 'center'}}>Our Services</h1>

            {


                services.length === 0 && <ReactBootStrap.Spinner animation="border" variant="warning" />
            }

            {


                services.map(service => <ShowServices service={service}></ShowServices>)



            }



        </div>
    );
};

export default Services;