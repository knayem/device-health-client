import React, {useContext } from 'react';
 import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
       const UserEmail = loggedInUser.email;
      const UserNames = loggedInUser.name;

    const { register, handleSubmit, watch, errors } = useForm();
    // const [imageURL, setIMageURL] = useState(null);
  
  console.log('review');
     const onSubmit = data => {
        const serviceData = {
          name: data.name,
          customerEmail: data.customerEmail,
          customerName: data.customerName,
          description: data.description,
          // imageURL: imageURL
        };
        console.log(serviceData);
       const url = `https://protected-sands-24943.herokuapp.com/addReview`;
      
        fetch(url, {
          method: 'POST', 
          headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(serviceData)
        })
        .then(res =>{
        alert('Thanks For Your Valuable Review')
        } 
        // console.log('server side response', res)
        )

     };
     
  



    return (
      <div style={{marginTop: '5%', backgroundColor:'tomato',width:'500px'}}>
                <h1>Give Us Your Service Review</h1>
      <form onSubmit={handleSubmit(onSubmit)}> 
      <br/>
     <input style={{height:'30px', width:'400px',marginLeft: '5%'}} type="text" placeholder="your email address" name="customerEmail" defaultValue={UserEmail}  ref={register} />
      
     <br/>
     <br/>
     <input style={{height:'30px', width:'400px',marginLeft: '5%'}} type="text" placeholder="Your name" name="customerName" defaultValue={UserNames}  ref={register} />
      
     <br/>
     <br/>
     
     <input style={{height:'30px', width:'400px',marginLeft: '5%'}} type="text" placeholder="Type your Service " name="name" defaultValue="" ref={register} />

     <br/>
     <br/>
     <input style={{height:'100px', width:'400px',marginLeft: '5%'}}  type="text" placeholder="description" name="description" defaultValue=""  ref={register} />
     <br/>
     <br/>
     {/* <h2>Take Photo</h2> <input style={{marginLeft: '40%',marginBottom:'3%'}} name="" type="file" onChange={handleImageUpload} /> */}
     <br/>
     <br/>
     <input style={{marginLeft: '40%',marginBottom:'3%'}} type="submit" />
   </form>
   </div>
  );
};

export default Review;



