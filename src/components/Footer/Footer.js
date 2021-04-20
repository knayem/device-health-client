
import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import FooterCol from './FooterCol/FooterCol';

const Footer = () => {
    const noNamed = [
        { name: "Emergency Device Service", link: "/emergency" },
        { name: "Customer Service", link: "/Service" },
        { name: "Customer Support", link: "/support" },
    ]
    const ourAddress = [
        { name: "Mirpur ", link: "//google.com/map" },
        { name: "Mirpur-10 ", link: "//google.com/map" },

    ]


    const services = [
        { name: "Smart Phone Repair", link: "/emergency" },
        { name: "Tablet & iPhone Repair ", link: "/checkup" },
        { name: "Desktop & Laptop", link: "/personal-treatment" },
        { name: "LCD & LED TV Repair", link: "/tooth-extract" },
        { name: "Game System Repair", link: "/checkup" },

    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"."} menuItems={noNamed} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faCoffee} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faCoffee} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faCoffee} /></a></li>
                        </ul>
                        <div className="mt-5">
                            
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">

                    <h1 style={{ color: 'navy' }}>
                        LET'S STAY IN TUCH</h1>
                    <h6 style={{ textAlign: 'center' }}>Get updates on our works, specials and more</h6>
                    <h6 style={{ textAlign: 'center', color: 'whiteSmoke' }}></h6>
                    <p>DeviceHealth.com | Terms of Use and Sale |Privacy Policy</p>

                </div>
            </div>
        </footer>

    );
};

export default Footer;




{/* <h1 style={{color:'honeydew'}}>
LET'S STAY IN TUCH
</h1>
<h6 style={{textAlign: 'center'}}>Get updates on our works, specials and more
</h6>
<h6 style={{textAlign: 'center',color: 'whiteSmoke'}}></h6>
<p>sporting.com | Terms of Use and Sale |Privacy Policy</p> */}