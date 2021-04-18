import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {



        fetch('http://localhost:5055/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))


    }, [])
    return (
       
              <div>

<h1 style={{color: 'blue', textAlign: 'center'}}>Testimonials</h1>

{


reviews.length === 0 && <ReactBootStrap.Spinner animation="border" variant="warning" />
}

{
                reviews.map(reviews => <ul>
                    
                    <Card>
  <Card.Header>{reviews.customerName}</Card.Header>
  <Card.Body>
    <Card.Title>{reviews.name}</Card.Title>
    <Card.Text>
            {reviews.description}
    </Card.Text>
  </Card.Body>
</Card>

                    

                </ul>)


            }



</div>
            
      
    );
};

export default Testimonials;