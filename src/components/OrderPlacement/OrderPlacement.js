import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { UserContext } from '../../App';
import './OrderPlacement.css'
import PaymentProcess from './PaymentProcess/PaymentProcess';
import Dashboard from '../Dashboard/Dashboard/Dashboard';
const OrderPlacement = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => {

    setServiceData(data);
  };


  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
  const { _id } = useParams();
  const [details, setDetails] = useState({});
  console.log(_id);
  useEffect(() => {

    fetch('http://localhost:5055/services/' + _id)
      .then(res => res.json())
      .then(data => setDetails(data));

  }, [])
  const [serviceData, setServiceData] = useState(null)

  const handlePaymentSuccess = paymentID => {

    console.log('submitted')
    const newBook = {
      UserEmail,
      UserNames,
      price,
      service: serviceData,
      paymentID,
      name,
      orderTime: new Date()
    };
    console.log(newBook);
    fetch('http://localhost:5055/addBook', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBook)
    })

      .then(res => res.json())
      .then(data => {
        console.log(data);

        if (data.value === null) {

          alert('please select service')
        }

        else if (data) {

          alert(' Your Order Have Placed Successfully')
        }

      });



  }




  const { price, name } = details
  const UserEmail = loggedInUser.email;
  const UserNames = loggedInUser.name;
  //  const handleBooking = () => {

  //    console.log('submitted')
  //    const newBook = {  UserEmail, UserNames, price, name, orderTime: new Date() };
  //    console.log(newBook);
  //    fetch('http://localhost:5055/addBook', {

  //     method: 'POST',
  //      headers: {
  //        'Content-Type': 'application/json'
  //      },
  //      body: JSON.stringify(newBook)
  //    })

  //    .then(res => res.json())
  //      .then(data => {
  //        console.log(data);

  //       if (data.value === null) {

  //          alert('please select service')
  //        }

  //        else if (data) {

  //          alert(' Your Order Have Placed Successfully')
  //        }
  // });


  // };



  return (

    <Row>

      <Col sm={4}>

        <Dashboard></Dashboard>

      </Col>


      <Col sm={8}>
        <div style={{ marginTop: '3%', marginLeft: '1%' }}>

          <h1 style={{ textAlign: 'center' }}>Booking <span style={{ color: 'red' }}> ..... </span></h1>
          < div className="col-md-7" style={{ display: serviceData ? 'none' : 'block' }}>
            <form style={{ backgroundColor: 'whiteSmoke', width: '500px' }} className="book-form" onSubmit={handleSubmit(onSubmit)}>

              <input name="name" defaultValue={UserNames} ref={register({ required: true })} placeholder="Your Name" />
              {errors.name && <span className="error">Name is required</span>}


              <input name="email" defaultValue={UserEmail} ref={register({ required: true })} placeholder="Your Email" />
              {errors.email && <span className="error">Email is required</span>}


              <input name="service" defaultValue={details.name} ref={register({ required: true })} placeholder="Your service" />
              {errors.email && <span className="error">Service is required</span>}

              <br></br>
              <h4>Your Service Charge will be : {details.price}<span style={{ color: 'red' }}>$</span> </h4>

              {<input style={{ backgroundColor: 'red', color: 'white' }} type="submit" />}
              {/* <input onClick={handleBooking} style={{ backgroundColor: 'red', color: 'white' }} type="submit" /> */}

            </form>
          </div>

          <div className="col-md-5 " style={{ display: serviceData ? 'block' : 'none' }} >
            <h1>Pay With..<span style={{ color: 'blue', fontSize: '25px' }} >visa </span></h1>
            <PaymentProcess handlePayment={handlePaymentSuccess} ></PaymentProcess>

          </div>

        </div>
      </Col>
    </Row>

  );
};

export default OrderPlacement;
