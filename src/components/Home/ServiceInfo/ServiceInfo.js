import React from 'react';

import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';




const serviceData = [
    {
        title: 'Opening Hours',
        description: 'Monday-Wednesday(11AM–9PM),Tuesday Closed',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'MirPur-10,Dhaka ',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+8801314521452',
        icon: faPhone,
        background: 'primary'
    }
]


const ServiceInfo = () => {
    return (
        <section className="d-flex justify-content-center " style={{marginBottom:'10px'}}>
        <div className="w-75 row">
            {
                serviceData.map(info => <InfoCard info={info} key={info.title}></InfoCard >)
            }
        </div>
    </section>
    );
};

export default ServiceInfo;