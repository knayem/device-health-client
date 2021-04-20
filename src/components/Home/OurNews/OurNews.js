import React from 'react';
import { Card,CardGroup, } from 'react-bootstrap';

const OurNews = () => {
    return (
        <div>
            <h1 style={{textAlign: 'center'}}>Our News</h1>
            <CardGroup>
                <Card>
                    <Card.Img
                        variant="top"
                        src="holder.js/100px160"

                    />
                    <Card.Body>

                        <Card.Title style={{ color:'blue'}}>
                           TERMS OF USE OF PHONES AND TABLETS IN HOT COUNTRIES
</Card.Title>
                        <Card.Text>

                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas tempora enim earum consequatur mollitia voluptates dolore nisi temporibus placeat consequuntur blanditiis laborum incidunt voluptatem sed dolores, nam distinctio corrupti? <span style={{ color:'red',text:'bold'}}>READ MORE </span>
</Card.Text>


                    </Card.Body>
<Card.Footer>

    <small className="text-muted" >
      Our News
    </small>
</Card.Footer>



                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src="holder.js/100px160"

                    />
                    <Card.Body>

                        <Card.Title style={{ color:'blue'}}>
                            THE TRANSFER OF DATE FROM TABLET TO PHONE
</Card.Title>
                        <Card.Text>

                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas tempora enim earum consequatur mollitia voluptates dolore nisi temporibus placeat consequuntur blanditiis laborum incidunt voluptatem sed dolores, nam distinctio corrupti? <span style={{ color:'red',text:'bold'}}>READ MORE </span>
</Card.Text>


                    </Card.Body>
<Card.Footer>

    <small className="text-muted" >
      Our News
    </small>
</Card.Footer>



                </Card>
                <Card>
                    <Card.Img
                        variant="top"
                        src="holder.js/100px160"

                    />
                    <Card.Body>

                        <Card.Title style={{ color:'blue'}}>
                            How TO CHOOSE HEADPHONES FOR YOUR SMARTPHONE
</Card.Title>
                        <Card.Text>

                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe voluptas tempora enim earum consequatur mollitia voluptates dolore nisi temporibus placeat consequuntur blanditiis laborum incidunt voluptatem sed dolores, nam distinctio corrupti? <span style={{ color:'red',text:'bold'}}>READ MORE </span>
</Card.Text>


                    </Card.Body>
<Card.Footer>

    <small className="text-muted" >
      Our News
    </small>
</Card.Footer>



                </Card>


            </CardGroup>
        </div>

    );
};

export default OurNews;