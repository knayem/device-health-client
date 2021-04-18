import React from 'react';

import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'
import InfoCard from '../InfoCard/InfoCard';

const serviceData = [
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'primary'
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10003 USA',
        icon: faMapMarker,
        background: 'dark'
    },
    {
        title: 'Call us now',
        description: '+15697854124',
        icon: faPhone,
        background: 'primary'
    }
]


const ServiceInfo = () => {
    return (
        <section className="d-flex justify-content-center">
        <div className="w-75 row">
            {
                serviceData.map(info => <InfoCard info={info} key={info.title}></InfoCard >)
            }
        </div>
    </section>
    );
};

export default ServiceInfo;