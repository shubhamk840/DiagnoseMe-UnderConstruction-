import React from 'react'
import './Signup.css'
import {useState} from 'react'
import MainHeading from './MainHeading'
import axios from './axios.js'

function Signup() {
   
     const [id,setId] = useState();
     const [pass,setPass] = useState();
     const [passtwo,setPasstwo] = useState();

     const signup = (event)=>{
          if(pass==passtwo){
                     axios.post('/login',{
                         id:id,
                         pass:pass,
                     }).then((res)=>{
                         console.log(res);
                     }).catch(e=>console.log(e));
                     alert("Your have successfully signed up  ");
                     
          }
          else{
              alert("Password Do Not Match")
              setPass('');
              setPasstwo('')
          }
     }


    return (

        <div>
                <MainHeading/>
               <div className="heading"><h1>😮 SignUp 😮</h1></div> 
            <div className="signup_main">
               
                 <form className = "signup_form ">
                <div className="signup_div"><label >Enter Id</label> <input value={id} onChange = {event => setId(event.target.value)} placeholder ="abc@gmail.com" type="text"/></div>
                <div className="signup_div"><label >Enter Password</label><input value={pass} onChange = {event => setPass(event.target.value)} placeholder = "password" type ="password"/></div>
                <div className="signup_div"><label >Confirm Password </label><input value={passtwo} onChange = {event => setPasstwo(event.target.value)} placeholder = "confirm password" type ="password"/></div>
                 <button onClick={signup} type="submit">Submit</button>
                 </form>
                 
            </div>
            <div className="heading2"> <h3>Already have an account <span><a href="/login"  >login</a></span></h3></div> 
      
        </div>
    )
}

export default Signup
