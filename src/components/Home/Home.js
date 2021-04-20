import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import Testimonials from '../Testimonials/Testimonials';
import MakeAppionment from './MakeAppionment/MakeAppionment';
import OurNews from './OurNews/OurNews';
import ServiceInfo from './ServiceInfo/ServiceInfo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ServiceInfo></ServiceInfo>
            <Services></Services>
            <OurNews></OurNews>
            <Testimonials></Testimonials>
            <MakeAppionment></MakeAppionment>
            <Footer></Footer>

            
        </div>
    );
};

export default Home;