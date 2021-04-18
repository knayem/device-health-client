import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setIMageURL] = useState(null);
  
  
     const onSubmit = data => {
        const serviceData = {
          name: data.name,
          price: data.price,
          imageURL: imageURL
        };
        console.log(serviceData);
       const url = `http://localhost:5055/addService`;
      
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(serviceData)
        })
        .then(res =>{
        alert('service Added')
        } 
        // console.log('server side response', res)
        )

     };
     
    const handleImageUpload = event => {
      console.log(event.target.files[0])
       const imageData = new FormData();
       imageData.set('key', 'e6682fd88cad0bf758b82479435ce5c4');
        imageData.append('image', event.target.files[0]);
      
       axios.post('https://api.imgbb.com/1/upload', 
       
       imageData)
       .then(function (response) {
           setIMageURL(response.data.data.display_url);
      //    setIMageURL(response.data.data.display_url);
       })
       .catch(function (error) {
       console.log(error);
       });
  
    }



    return (
        <div style={{textAlign: 'center'}}>
       <h1>Add Your Provided Services</h1>
       <form onSubmit={handleSubmit(onSubmit)}> 
      <br/>
      <h2>Service</h2> <input type="text" placeholder="Type your Service " name="name" defaultValue="" ref={register} />
      <br/>
      
     <h2>Cost</h2> <input type="text" placeholder="price" name="price" defaultValue=""  ref={register} />

      <br/>
      <br/>
      <h2>Take Photo</h2> <input name="" type="file" onChange={handleImageUpload} />
      <br/>
      <br/>
      <input type="submit" />
    </form>
    </div>
  );
};

export default AddService;




