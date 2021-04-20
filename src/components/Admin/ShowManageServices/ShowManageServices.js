import React from 'react';
import { Button, Table, } from 'react-bootstrap';

const ShowManageServices = (props) => {
    const { name, price,_id, } = props.service;
     
     const  deleteService= id => {
        console.log(id);
       fetch(`https://protected-sands-24943.herokuapp.com/deleteService/${id} `,{
 
           method: 'DELETE',
 
        })
   
        .then(res => res.json())
       
        .then(result => {
   
      console.log('deleted product successfully')
 
        })
         
     }
    return (
        <div style={{marginRight:'30%'}}>
            <Table style={{backgroundColor: 'white'}} striped bordered hover size="sm">
        <thead>
          <tr>

            <th>Service</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{price}$</td>
            
           
            <td> <Button onClick={() => deleteService(_id) } variant="info">Delete</Button></td>

          </tr>
       
        </tbody>
      </Table> 

            
        </div>
    );
};

export default ShowManageServices;