import React from 'react'
import './Login.css'
import {useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import MainHeading from './MainHeading'
import axios from './axios.js'

function Login() {

    const history = useHistory();
    

    

     const [flag,setFlag] = useState(0);
     const [id,setId] = useState();
     const [pass,setPass] = useState();
     const [passfromserver,setPassfromserver] = useState();
    

     const login = async (event)=>{

         event.preventDefault();
          await axios.post('/login',{
              id:id
          }).then((res)=>{
              setPassfromserver(res.data[0].pass);
              setFlag(1);
          }).catch((err)=>{
              console.log(err);
          })
          

         
     }

     function Print(){
         if(flag && pass==passfromserver){
            history.push('/homepage');
             return null;
         }
         else if(flag && pass!=passfromserver ){
             return (
                 <div>
                 <h1> You have entered wrong password</h1>
                 </div>
             )
         }
         else{
             return null;
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
             <Print/>
        </div>
    )
}

export default Login
