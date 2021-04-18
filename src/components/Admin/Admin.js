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
           <Route exact path="/admin">
         <ManageServices></ManageServices>
          </Route> 
           <Route path="/manageServices">
            <ManageServices></ManageServices>
          </Route>
          {/* <Route path="/home">
            <Home></Home>
          </Route> */}
          <Route path="/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
         
          <Route path="/addService">
            <AddService></AddService>
          </Route>

          {/* <Route path="/editProduct">
          <EditProduct/>
            
          </Route>
            */}


        </Switch>
        </Col>
        </Row>

      </Router>
           
        </div>
    );
};

export default Admin;