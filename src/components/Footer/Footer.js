
import React from 'react';
import './Footer.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



const Footer = () => {
   


    
    return (

        <Container style={{marginTop:'3%' ,backgroundColor:'#00CED1',width:'100%'}}>

            <Row>
                <Col>
                    <div>
                        <h2 style={{color: 'white'}}>Extra Care</h2>
                        <h5>Emergency Device Service</h5>
                        <h5>Customer Service</h5>
                        <h5>Customer Support</h5>

                    </div>


                </Col>

                <Col><div>

                    <h2 style={{color: 'white'}}>services</h2>
                    <h6>Smart Phone Repair</h6>
                    <h6>Tablet & iPhone Repair</h6>
                    <h6>Desktop & Laptop</h6>
                    <h6>LCD & LED TV Repair</h6>
                    <h6>Game System Repair</h6>
                    

                </div></Col>





                <Col>   <div className="copyRight text-center">

                    <h1 style={{ color: 'navy' }}>
                        LET'S STAY IN TUCH</h1>
                    <h6 style={{ textAlign: 'center' }}>Get updates on our works,and more</h6>
                    <h6 style={{ textAlign: 'center', color: 'whiteSmoke' }}></h6>
                    <p>DeviceHealth.com | Terms of Use and Sale |Privacy Policy</p>
                    <p style={{ color: 'Gold' }}>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
                </Col>



            </Row>
        </Container>


    );
};

export default Footer;

