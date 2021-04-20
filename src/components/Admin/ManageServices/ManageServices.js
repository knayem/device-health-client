import React, { useEffect, useState } from 'react';
import ShowManageServices from '../ShowManageServices/ShowManageServices';

const ManageServices = () => {
    const [services, setServices] =useState([]);
    
    useEffect(() => {

       fetch('https://protected-sands-24943.herokuapp.com/services')
       .then(res => res.json())
       .then(data => setServices(data))
         }, [])
    return (
        <div>
       
          

       {
       
       
       services.map(service => <ShowManageServices service  ={service }></ShowManageServices>)
       
       
       }




       
         


       


         
     </div>
    );
};

export default ManageServices;