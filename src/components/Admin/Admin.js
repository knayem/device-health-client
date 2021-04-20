import React from 'react';
 import AddService from './AddService/AddService';
 import { Row,Col } from 'react-bootstrap';

 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import AdminSidebar from './AdminSidebar/AdminSidebar';
import Home from '../Home/Home';
import ManageServices from './ManageServices/ManageServices';
import ShowManageServices from './ShowManageServices/ShowManageServices';
import MakeAdmin from './MakeAdmin/MakeAdmin';
import Review from '../Dashboard/Review/Review';
import AllBooks from './AllBooks/AllBooks';
import AppointmentRequest from './AppointmentRequest/AppointmentRequest';

const Admin = () => {
    return (
        <div>
        
            
            <Router>
            <Row>
            <Col md={7}>

        <AdminSidebar></AdminSidebar>
        </Col>

        <Col md={5}>
        <Switch>

        
           <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          
          <Route path="/bookList">
            <AllBooks></AllBooks>
          </Route>

          <Route path="/makeAdmin">
            <Review></Review>
          </Route>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          

          <Route path="/reqAppointment">
           <AppointmentRequest></AppointmentRequest>
          </Route>
          


        </Switch>
        </Col>
        </Row>

      </Router>
           
        </div>
    );
};

export default Admin;