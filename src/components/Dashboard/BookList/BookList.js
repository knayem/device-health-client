
import React, { useContext, useEffect, useState } from 'react';

import { Card } from 'react-bootstrap';
import { UserContext } from '../../../App';

 const BookList= () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [booking, setBooking] = useState([])
    const email = loggedInUser.email;

    useEffect(() => {

         fetch(`http://localhost:5055/books/${email} `)

            .then(res => res.json())
            .then(data => setBooking(data));


    }, [])

    return (
        <div style={{textAlign: 'center'}}>
            <h2>Your :{booking.length} Orders</h2>
          
            {
                booking.map(booking => <ul>
                    
                    <Card>
  <Card.Body> <h3>{booking.name}</h3> <h4>Taken Service: {booking.season}</h4> <h5>Price:{booking.price}$</h5>
  <h4>Buyer's Email:{booking.UserNames} <span style={{color: 'green'}}> {booking.UserEmail} </span></h4> <h3>Order at:{booking.orderTime}</h3> </Card.Body>

</Card>

                    

                </ul>)


            }




        </div>
    );
};

export default BookList;