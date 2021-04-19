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

   <Router>

  <Switch>
     {/* <Route exact path="/dashboard">
  <OrderPlacement></OrderPlacement>
    </Route>   */}
     {/* <Route path="/bookService/:_id"> */}
       {/* <Dashboard></Dashboard> */}
      {/* <OrderPlacement></OrderPlacement> 
    </Route> */}
  
  {/* <Route path="/dashboard/review">
      <Review></Review>
    </Route> */}
    {/* <Route path="/bookList">
      <BookList></BookList>
    </Route> */}



  
    {/* <Route path="/dashboard/review">
      <Review></Review>
    </Route>
    <Route path="/dashboard/bookList">
      <BookList></BookList>
    </Route>

    <Route path="/dashboard/bookService/:_id">
      <OrderPlacement></OrderPlacement>
    </Route> */}
   
    {/* <Route path="/addService">
      <AddService></AddService>
    </Route> */}

   
     


  </Switch>

  </Router>
   </Col>
  </Row> 


        
    );
};

export default Dashboard;