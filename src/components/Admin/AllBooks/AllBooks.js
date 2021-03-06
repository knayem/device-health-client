

import React, { useEffect, useState } from 'react';

import { Card } from 'react-bootstrap';


const AllBooks = () => {

    const [allBooking, setAllBooking] = useState([])
    

    useEffect(() => {

         fetch('https://protected-sands-24943.herokuapp.com/books')

            .then(res => res.json())
            .then(data => setAllBooking(data));


    }, [])

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Your :{allBooking.length} Orders</h2>
          
            {
                allBooking.map(allBooking => <ul>
                    
                    <Card>
  <Card.Body> <h3> Taken Service:{allBooking.name}</h3> <h5>Price:{allBooking.price}$</h5>
  <h3> paymentID:{allBooking. paymentID}</h3>
  <h3>Order at:{allBooking.orderTime}</h3> </Card.Body>
  

</Card>

                    

                </ul>)


            }




        </div>
    );
};

export default AllBooks;
