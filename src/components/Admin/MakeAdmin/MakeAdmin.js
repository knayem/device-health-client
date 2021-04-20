import React from 'react';

import { useForm } from "react-hook-form";

const MakeAdmin = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    // const [imageURL, setIMageURL] = useState(null);
  
  
     const onSubmit = data => {
        const adminData = {
            email: data.email,
        
          // imageURL: imageURL
        };
        console.log(adminData);
       const url = `https://protected-sands-24943.herokuapp.com/makeAdmin`;
      
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(adminData)
        })
        .then(res =>{
        alert('admin Added')
        } 
        // console.log('server side response', res)
        )

     };
    return (
        <div style={{marginTop: '5%', backgroundColor:'tomato',width:'500px'}}>
        <h1>Make Admin</h1>
<form onSubmit={handleSubmit(onSubmit)}> 
<br/>
<input style={{height:'30px', width:'400px',marginLeft: '5%'}} type="text" placeholder="wright email address" name="email" defaultValue=""  ref={register} />

<br/>
<br/>

<br/>
<input style={{marginLeft: '40%',marginBottom:'3%'}} type="submit" />
</form>
</div>
    );
};

export default MakeAdmin;