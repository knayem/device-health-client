import React, { useEffect, useState } from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import { Card } from 'react-bootstrap';

const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    console.log(reviews);
    useEffect(() => {



        fetch('https://protected-sands-24943.herokuapp.com/reviews')
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
                    
                    <Card style={{width: '100%'}}>
  <Card.Header style={{ textAlign: 'center'}}> <h5>{reviews.customerName}</h5></Card.Header>
  <Card.Body>
    <Card.Title style={{ textAlign: 'center'}}>{reviews.name}</Card.Title>
    <Card.Text style={{ textAlign: 'center'}}>
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