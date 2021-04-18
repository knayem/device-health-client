import React from 'react';
import OrderPlacement from '../../OrderPlacement/OrderPlacement';
import Sidebar from '../Sidebar/Sidebar';
import { Button,Container,Row,Col } from 'react-bootstrap';


import DashboardHeader from '../DashboardHeader/DashboardHeader';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Review from '../Review/Review';
import BookList from '../BookList/BookList';



const Dashboard = () => {

 


    return (



     
       <Row>
      <Col md={7}> 

 <DashboardHeader></DashboardHeader>
   </Col> 

   <Col md={5}> 
  <Switch>
     {/* <Route exact path="/dashboard">
  <OrderPlacement></OrderPlacement>
    </Route>   */}
     {/* <Route path="/bookService/:_id"> */}
       {/* <Dashboard></Dashboard> */}
      {/* <OrderPlacement></OrderPlacement> 
    </Route> */}
   
  
    <Route path="/bookService/review">
      <Review></Review>
    </Route>
    <Route path="/bookService/bookList">
      <BookList></BookList>
    </Route>
   
    {/* <Route path="/addService">
      <AddService></AddService>
    </Route> */}

   
     


  </Switch>
   </Col>
  </Row> 



//         <Container>

//   <Row>

//     <Col sm={3}>
//   <DashboardHeader></DashboardHeader>
    
//     </Col>
    
//     {/* <Col>
    
//     </Col> */}

     
//     <Col sm={9}>
//     <OrderPlacement></OrderPlacement>

//     </Col>
  
  
//   </Row>


// </Container>
        
    );
};

export default Dashboard;