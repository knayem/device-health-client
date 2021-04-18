import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import MakeAppionment from './MakeAppionment/MakeAppionment';
import ServiceInfo from './ServiceInfo/ServiceInfo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceInfo></ServiceInfo>
            <Services></Services>
            <Testimonials></Testimonials>
            <MakeAppionment></MakeAppionment>
            <Footer></Footer>

            
        </div>
    );
};

export default Home;