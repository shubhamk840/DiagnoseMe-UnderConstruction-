import React from 'react'
import './Login.css'
import {useState} from 'react'
import MainHeading from './MainHeading'
import axios from './axios.js'

function Login() {
   
     const [id,setId] = useState();
     const [pass,setPass] = useState();
     const [passfromserver,setPassfromserver] = useState();
    
    function timeout(ms) { //pass a time in milliseconds to this function
        return new Promise(resolve => setTimeout(resolve, ms));
      }

     const login = async (event)=>{
         event.preventDefault();
          await axios.post('/login',{
              id:id
          }).then((res)=>{
              setPassfromserver(res.data[0].pass);
          }).catch((err)=>{
              console.log(err);
          })

          if(passfromserver){
              if(pass==passfromserver) alert("done");
              else alert("not done");
          }
         
     }


    return (

        <div>
                <MainHeading/>
               <div className="heading"><h1>😃 LogIn 😃</h1></div> 
            <div className="signup_main">
               
                 <form className = "signup_form ">
                <div className="signup_div"><label >Enter Id</label> <input value={id} onChange = {event => setId(event.target.value)} placeholder ="abc@gmail.com" type="text" required/></div>
                <div className="signup_div"><label >Enter Password</label><input value={pass} onChange = {event => setPass(event.target.value)} placeholder = "password" type ="password" required/></div>
                <button onClick={login} type="submit">LogIn</button>
                 </form>
                 
            </div>
            <div className="heading2"> <h3>Don't  have an account <span><a href="/"  >signup</a></span></h3></div> 
        </div>
    )
}

export default Login
