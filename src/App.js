import './App.css';
import Admin from './components/Admin/Admin';

import Home from './components/Home/Home';
import Login from './components/Login/Login';
import React, { createContext, useState } from "react";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import OrderPlacement from './components/OrderPlacement/OrderPlacement';
import Review from './components/Dashboard/Review/Review';
import BookList from './components/Dashboard/BookList/BookList';
export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log(loggedInUser);
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      
      <Router>
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          

          <Route path="/dashboard/bookList">
           <BookList></BookList>
          </Route>

          <Route path="/dashboard/review">
            <Review></Review>
          </Route>
          
          <PrivateRoute path="/dashboard">
            <Dashboard />
          </PrivateRoute>
         
          
        
          <PrivateRoute path="/bookService/:_id">
             <OrderPlacement></OrderPlacement>
        
          </PrivateRoute>  
          
        
          <PrivateRoute path="/admin">
            <Admin></Admin>
          </PrivateRoute>


          <Route path="/login">
           <Login></Login>
          </Route>



        </Switch>

      </Router>
     
      </UserContext.Provider>
  );
}

export default App;
