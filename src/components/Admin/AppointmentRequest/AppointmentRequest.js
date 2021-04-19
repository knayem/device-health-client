
import React, { useEffect, useState } from 'react';

import { Card } from 'react-bootstrap';


const AppointmentRequest = () => {

    const [appointments, setAppointments] = useState([])
    

    useEffect(() => {

         fetch('http://localhost:5055/appointment')

            .then(res => res.json())
            .then(data =>  setAppointments(data));


    }, [])

    return (
        <div style={{textAlign: 'center'}}>
          
          
            {
                appointments.map(appointments=> <ul>
                    
                    <Card>
  <Card.Body> <h3> Service Needed:{appointments.name}</h3> <h5>Price:{appointments.customerName}</h5> <h5>Price:{appointments.customerEmail}</h5>
   <h3>Problem:{appointments.description}</h3> </Card.Body>

</Card>

                    

                </ul>)


            }




        </div>
    );
};

export default AppointmentRequest;
