import React from 'react';
// import React, {useContext } from 'react';
//  import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";

const MakeAppionment = () => {
//   const [loggedInUser, setLoggedInUser] = useContext(UserContext)
//        const UserEmail = loggedInUser.email;
//       const UserNames = loggedInUser.name;

    const { register, handleSubmit, watch, errors } = useForm();
    // const [imageURL, setIMageURL] = useState(null);
  
  
     const onSubmit = data => {
        const serviceData = {
          name: data.name,
          customerEmail: data.customerEmail,
          customerName: data.customerName,
          Phone: data.phone,
          description: data.description,
          // imageURL: imageURL
        };
        console.log(serviceData);
       const url = `http://localhost:5055/requestAppointment`;
      
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(serviceData)
        })
        .then(res =>{
        alert('You Will Get an Appointment by SMS')
        } 
        // console.log('server side response', res)
        )

     };
     
  



    return (
      <div className="align-items-center justify-content-around" style={{marginTop: '5%',marginLeft: '15%',backgroundColor:'blue',width:'700px' ,align: 'center'}}>
                <h1 style={{color:'white', textAlign: 'center'}}>Make Your Appointment</h1>
      <form onSubmit={handleSubmit(onSubmit)}> 
      <br/>
     <input style={{height:'30px', width:'400px',marginLeft: '5%'}} type="text" placeholder="your email address" name="customerEmail" defaultValue=""  ref={register} />
     <br/>
     <input style={{height:'30px', width:'400px',marginLeft: '5%'}} type="text" placeholder="Your name" name="customerName" defaultValue=""  ref={register} />
     <br/>
     
     <input style={{height:'30px', width:'400px',marginLeft: '5%'}} type="text" placeholder="Your Phone Number" name="Phone" defaultValue="" ref={register} />

     <br/>
     
     <input style={{height:'30px', width:'400px',marginLeft: '5%'}} type="text" placeholder="Type your Service " name="name" defaultValue="" ref={register} />

     <br/>
    
     <input style={{height:'100px', width:'400px',marginLeft: '5%'}}  type="text" placeholder="description" name="description" defaultValue=""  ref={register} />
     <br/>
     <br/>
     <input style={{marginLeft: '20%',marginBottom:'1%'}} type="submit" />
   </form>
   </div>
  );
};

export default MakeAppionment;


