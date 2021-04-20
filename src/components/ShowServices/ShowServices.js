
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import { useHistory } from 'react-router';
const ShowServices = (props) => {
  
    const { name, price, imageURL,_id } = props.service;
  const serviceStyle = { background_color: ' rgb(47, 4, 88)', float: 'left ', padding: '15px' }

    return (
    
       
               <div id="div-position" style={serviceStyle} className="league d-flex align-items-center
         justify-content-around  ">
      <Card className="home-card" style={{ width: '26rem', height: '320px', backgroundColor: 'whiteSmoke' }}>
        <Card.Img style={{ width: '100%', height: '210px' }} variant="top" src={imageURL} />
        <Card.Body>
          <Card.Text>
            <h2 style={{ color: 'navy', textAlign: 'center' }}>  {name} <span style={{ color: 'red'}}> {price}$</span> </h2>
        
              <Link to={`/bookService/${_id}`}> 

              <Button  style={{ marginTop: '2px' }} variant="primary"  >Buy Now <FontAwesomeIcon icon={faArrowRight} /></Button> 
    
            
              {/* <Button   onClick={handleBook} style={{ marginTop: '2px' }} variant="primary"  >Buy Now <FontAwesomeIcon icon={faArrowRight} /></Button> */}
              </Link>  
          </Card.Text>

        </Card.Body>
      </Card>
            
        </div>
    );
};

export default ShowServices;