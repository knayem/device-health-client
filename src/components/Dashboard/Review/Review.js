import React, {useContext } from 'react';
 import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";

const Review = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext)
       const UserEmail = loggedInUser.email;
      const UserNames = loggedInUser.name;

    const { register, handleSubmit, watch, errors } = useForm();
    // const [imageURL, setIMageURL] = useState(null);
  
  
     const onSubmit = data => {
        const serviceData = {
          name: data.name,
          customerEmail: data.customerEmail,
          customerName: data.customerName,
          description: data.description,
          // imageURL: imageURL
        };
        console.log(serviceData);
       const url = `http://localhost:5055/addReview`;
      
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
     
    // const handleImageUpload = event => {
    //   console.log(event.target.files[0])
    //    const imageData = new FormData();
    //    imageData.set('key', '386ffebd8a87c90c60e29d6dfc72e4e2');
    //     imageData.append('image', event.target.files[0]);
      
    //    axios.post('https://api.imgbb.com/1/upload', 
       
    //    imageData)
    //    .then(function (response) {
    //        setIMageURL(response.data.data.display_url);
    //   //    setIMageURL(response.data.data.display_url);
    //    })
    //    .catch(function (error) {
    //    console.log(error);
    //    });
  
    // }



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



