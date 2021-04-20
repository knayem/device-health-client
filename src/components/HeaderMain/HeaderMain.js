import React from 'react';
import {Button  } from 'react-bootstrap';
import banner from '../../images/bghm.jpg'
const HeaderMain = () => {
    return (
        <main style={{marginTop:'100px'}} className="row ">
        <div className="col-md-4 offset-md-1">
         <h1>Welcome to<br/> DeviceHealth</h1>
         <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolorem eius nihil soluta in porro?</p>
         <Button variant="primary">Connect with us</Button>
         </div>
         <div className="col-md-6  d-flex align-items-center">
         <img src={banner} alt="" className="img-fluid"/>
         </div>

    </main>
    );
};

export default HeaderMain;